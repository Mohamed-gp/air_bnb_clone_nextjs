import { createListingVerify } from "@/joi/joi";
import { prismaClient } from "@/lib/dbClient";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  //   to do joi error handler
  //     const {error} = createListingVerify(body)
  //     if (error) {
  //       return NextResponse.json({message : error.details[0].message}, {status : 400})
  //     }
  const property = await prismaClient.listing.create({
    data: body,
  });
  return NextResponse.json(
    { messsage: "Listing Created Succefuly ", data: property },
    { status: 200 }
  );
};
