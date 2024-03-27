"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

interface HeartIndividualProps {
  houseId: string;
}

const HeartIndividual = ({ houseId }: HeartIndividualProps) => {
  const { data: session, update } = useSession();


  return (
    <div>
      <FaHeart className={`absolute top-3 right-4 text-red-500`} />
    </div>
  );
};
export default HeartIndividual;
