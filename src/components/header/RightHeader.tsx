"use client";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import AuthMenu from "./AuthMenu";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "@/redux/uiSlice/uiSlice";
import { IRootState } from "@/redux/store";


const RightHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector((state:IRootState) => state.auth.user);


  return (
    <>
      <div className="flex gap-3 w-[191px] justify-end">
        <div
          className="relative profile flex gap-2 border py-2 rounded-3xl px-3 hover:shadow-md cursor-pointer duration-500 items-center"
          onClick={() => dispatch(uiActions.toggleMenu(null))}
        >
          <FaBars />
          <div className="size-7 md:block hidden rounded-full overflow-hidden">
            <Image
              src={
                user?.image || `/images/placeholder.jpg`
              }
              alt="profile-placeholder"
              width={30}
              height={30}
            />
          </div>
          <AuthMenu />
        </div>
      </div>

    </>
  );
};
export default RightHeader;
