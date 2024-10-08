"use client";

import Counter from "@/components/counter/Counter";
import { uiActions } from "@/redux/uiSlice/uiSlice";
import {  FaX } from "react-icons/fa6";
import React from "react";
import { useDispatch } from "react-redux";
interface InfoStepProps {
  guestsCount: number;
  setguestsCount: React.Dispatch<React.SetStateAction<number>>;
  roomsCount: number;
  setroomsCount: React.Dispatch<React.SetStateAction<number>>;
  bathroomsCount: number;
  setbathroomsCount: React.Dispatch<React.SetStateAction<number>>;
}

const InfoStep = ({
  guestsCount,
  setguestsCount,
  roomsCount,
  setroomsCount,
  bathroomsCount,
  setbathroomsCount,
}: InfoStepProps) => {
  const dispatch = useDispatch();

  const submitHandler = (
    e: React.FormEvent<HTMLInputElement>,
    direction: string
  ) => {
    e.preventDefault();
    dispatch(uiActions.setAirBnbYourHomeType(direction));
  };

  return (
    <div
      className={`fixed flex justify-center items-center bg-black/70 left-0 top-0 w-screen overflow-y-scroll h-screen
         animation-on-show z-10
        `}
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
        <form
          className="py-6 px-4 flex flex-col gap-2"
          onSubmit={(e : any) => submitHandler(e, "Next")}
        >
          <p className="font-bold">Share Some Basics About Your Place</p>
          <p className="opacity-60 text-xs">What Ameneties Do You Have</p>
          <div className="flex flex-col gap-3 my-3">
            <Counter
              value={guestsCount}
              title="Geusts"
              description="How Many Guests Do You Allow"
              setvalue={setguestsCount}
            />
            <Counter
              value={roomsCount}
              title="Rooms"
              description="How Many Romms Do You Have"
              setvalue={setroomsCount}
            />
            <Counter
              value={bathroomsCount}
              title="Bathrooms"
              description="How Many Bathrooms Do You Have"
              setvalue={setbathroomsCount}
            />
          </div>
          <div className="flex gap-2 ">
            <input
              onClick={(e) => submitHandler(e, "Back")}
              type="submit"
              value="Back"
              className="text-white cursor-pointer  bg-mainColor w-full text-center py-2 my-2 rounded-md font-bold tracking-wide"
            />
            <input
              onClick={(e) => submitHandler(e, "Next")}
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
export default InfoStep;
