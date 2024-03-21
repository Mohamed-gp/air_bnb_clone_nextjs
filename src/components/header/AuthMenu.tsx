import { authActions } from "@/redux/authSlice/authSlice";
import { IRootState } from "@/redux/store";
import { uiActions } from "@/redux/uiSlice/uiSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { signOut } from "next-auth/react";

export default function AuthMenu({}) {
  const dispatch = useDispatch();
  const user = useSelector((state: IRootState) => state.auth.user);
  const menuIsOpen = useSelector((state: IRootState) => state.ui.menuIsOpen);
  return (
    <>
      {menuIsOpen &&
        (!user ? (
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
                    signOut();
                    dispatch(authActions.logout());
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
