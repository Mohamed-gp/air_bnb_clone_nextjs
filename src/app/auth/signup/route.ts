import { registerVerify } from "@/joi/joi";
import { NextRequest, NextResponse } from "next/server";
import { authBody } from "@/types/interfaces";
import { prismaClient } from "@/lib/dbClient";
import bcrypt from "bcrypt"

export async function POST(req: NextRequest) {
  const body: authBody = await req.json();
  const { error } = registerVerify(body); // validate with joi
  if (error) {
    return NextResponse.json(
      { message: error.details[0].message },
      { status: 400 }
    );
  }
  const oldUser = await prismaClient.user.findUnique({
    where : {
      email : body.email
    }
  }
  )
  if (oldUser) {
    return NextResponse.json({message : "user Already Exist"},{status : 400})
  }
  const  newUser = await prismaClient.user.create({
    data: {
      email: body.email,
      hashedPassword: await bcrypt.hash(body.password,10),
      username: body.username,
    },
  });

  return NextResponse.json({ message: "created succefuly",user: newUser }, { status: 201 });
  // create user and return his info
}
