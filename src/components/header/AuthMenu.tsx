import { authActions } from "@/redux/authSlice/authSlice";
import { IRootState } from "@/redux/store";
import { uiActions } from "@/redux/uiSlice/uiSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {toast} from "react-hot-toast"
import { signOut } from "next-auth/react";
import getCurrentUser from "@/app/actions/GetCurrentUserState";

export default async function AuthMenu() {
  const dispatch = useDispatch();
  const userSessionData = await getCurrentUser()
  console.log(userSessionData)
  const menuIsOpen = useSelector((state: IRootState) => state.ui.menuIsOpen);

  return (
    <>
      {menuIsOpen &&
        (!userSessionData? (
          <>
            <div className="auth-model absolute top-[55px]  py-3 rounded-2xl w-[160px] bg-white border-2 right-0 z-[11]">
              <ul className="flex flex-col gap-2">
                <li
                  className="text-sm hover:bg-hoverColor w-full px-3 py-1 duration-500"
                  onClick={() => {
                    dispatch(uiActions.setRegisterModelIsOpen(true));
                  }}
                >
                  Sign Up
                </li>
                <li
                  onClick={() => {
                    dispatch(uiActions.setLoginModelIsOpen(true));
                  }}
                  className="text-sm hover:bg-hoverColor w-full px-3 py-1 duration-500"
                >
                  Login
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="auth-model absolute top-[55px]  py-3 rounded-2xl w-[160px] bg-white border-2 right-0 z-[11]">
              <ul className="flex flex-col gap-2">
                <li
                  className="text-sm hover:bg-hoverColor w-full px-3 py-1 duration-500"
                  onClick={() => {
                    dispatch(uiActions.setRegisterModelIsOpen(true));
                  }}
                >
                  My Trips
                </li>
                <li
                  onClick={() => {
                    dispatch(uiActions.setLoginModelIsOpen(true));
                  }}
                  className="text-sm hover:bg-hoverColor w-full px-3 py-1 duration-500"
                >
                  My Favorites
                </li>
                <li className="text-sm hover:bg-hoverColor w-full px-3 py-1 duration-500">
                  My Reservations
                </li>
                <li className="text-sm hover:bg-hoverColor w-full px-3 py-1 duration-500">
                  My Properties
                </li>
                <li
                  onClick={() => {
                    dispatch(uiActions.setAirBnbYourHomeType("Zero"));
                  }}
                  className="text-sm hover:bg-hoverColor w-full px-3 py-1 duration-500"
                >
                  Airbnb My Home
                </li>
                <li
                  onClick={() => {
                    signOut({ redirect: false });
                    toast.success("Logged Out");
                  }}
                  className="text-sm hover:bg-hoverColor w-full px-3 py-1 duration-500"
                >
                  Logout
                </li>
              </ul>
            </div>
          </>
        ))}
    </>
  );
}
