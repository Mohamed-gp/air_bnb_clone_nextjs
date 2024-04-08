"use client";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

interface HeartIndividualProps {
  houseId: string;
}

const HeartIndividual = ({ houseId }: HeartIndividualProps) => {
  return (
    <div>
      {/* <FaHeart className={`absolute top-3 right-4 text-red-500`} /> */}
      <FaHeart className={`absolute top-3 right-4 text-red-600  text-xl`} />
      <FaRegHeart className={`absolute top-3 right-4  text-white text-xl`} />
    </div>
  );
};
export default HeartIndividual;
