"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaGithub, FaX } from "react-icons/fa6";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

interface RegisterModalProps {
  registermodelisopen: boolean;
  setregistermodelisopen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterModel = ({
  registermodelisopen,
  setregistermodelisopen,
}: RegisterModalProps) => {
  // useEffect to hide the model when click outside the model
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".register-model") && registermodelisopen) {
        setregistermodelisopen((prev) => false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [registermodelisopen, setregistermodelisopen]);

  // submit handler for the form
  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (email.trim() == "") {
      return toast.success("title musn't be empty");
    }
    if (username.trim() == "") {
      return toast.success("username musn't be empty");
    }
    if (password.trim() == "") {
      return toast.success("password musn't be empty");
    }
    try {
      const { data } = await axios.post("/hell");
    } catch (error) {}
  };
  // states to get the values of the form
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <div
        className={`fixed flex justify-center items-center bg-black/70 left-0 top-0 w-screen h-screen ${
          registermodelisopen ? "animation-on-show " : "hidden "
        }`}
      >
        <div
          className={`register-model  w-[400px] flex flex-col bg-white rounded-lg z-10 `}
        >
          <div className="relative py-4 border-b-[#0000003b]/10 border-b-2">
            <p className="text-center font-bold text-sm">Register</p>
            <FaX
              onClick={() => {
                setregistermodelisopen(false);
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
                value={email}
                onChange={(e) => setemail(e.target)}
                type="email"
                name=""
                id="email"
                className="peer pt-5 pb-2 px-3 border-2 text-xs w-full focus:outline-none rounded-md"
              />
              <label
                htmlFor="email"
                className="absolute top-3 peer-focus:top-1 peer-focus:text-[10px] duration-500 left-3 text-[13px] opacity-50"
              >
                Email
              </label>
            </div>
            {/* name */}
            <div className="relative">
              <input
                type="text"
                name=""
                value={username}
                onChange={(e) => setusername(e.target)}
                id="username"
                className="peer pt-5 pb-2 px-3 border-2 text-xs w-full focus:outline-none rounded-md"
              />
              <label
                htmlFor="username"
                className="absolute peer-focus:text-[10px] peer-focus:top-1 top-3 duration-500 left-3 text-[13px] opacity-50"
              >
                Username
              </label>
            </div>
            {/* email */}
            <div className="relative">
              <input
                type="password"
                name=""
                value={password}
                onChange={(e) => setpassword(e.target)}
                id="password"
                className="peer pt-5 pb-2 px-3 border-2 text-xs w-full focus:outline-none  rounded-md "
              />
              <label
                htmlFor="password"
                className="absolute peer-focus:text-[10px] peer-focus:top-1 top-3 left-3 text-[13px] duration-500 opacity-50 rounded-md"
              >
                Password
              </label>
            </div>
            <input
              type="submit"
              value="Continue"
              className="text-white bg-mainColor w-full text-center py-2 my-2 rounded-md font-bold tracking-wide"
            />
          </form>
          <div className="flex flex-col gap-3 pb-8">
            <button className="relative bg-white border-2 border-black font-bold text-xs mx-3 py-2 rounded">
              Continue With Google
              <span className="absolute left-2 top-1/2 -translate-y-1/2 size-12 flex justify-center items-center">
                <FcGoogle className="text-xl" />
              </span>
            </button>
            <button className="relative bg-white border-2 border-black font-bold text-xs mx-3 py-2 rounded">
              Continue With Github
              <span className="absolute left-2 top-1/2 -translate-y-1/2 size-12 flex justify-center items-center">
                <FaGithub className="text-xl" />
              </span>
            </button>
          </div>
          <div className="flex gap-1 pb-4 ml-5 text-[12px]">
            <p className="opacity-50">Already Have An Account? </p>
            <p className="font-bold underline">Login</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterModel;