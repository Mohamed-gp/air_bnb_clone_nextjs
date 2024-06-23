"use client";
import Image from "next/image";
import Link from "next/link";
import logoImg from "@/../public/images/logo.png";
import { uiActions } from "@/redux/uiSlice/uiSlice";
import { useDispatch } from "react-redux";


const LeftHeader = () => {
  const dispatch = useDispatch();
  return (
    <Link href="/" onClick={() => dispatch(uiActions.setCategoryLogoClick(true))} className="left-header w-[198px] md:block hidden ">
      <Image
        src={logoImg}
        alt="logo"
        className="w-[119px] object-cover"
      />
    </Link>
  );
};

export default LeftHeader;
