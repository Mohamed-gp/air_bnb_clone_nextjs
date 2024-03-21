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
import { useSession } from "next-auth/react";
import { authActions } from "@/redux/authSlice/authSlice";
import { useEffect } from "react";
import AirbnbYourHomeModel from "../modals/AirbnbYourHomeModel";

const RightHeader = () => {
  // to do sucurity any one with if the user sign with google then github the github info will override google info because they are with the same info
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const user = useSelector((state: IRootState) => state.auth.user);
  useEffect(() => {
    if (session) {
      const data = {
        email: session?.user?.email,
        image: session.user?.image,
        username: session.user?.name,
      };
      dispatch(authActions.login(data));
    }
  }, [session]);
  const registerModelIsOpen = useSelector(
    (state: IRootState) => state.ui.registerModelIsOpen
  );
  const loginModelIsOpen = useSelector(
    (state: IRootState) => state.ui.loginModelIsOpen
  );
  return (
    <>
      <div className="flex gap-3">
        <div
          className="relative profile flex gap-2 border py-2 rounded-3xl px-3 hover:shadow-md cursor-pointer duration-500 items-center"
          onClick={() => dispatch(uiActions.toggleMenu(null))}
        >
          <FaBars />
          <div className="size-7 md:block hidden rounded-full overflow-hidden">
            <Image
              src={user?.image ? user.image : `/images/placeholder.jpg`}
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
      <AirbnbYourHomeModel />
      {/* <LoginModel /> */}
      {loginModelIsOpen && <LoginModel />}
    </>
  );
};
export default RightHeader;
