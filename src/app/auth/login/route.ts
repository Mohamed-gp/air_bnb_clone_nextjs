import { NextRequest, NextResponse } from "next/server";



export async function POST (req:NextRequest, res : NextResponse) {
    const body = await req.json()
    const {error} = // validate with joi
    if (error) {
        return NextResponse.json({message : error.details[0].message})
    }
    const oldUser = // use prisma client to get old user if exist 
    if (oldUser) {
        return NextResponse.json({message : "user alredy exit "})
    }
    // match passsword with bcrypt 
}