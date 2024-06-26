import HeartIndividual from "@/components/heartindividual/HeartIndividual";
import Image from "next/image";
import { categories } from "@/utils/categories";
import { MapIndividulaListing } from "@/components/mapIndividulaListing/MapIndividulaListing";
import ReservationCalendar from "@/components/reservation/ReservationCalendar";
import getCurrentUser, { getSession } from "@/app/actions/GetCurrentUserState";
import { Fragment } from "react";
import { Metadata } from "next";
import getHosterInfo from "@/app/actions/getHosterInfo";

export const metadata: Metadata = {
  title: "Listing ",
};
const page = async ({ params }: any) => {
  const { listingId } = params;
  const session = await getSession();
  const url =
    process.env.NODE_ENV == "development"
      ? process.env.DEV_URL
      : process.env.DEP_URL;
  const result = await fetch(url + `/api/listings/${listingId}`);
  const { data } = await result.json();

  const userHosterInfo = await getHosterInfo(data);
  console.log(userHosterInfo);
  const user = await getCurrentUser();
  console.log(user);

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
              <p className="font-semibold opacity-50">
                {userHosterInfo?.id == user?.id && "You"}
                {userHosterInfo?.id != user?.id && `${userHosterInfo?.name}`}

                {userHosterInfo?.id == user?.id && (
                  <span> (You Can't Reserve Your House)</span>
                )}
              </p>
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
      <div className="my-4 mx-auto relative rounded-3xl  cursor-pointer w-full h-[400px]">
        <Image
          src={data.imageSrc}
          alt={data.title}
          fill
          sizes="100%"
          quality={100}
          className="rounded-3xl group-hover:scale-110 duration-500 w-full"
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

      <div className="flex my-16">
        <MapIndividulaListing  locationValue={data?.locationValue as string} />
        {user?.id != userHosterInfo?.id && (
          <ReservationCalendar
            userHosterInfo={userHosterInfo}
            listingId={listingId}
            price={data?.price}
          />
        )}
      </div>
      {/* this should be in the backend logic for the ui */}
      {/* {!user && (<div>
        <p className="text-center font-bold text-xl">Please Login to make a reservation</p>
      </div>)} */}
    </div>
  );
};
export default page;
