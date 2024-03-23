"use client";

import { uiActions } from "@/redux/uiSlice/uiSlice";
import React, { useState } from "react";
import { FaDollarSign, FaMinus, FaPlus, FaX } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

interface PriceStepProps {
  airBnbYourHome: number;
  title: string;
  settitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setdescription: React.Dispatch<React.SetStateAction<string>>;
  price: string;
  setprice: React.Dispatch<React.SetStateAction<string>>;
  chosedCategory: string;
  country: string | null;
  imagesrc: string | null;
  guestsCount: number;
  roomsCount: number;
  bathroomsCount: number;
}

const PriceStep = ({
  airBnbYourHome,
  chosedCategory,
  country,
  settitle,
  setdescription,
  setprice,
  price,
  title,
  description,
  roomsCount,
  guestsCount,
  bathroomsCount,
  imagesrc,
}: PriceStepProps) => {
  const dispatch = useDispatch();
  const submitHandler = (
    e: React.FormEvent<HTMLInputElement>,
    direction: string
  ) => {
    e.preventDefault();
    dispatch(uiActions.setAirBnbYourHomeType(direction));
  };
  const user = useSelector((state) => state.auth.user);

  // form submit handler post method to add property
  const lastFormSubmitHandler = async (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    const dataToSubmit = {
      category: chosedCategory,
      locationValue: country?.toString(),
      guestCount: guestsCount,
      roomCount: roomsCount,
      bathroomCount: bathroomsCount,
      imageSrc: imagesrc,
      title,
      description,
      price: +price,
      userId: user.id,
    };
    try {
      const { data } = await axios.post("/api/listings", dataToSubmit);
      toast.success("Property Added Successfully");
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div
      className={`fixed flex justify-center items-center bg-black/70 left-0 top-0 w-screen overflow-y-scroll h-screen ${
        airBnbYourHome == 4 ? "animation-on-show " : "hidden"
      }`}
    >
      <div
        className={` w-[400px] flex flex-col bg-white rounded-lg z-10 overflow-y-auto h-[80vh]`}
      >
        <div className="relative py-4 border-b-[#0000003b]/10 border-b-2">
          <p className="text-center font-bold text-sm">Airbnb You Home!</p>
          <FaX
            onClick={() => {
              dispatch(uiActions.setAirBnbYourHomeType("Remove"));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] opacity-60 cursor-pointer"
          />
        </div>
        <form className="py-6 px-4 flex flex-col gap-2">
          <p className="font-bold">How Would You Describe Your House</p>
          <p className="opacity-60 text-xs">Tell Us More About Your Place</p>
          <div className="flex flex-col gap-3 my-3">
            <div className="relative">
              <input
                value={title}
                onChange={(e) => settitle(e.target.value)}
                type="text"
                name=""
                id="title"
                className="peer pt-5 pb-2 px-3 border-2 text-xs w-full focus:outline-none rounded-md"
              />
              <label
                htmlFor="title"
                className={`absolute ${
                  !title ? "text-[13px] top-3" : "text-[10px] top-1 "
                }  peer-focus:text-[10px] peer-focus:top-1 duration-500 left-3  opacity-50`}
              >
                Title
              </label>
            </div>
            <div className="relative">
              <input
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                type="text"
                name=""
                id="description"
                className="peer pt-5 pb-2 px-3 border-2 text-xs w-full focus:outline-none rounded-md"
              />
              <label
                htmlFor="description"
                className={`absolute ${
                  !description ? "text-[13px] top-3" : "text-[10px] top-1 "
                }  peer-focus:text-[10px] peer-focus:top-1 duration-500 left-3  opacity-50`}
              >
                Descritpion
              </label>
            </div>
            <div className="relative">
              <input
                value={price}
                onChange={(e) => setprice(e.target.value)}
                type="text"
                name=""
                id="price"
                className="peer pt-5 pb-2 px-3 border-2 text-xs w-full focus:outline-none rounded-md"
              />
              <label
                htmlFor="price"
                className={`absolute ${
                  !price ? "text-[13px] top-3" : "text-[10px] top-1 "
                }  peer-focus:text-[10px] peer-focus:top-1 duration-500 left-3  opacity-50`}
              >
                Price
              </label>
              <FaDollarSign className="absolute top-1/2 -translate-y-1/2 right-2 text-base font-bold " />
            </div>
          </div>
          <div className="flex gap-2 ">
            <input
              onClick={(e) => submitHandler(e, "Back")}
              type="submit"
              value="Back"
              className="text-white cursor-pointer  bg-mainColor w-full text-center py-2 my-2 rounded-md font-bold tracking-wide"
            />
            <input
              onClick={(e) => lastFormSubmitHandler(e)}
              type="submit"
              value="Next"
              className="cursor-pointer text-white bg-mainColor w-full text-center py-2 my-2 rounded-md font-bold tracking-wide"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default PriceStep;
