"use client";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/../public/images/logo.png";

const LeftHeader = () => {
  return (
    <Link href="/" className="left-header w-[198px] md:block hidden ">
      <Image
        src={logoImg}
        alt="logo"
        className="w-[119px] object-cover"
      />
    </Link>
  );
};
export default LeftHeader;
