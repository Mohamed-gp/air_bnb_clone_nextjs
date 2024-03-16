"use client";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import RegisterModel from "../modals/RegisterModel";
import AuthMenu from "./AuthMenu";
import LoginModel from "../modals/LoginModel";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "@/redux/uiSlice/uiSlice";
import { IRootState } from "@/redux/store";

const RightHeader = () => {
  const dispatch = useDispatch();
  const registerModelIsOpen = useSelector(
    (state : IRootState) => state.ui.registerModelIsOpen
  );
  const loginModelIsOpen = useSelector((state : IRootState) => state.ui.loginModelIsOpen);
  return (
    <>
      <div className="flex gap-3">
        <button className="md:block hidden font-semibold text-xs hover:bg-hoverColor rounded-3xl duration-500 py-1 px-3">
          Airbnb your Home
        </button>
        <div
          className="relative profile flex gap-2 border py-2 rounded-3xl px-3 hover:shadow-md cursor-pointer duration-500 items-center"
          onClick={() => dispatch(uiActions.toggleMenu(null))}
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
          {/* menu */}
          <AuthMenu />
        </div>
      </div>
      <RegisterModel />
      {/* <LoginModel /> */}
      {loginModelIsOpen && <LoginModel />}
    </>
  );
};
export default RightHeader;
