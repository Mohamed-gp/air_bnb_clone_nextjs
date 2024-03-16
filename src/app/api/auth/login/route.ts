import { prismaClient } from "@/lib/dbClient";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const POST = async (req: NextRequest) => {
    const body = await req.json()
    const {email , password} = body
    const oldUser = await prismaClient.user.findUnique({
        where: {
            email,
        }
    })

    if (!oldUser) {
        return NextResponse.json({message : "something went wrong" ,data: null},{status : 400})
    }
    const verified = await bcrypt.compare(password,oldUser.hashedPassword as string)
    if (!verified) {
        return NextResponse.json({message : "something went wrong"},{status : 400})
    }
    // const token = jwt.sign({id : oldUser.id},process.env.JWT_SECRET as string)
    // setCookies to do


    return NextResponse.json({message : "login successfuly",data : oldUser},{status : 200})
}