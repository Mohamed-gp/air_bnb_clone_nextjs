"use client";
import { useState } from "react";
import { FaGithub, FaX } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { uiActions } from "@/redux/uiSlice/uiSlice";
import { signIn } from "next-auth/react";

const LoginModel = () => {
  const dispatch = useDispatch();

  // submit handler for the form
  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (data.email.trim() == "") {
      return toast.error("email musn't be empty");
    }
    if (data.password.trim() == "") {
      return toast.error("password musn't be empty");
    }
    const response = await signIn("credentials", { ...data, redirect: false });

    dispatch(uiActions.setLoginModelIsOpen(false));
    if (response?.error) {
      return toast.error(response?.error);
    }
    console.log(response)
  };
  // states to get the values of the form
  const [data, setdata] = useState({ email: "", password: "" });
  return (
    <>
      <div
        className={`fixed flex justify-center items-center bg-black/70 left-0 top-0 w-screen h-screen
         animation-on-show`}
      >
        <div
          className={`login-model  w-[400px] flex flex-col bg-white rounded-lg z-10 `}
        >
          <div className="relative py-4 border-b-[#0000003b]/10 border-b-2">
            <p className="text-center font-bold text-sm">login</p>
            <FaX
              onClick={() => {
                dispatch(uiActions.setLoginModelIsOpen(false));
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] opacity-60 cursor-pointer"
            />
          </div>
          <form
            onSubmit={submitHandler}
            className="py-6 px-4 flex flex-col gap-2"
          >
            <p className="font-bold">Welcome Back</p>
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
              className="text-white bg-mainColor w-full text-center py-2 my-2 rounded-md font-bold tracking-wide cursor-pointer"
            />
          </form>
          <div className="flex flex-col gap-3 pb-8">
            <button
              onClick={() => signIn("google")}
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
            <p className="opacity-50">Dont Have An Account? </p>
            <p
              className="cursor-pointer font-bold underline"
              onClick={() => {
                dispatch(
                  uiActions.setLoginModelIsOpen(false),
                  dispatch(uiActions.setRegisterModelIsOpen(true))
                );
              }}
            >
              Sign Up
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginModel;
