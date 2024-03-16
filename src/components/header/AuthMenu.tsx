import { IRootState } from "@/redux/store";
import { uiActions } from "@/redux/uiSlice/uiSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";

export default function AuthMenu({}) {
  const dispatch = useDispatch();
  const menuIsOpen = useSelector((state : IRootState) => state.ui.menuIsOpen);
  return (
    <>
      {menuIsOpen && (
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
      )}
    </>
  );
}
