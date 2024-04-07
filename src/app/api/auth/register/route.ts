import { registerVerify } from "@/joi/joi";
import prisma from "@/lib/dbClient";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { email, username, password } = body;
  const { error } = registerVerify(body);
  if (error) {
    return NextResponse.json(
      { message: error.details[0].message, data: null },
      { status: 400 }
    );
  }
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (user) {
    return NextResponse.json(
      { message: "User Already Exist", data: null },
      { status: 400 }
    );
  }
  const newUser = await prisma.user.create({
    data: {
      email,
      username,
      hashedPassword: await bcrypt.hash(password, 10),
    },
    select: {
      email: true,
      username: true,
      id: true,
    },
  });
  return NextResponse.json(
    { message: "Account Created Successfuly", data: newUser },
    { status: 201 }
  );
};
