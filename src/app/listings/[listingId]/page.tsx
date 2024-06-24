import HeartIndividual from "@/components/heartindividual/HeartIndividual";
import Image from "next/image";
import prisma from "@/lib/dbClient";
import { categories } from "@/utils/categories";
import { MapIndividulaListing } from "@/components/mapIndividulaListing/MapIndividulaListing";
import ReservationCalendar from "@/components/reservation/ReservationCalendar";
import { getSession } from "@/app/actions/GetCurrentUserState";
import {Fragment} from "react";
import { Metadata } from 'next';
 

export const metadata: Metadata = {
  title: 'Listing ',
};
const page = async ({ params }: any) => {
  const { listingId } = params;
  
  const session = await getSession();
  const result = await fetch(`http://localhost:3000/api/listings/${listingId}`);
  const { data } = await result.json();
  const userHosterInfo = await prisma.user.findUnique({
    where: {
      id: data.userId,
    },
    select: {
      hashedPassword: false,
      name: true,
      image: true,
      reservations: true,
    },
  });

  // disabledDates

  return (
    <div className="container my-12">
      <div className="flex md:justify-between items-center mb-8 md:text-left text-center gap-y-4 justify-center flex-col md:flex-row">
        <div className="flex flex-col">
          <h1 className="font-bold line-clamp-1">{data.title}</h1>
          <p className="opacity-70 line-clamp-1 ">{data.description}</p>
        </div>
        <div className="flex items-center md:flex-row flex-col-reverse gap-4 ">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <p className="font-bold">Hosted By:</p>
              <p className="font-semibold opacity-50">{userHosterInfo?.name}</p>
            </div>
            <div className="flex gap-4 items-center">
              <span className="opacity-50 font-semibold">
                {data.guestCount} Guests
              </span>
              <span className="opacity-50 font-semibold">
                {data.roomCount} Rooms
              </span>
              <span className="opacity-50 font-semibold">
                {data.bathroomCount} Bathrooms
              </span>
            </div>
          </div>
          <div className="size-9">
            <Image
              src={
                userHosterInfo?.image
                  ? userHosterInfo.image
                  : "/images/placeholder.jpg"
              }
              height={50}
              width={50}
              className="rounded-full"
              alt={
                userHosterInfo?.image
                  ? (userHosterInfo?.name as string)
                  : "placeholder"
              }
            />
          </div>
        </div>
      </div>
      <div className="h-[350px] max-w-[600px] my-4 mx-auto relative rounded-3xl overflow-hidden cursor-pointer">
        <Image
          src={data.imageSrc}
          alt={data.title}
          fill
          sizes="100%"
          quality={100}
          className="rounded-3xl group-hover:scale-110 duration-500 w-auto h-auto object-cover"
        />
        {session && <HeartIndividual houseId={data.id} />}
      </div>

      {categories.map((category) => {
        return (
          <Fragment key={new Date().getTime() * category.description.length}>
            {category.label == data.category && (
              <div className="flex flex-col items-center justify-center my-8 border-y py-4">
                <category.icon size={30} />
                <p className="font-bold ">{category.label}</p>
                <p className="text-sm opacity-50 font-bold">
                  {category.description}
                </p>
              </div>
            )}
          </Fragment>
        );
      })}

      <div className="my-16">
        <MapIndividulaListing locationValue={data?.locationValue as string} />
      </div>
      <ReservationCalendar userHosterInfo={userHosterInfo?.name}/>
    </div>
  );
};
export default page;
