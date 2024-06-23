"use client";
import Image from "next/image";
import HeartIndividual from "../heartindividual/HeartIndividual";
import Link from "next/link";
import { useSelector } from "react-redux";
import { IRootState } from "@/redux/store";

interface IndividualListingProps {
  title: string;
  imageSrc: string;
  description: string;
  price: number;
  id: string;
}

const IndividualListing = ({
  title,
  imageSrc,
  description,
  price,
  id,
}: IndividualListingProps) => {
  const userInfo = useSelector((state: IRootState) => state.auth.user);
  return (
    <Link
      href={`/listings/${id}`}
      className="flex h-[280px] flex-col w-[250px] group"
    >
      <div className="h-[250px] w-[250px]  relative rounded-3xl overflow-hidden cursor-pointer">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="100%"
          quality={100}
          className="rounded-3xl group-hover:scale-110 duration-500 w-auto h-auto object-cover  "
        />
        {userInfo && <HeartIndividual houseId={id} />}
      </div>
      <div className="flex items-center justify-between max-w-[300px] px-2 my-2">
        <div className="flex flex-col w-[70%]">
          <h1 className="font-bold line-clamp-1">{title}</h1>
          <p className="opacity-70 line-clamp-1 ">{description}</p>
        </div>
        <p className="font-bold line-clamp-1">${price}</p>
      </div>
    </Link>
  );
};
export default IndividualListing;
