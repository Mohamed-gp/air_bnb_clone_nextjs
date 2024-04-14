import { createListingVerify } from "@/joi/joi";
import prisma from "@/lib/dbClient";
import { NextRequest, NextResponse, URLPattern } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { error } = createListingVerify(body);
  if (error) {
    return NextResponse.json(
      { message: error.details[0].message },
      { status: 400 }
    );
  }
  const property = await prisma.listing.create({
    data: body,
  });
  return NextResponse.json(
    { messsage: "Listing Created Succefuly ", data: property },
    { status: 200 }
  );
};

export const GET = async (req: NextRequest) => {
  let query = {};
  const category = req.nextUrl.searchParams.get("category");
  if (category && category != "undefined") {
    query = {
      category: category,
    };
  }
  const listings = await prisma.listing.findMany({
    where: query,
    orderBy : {
      createdAt : "desc"
    }
  });
  return NextResponse.json({data : listings}, { status: 200 });
};
