"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { FaGithub, FaX } from "react-icons/fa6";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "@/redux/uiSlice/uiSlice";
import { IRootState } from "@/redux/store";
import { signIn, useSession } from "next-auth/react";
import { authActions } from "@/redux/authSlice/authSlice";
import { categories } from "@/utils/categories";

const AirbnbYourHomeModel = () => {
  const airBnbYourHome = useSelector((state) => state.ui.airBnbYourHome);
  const dispatch = useDispatch();
  const [chosedCategory, setchosedCategory] = useState("");


  return (
    <>
      <div
        className={`fixed flex justify-center items-center bg-black/70 left-0 top-0 w-screen overflow-y-scroll h-screen ${
          airBnbYourHome == -1 ? "animation-on-show " : "hidden"
        }`}
      >
        <div
          className={` w-[400px] flex flex-col bg-white rounded-lg z-10 overflow-y-auto h-[80vh]`}
        >
          <div className="relative py-4 border-b-[#0000003b]/10 border-b-2">
            <p className="text-center font-bold text-sm">Airbnb You Home!</p>
            <FaX
              onClick={() => {
                dispatch(uiActions.setLoginModelIsOpen(false));
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] opacity-60 cursor-pointer"
            />
          </div>
          <form className="py-6 px-4 flex flex-col gap-2">
            <p className="font-bold">Which Of This Best Descripe Your Home</p>
            <p className="opacity-60 text-xs">Pick A Category</p>
            <div className="flex flex-wrap my-3 gap-5 justify-center">
              {categories.map((category) => {
                return (
                  <div
                  onClick={() => {setchosedCategory(category.label)}}
                    className={`${
                      chosedCategory == category.label
                        ? "text-black border-black"
                        : "text-grayColor"
                    } flex flex-col gap-1 w-[47%] justify-center border-2 p-2 rounded-xl    items-center  hover:text-black duration-500 hover:border-black`}
                  >
                    <category.icon size={30} />
                    <p className="text-sm">{category.label}</p>
                  </div>
                );
              })}
            </div>

            <input
              type="submit"
              className="text-white bg-mainColor w-full text-center py-2 my-2 rounded-md font-bold tracking-wide"
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default AirbnbYourHomeModel;

/////////////////////////////////////
