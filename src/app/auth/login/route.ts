import { NextRequest, NextResponse } from "next/server";
import { prismaClient } from "../../../../lib/dbClient";
import { authBody } from "@/types/interfaces";
import { loginVerify } from "@/joi/joi";
import bcrypt from "bcrypt"



export async function POST (req:NextRequest) {
    const body:authBody = await req.json()
    const {error} = loginVerify(body)
    if (error) {
        return NextResponse.json({message : error.details[0].message})
    }
    const user = await prismaClient.user.findUnique({
        where : {email : body.email}
    })
    if (!user) {
        return NextResponse.json({message : "user doesn't exists"})
    }

    const matchedPassword = await bcrypt.compare(user.hashedPassword,body.password)
    return matchedPassword

    // match passsword with bcrypt 
}