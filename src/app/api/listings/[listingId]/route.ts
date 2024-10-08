import { NextRequest, NextResponse } from "next/server";
// import prisma from "../../../../lib/dbClient"
import prisma from "@/lib/dbClient";

export async function POST(
  req: NextRequest,
  { params }: { params: { listingId: string } }
) {
  const { listingId } = params;
  const body = await req.json();
  const userId = body.userId;
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  user?.favoriteIds.find((id) => id == listingId)
  ? (user.favoriteIds = user.favoriteIds.filter((id) => id != listingId))
  : user?.favoriteIds.push(listingId);
  const userUpdated = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      favoriteIds : user?.favoriteIds
    },
  });
  return NextResponse.json(
    {
      message: "toggled successfuly",
      data : null
    },
    { status: 200 }
  );
}


export async function GET(req : NextRequest,{params} : {params : {listingId : string}}) {
  const {listingId} = params
  const listing = await prisma.listing.findUnique({
    where: {id : listingId},
    
  })
  return NextResponse.json({data : listing,message : "success"},{status : 200})
} 