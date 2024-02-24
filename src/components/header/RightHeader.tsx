"use client";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import AuthModel from "./AuthModel";
import { useState } from "react";

const RightHeader = () => {
  const [isopen, setisopen] = useState(false);
  return (
    <div className="flex gap-3">
      <button className="md:block hidden font-semibold text-xs hover:bg-hoverColor rounded-3xl duration-500 py-1 px-3">
        Airbnb your Home
      </button>
      <div
        className="relative profile flex gap-2 border py-2 rounded-3xl px-3 hover:shadow-md cursor-pointer duration-500 items-center"
        onClick={() => setisopen((prev) => !prev)}
      >
        <FaBars />
        <div className="size-7 md:block hidden rounded-full overflow-hidden">
          <Image
            src="/images/placeholder.jpg"
            alt="profile-placeholder"
            width={30}
            height={30}
          />
        </div>
        <AuthModel isopen={isopen} />
      </div>
    </div>
  );
};
export default RightHeader;
