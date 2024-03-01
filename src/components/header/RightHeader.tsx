"use client";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import RegisterModel from "../modals/RegisterModel";
import AuthMenu from "./AuthMenu";
import LoginModel from "../modals/LoginModel";

const RightHeader = () => {
  const [menuisopen, setmenuisopen] = useState(false);
  const [registermodelisopen, setregistermodelisopen] = useState(false);
  const [loginmodelisopen, setloginmodelisopen] = useState(false);

  return (
    <>
      <div className="flex gap-3">
        <button className="md:block hidden font-semibold text-xs hover:bg-hoverColor rounded-3xl duration-500 py-1 px-3">
          Airbnb your Home
        </button>
        <div
          className="relative profile flex gap-2 border py-2 rounded-3xl px-3 hover:shadow-md cursor-pointer duration-500 items-center"
          onClick={() => setmenuisopen((prev) => !prev)}
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
          <AuthMenu
            menuisopen={menuisopen}
            setmenuisopen={setmenuisopen}
            registermodelisopen={registermodelisopen}
            setregistermodelisopen={setregistermodelisopen}
            loginmodelisopen={loginmodelisopen}
            setloginmodelisopen={setloginmodelisopen}

          />
        </div>
      </div>
      <RegisterModel
        registermodelisopen={registermodelisopen}
        setregistermodelisopen={setregistermodelisopen}
      />
      <LoginModel
        loginmodelisopen={loginmodelisopen}
        setloginmodelisopen={setloginmodelisopen}
      />
    </>
  );
};
export default RightHeader;
