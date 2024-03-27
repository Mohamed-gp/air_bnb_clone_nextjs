"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaGithub, FaX } from "react-icons/fa6";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "@/redux/uiSlice/uiSlice";
import { IRootState } from "@/redux/store";
import { signIn } from "next-auth/react";

const RegisterModel = () => {
  const dispatch = useDispatch();
  const registerModelIsOpen = useSelector(
    (state: IRootState) => state.ui.registerModelIsOpen
  );
  // useEffect to hide the model   when click outside the model

  // submit handler for the form
  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (data.email.trim() == "") {
      return toast.error("email musn't be empty");
    }
    if (data.username.trim() == "") {
      return toast.error("username musn't be empty");
    }
    if (data.password.trim() == "") {
      return toast.error("password musn't be empty");
    }
    try {
      const result = await axios.post("/api/auth/register", data);
      console.log(result);
      toast.success(result.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
  // states to get the values of the form
  const [data, setdata] = useState({ username: "", email: "", password: "" });
  return (
    <>
      <div
        className={`fixed flex justify-center items-center bg-black/70 left-0 top-0 w-screen h-screen ${
          registerModelIsOpen ? "animation-on-show" : "hidden"
        }`}
      >
        <div
          className={`register-model  w-[400px] flex flex-col bg-white rounded-lg z-10 `}
        >
          <div className="relative py-4 border-b-[#0000003b]/10 border-b-2">
            <p className="text-center font-bold text-sm">Register</p>
            <FaX
              onClick={() => {
                dispatch(uiActions.setRegisterModelIsOpen(false));
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] opacity-60 cursor-pointer"
            />
          </div>
          <form
            onSubmit={submitHandler}
            className="py-6 px-4 flex flex-col gap-2"
          >
            <p className="font-bold">Welcome To Airbnb</p>
            <p className="opacity-60 text-xs">Create an Account</p>
            {/* email */}
            <div className="relative">
              <input
                value={data.email}
                onChange={(e) => setdata({ ...data, email: e.target.value })}
                type="email"
                name=""
                id="email"
                className="peer pt-5 pb-2 px-3 border-2 text-xs w-full focus:outline-none rounded-md"
              />
              <label
                htmlFor="email"
                className={`absolute ${
                  !data.email ? "text-[13px] top-3" : "text-[10px] top-1 "
                }  peer-focus:text-[10px] peer-focus:top-1 duration-500 left-3  opacity-50`}
              >
                Email
              </label>
            </div>
            {/* name */}
            <div className="relative">
              <input
                type="text"
                name=""
                value={data.username}
                onChange={(e) =>
                  setdata({ ...data, username: e.target.value })
                }
                id="username"
                className="peer pt-5 pb-2 px-3 border-2 text-xs w-full focus:outline-none rounded-md"
              />
              <label
                htmlFor="username"
                className={`absolute ${
                  !data.username
                    ? "text-[13px]  top-3   "
                    : "text-[10px] top-1 "
                }  peer-focus:text-[10px] peer-focus:top-1 duration-500 left-3  opacity-50`}
              >
                Username
              </label>
            </div>
            {/* email */}
            <div className="relative">
              <input
                type="password"
                name=""
                value={data.password}
                onChange={(e) => setdata({ ...data, password: e.target.value })}
                id="password"
                className="peer pt-5 pb-2 px-3 border-2 text-xs w-full focus:outline-none  rounded-md "
              />
              <label
                htmlFor="password"
                className={`absolute ${
                  !data.password ? "text-[13px] top-3" : "text-[10px] top-1 "
                }  peer-focus:text-[10px] peer-focus:top-1  duration-500 left-3  opacity-50`}
              >
                Password
              </label>
            </div>
            <input
              type="submit"
              className="text-white bg-mainColor w-full text-center py-2 my-2 rounded-md font-bold tracking-wide"
            />
          </form>
          <div className="flex flex-col gap-3 pb-8">
            <button
              onClick={() => signIn("google")} // we obviosly need to use the next-auth signIn function with the provider we want we can use in the defualt of our website with credentials or with the providers we have configured in the next-auth options
              className="relative bg-white border-2 border-black font-bold text-xs mx-3 py-2 rounded"
            >
              Continue With Google
              <span className="absolute left-2 top-1/2 -translate-y-1/2 size-12 flex justify-center items-center">
                <FcGoogle className="text-xl" />
              </span>
            </button>
            <button
              onClick={() => signIn("github")}
              className="relative bg-white border-2 border-black font-bold text-xs mx-3 py-2 rounded"
            >
              Continue With Github
              <span className="absolute left-2 top-1/2 -translate-y-1/2 size-12 flex justify-center items-center">
                <FaGithub className="text-xl" />
              </span>
            </button>
          </div>
          <div className="flex gap-1 pb-4 ml-5 text-[12px]">
            <p className="opacity-50">Already Have An Account? </p>
            <p
              className="cursor-pointer font-bold underline"
              onClick={() => {
                dispatch(
                  uiActions.setRegisterModelIsOpen(false),
                  dispatch(uiActions.setLoginModelIsOpen(true))
                );
              }}
            >
              Sign In
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterModel;
