"use client";
import { IRootState } from "@/redux/store";
import { uiActions } from "@/redux/uiSlice/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { signOut, useSession } from "next-auth/react";
import { authActions } from "@/redux/authSlice/authSlice";
import Link from "next/link";

export default function AuthMenu() {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const menuIsOpen = useSelector((state: IRootState) => state.ui.menuIsOpen);

  return (
    <>
      {menuIsOpen &&
        (!session?.user ? (
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
                <li className="text-sm hover:bg-hoverColor w-full px-3 py-1 duration-500">
                  My Trips
                </li>
                <Link href="/favorites">
                  <li className="text-sm hover:bg-hoverColor w-full px-3 py-1 duration-500">
                    My Favorites
                  </li>
                </Link>
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
                    dispatch(authActions.logout());
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
