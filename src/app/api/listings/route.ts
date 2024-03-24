import { createListingVerify } from "@/joi/joi";
import { prismaClient } from "@/lib/dbClient";
import { NextRequest, NextResponse } from "next/server";

const handler = async (req: NextRequest) => {
  if (req.method == "POST") {
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
  }
  if (req.method == "GET") {
    const listings = await prismaClient.listing.findMany();
    return NextResponse.json(listings, { status: 200 });
  }
};

export { handler as POST ,handler as GET};
