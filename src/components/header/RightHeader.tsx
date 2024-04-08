"use client";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import RegisterModel from "../modals/RegisterModel";
import AuthMenu from "./AuthMenu";
import LoginModel from "../modals/LoginModel";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "@/redux/uiSlice/uiSlice";
import { useSession } from "next-auth/react";
import AirbnbYourHomeModel from "../modals/AirbnbYourHomeModel";
import { IRootState } from "@/redux/store";

const RightHeader = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const registerModelIsOpen = useSelector(
    (state: IRootState) => state.ui.registerModelIsOpen
  );
  const loginModelIsOpen = useSelector(
    (state: IRootState) => state.ui.loginModelIsOpen
  );

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
                session?.user?.image
                  ? session.user.image
                  : `/images/placeholder.jpg`
              }
              alt="profile-placeholder"
              width={30}
              height={30}
            />
          </div>
          <AuthMenu />
        </div>
      </div>
      {registerModelIsOpen && <RegisterModel />}
      {loginModelIsOpen && <LoginModel />}
      <AirbnbYourHomeModel />
    </>
  );
};
export default RightHeader;
