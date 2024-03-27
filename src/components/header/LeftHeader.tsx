"use client";
import { uiActions } from "@/redux/uiSlice/uiSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

const LeftHeader = () => {

  return (
    <Link href="/" className="left-header w-[198px] md:block hidden">
      <Image
        priority
        src="/images/logo.png"
        width={100}
        height={100}
        alt="log"
      />
    </Link>
  );
};
export default LeftHeader;
