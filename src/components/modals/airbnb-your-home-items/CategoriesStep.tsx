"use client";
import { uiActions } from "@/redux/uiSlice/uiSlice";
import { categories } from "@/utils/categories";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface CategoriesStepProps {
  airBnbYourHome: number;
}

const CategoriesStep = ({ airBnbYourHome }: CategoriesStepProps) => {
  const dispatch = useDispatch();
  const [chosedCategory, setchosedCategory] = useState("");
  const submitHandler = (
    e: React.FormEvent<HTMLFormElement>,
    direction: string
  ) => {
    e.preventDefault();
    if (chosedCategory != "") {
      dispatch(uiActions.setAirBnbYourHomeType(direction));
    } else {
      toast.error("Please Choose A Category");
    }
  };

  return (
    <div
      className={`fixed flex justify-center items-center bg-black/70 left-0 top-0 w-screen overflow-y-scroll h-screen ${
        airBnbYourHome == 0 ? "animation-on-show " : "hidden"
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
        <form
          className="py-6 px-4 flex flex-col gap-2"
          onSubmit={(e) => submitHandler(e, "Next")}
        >
          <p className="font-bold">Which Of This Best Descripe Your Home?</p>
          <p className="opacity-60 text-xs">Pick A Category!</p>
          <div className="flex flex-wrap my-3 gap-5 justify-center">
            {categories.map((category) => {
              return (
                <div
                  key={category.label}
                  onClick={() => {
                    setchosedCategory(category.label);
                  }}
                  className={`${
                    chosedCategory == category.label
                      ? "text-black border-black"
                      : "text-grayColor"
                  } flex cursor-pointer flex-col gap-1 w-[47%] justify-center border-2 p-2 rounded-xl    items-center  hover:text-black duration-500 hover:border-black`}
                >
                  <category.icon size={30} />
                  <p className="text-sm">{category.label}</p>
                </div>
              );
            })}
          </div>

          <input
            type="submit"
            value="Next"
            className="text-white bg-mainColor w-full text-center py-2 my-2 rounded-md font-bold tracking-wide"
          />
        </form>
      </div>
    </div>
  );
};
export default CategoriesStep;
