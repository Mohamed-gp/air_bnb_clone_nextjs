import { createListingVerify } from "@/joi/joi";
import prisma from "@/lib/dbClient";
import { NextRequest, NextResponse, URLPattern } from "next/server";

interface Props {
    params: { listingId: string }
}



export const POST = async (req: NextRequest,{params} : Props) => {
  // this is error if there is no body and you access to it
  // const body  = await req.json();
  const {listingId} = params 
  console.log(listingId)
  // console.log(listingId)
  return NextResponse.json({ message: "hello" }, { status: 200 });

//   const { startDate, endDate } = body;
//   if (new Date() > startDate) {
//     return NextResponse.json(
//       { message: "Start Date must be greater than today" },
//       { status: 400 }
//     );
//   }
//   if (startDate > endDate) {
//     return NextResponse.json(
//       { message: "End Date must be greater than Start Date" },
//       { status: 400 }
//     );
//   }

//   const isAlreadyReserved = await prisma.reservation.findFirst({
//     where: {
//       startDate: {
//         lte: endDate,
//       },
//       endDate: {
//         gte: startDate,
//       },
//     },
//   });
//   if (isAlreadyReserved) {
//     return NextResponse.json(
//       { message: "Property is already reserved for this date" },
//       { status: 400 }
//     );
//   }

//   const reservation = await prisma.reservation.create({
//     data: {
//       startDate: startDate,
//       endDate: endDate,
//       listing: {
//         connect: {
//           id: req.params.id,
//         },
//       },
//       userId: req.params.userId,
//       user: {
//         connect: {
//           id: req.params.userId,
//         },
//       },
//       totalPrice: 100,
//     },
//   });
};
// model Reservation {
//   id String @id @default(auto()) @map("_id") @db.ObjectId
//   userId String @db.ObjectId
//   listingId String @db.ObjectId
//   startDate DateTime
//   endDate DateTime
//   totalPrice Int
//   createdAt DateTime @default(now())

//   user User @relation(fields: [userId], references: [id], onDelete: Cascade)
//   listing Listing @relation(fields: [listingId], references: [id], onDelete: Cascade)
// }

// export const GET = async (req: NextRequest) => {
//   let query = {};
//   const category = req.nextUrl.searchParams.get("category");
//   if (category && category != "undefined") {
//     query = {
//       category: category,
//     };
//   }
//   const listings = await prisma.listing.findMany({
//     where: query,
//     orderBy : {
//       createdAt : "desc"
//     }
//   });
//   return NextResponse.json({data : listings}, { status: 200 });
// };
