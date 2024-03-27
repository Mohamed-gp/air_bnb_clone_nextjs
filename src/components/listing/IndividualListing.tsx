"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeartIndividual from "../heartindividual/HeartIndividual";

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
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`listings/${id}`)}
      className="flex h-[280px] flex-col w-[250px] group"
    >
      <div className="h-[160px] w-[250px]  relative rounded-3xl overflow-hidden">
        <Image
          src={imageSrc}
          width={250}
          height={160}
          alt={title}
          className="rounded-3xl group-hover:scale-110 duration-500"
        />
        <HeartIndividual houseId={id}/>
      </div>
      <div className="flex items-center justify-between max-w-[300px] px-2 my-2">
        <div className="flex flex-col w-[70%]">
          <h1 className="font-bold">{title}</h1>
          <p className="opacity-70 line-clamp-1 ">{description}</p>
        </div>
        <p className="font-bold line-clamp-1">${price}</p>
      </div>
    </div>
  );
};
export default IndividualListing;
