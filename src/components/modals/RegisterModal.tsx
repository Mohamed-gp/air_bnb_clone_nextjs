import { useEffect } from "react";
import { FaX } from "react-icons/fa6";

interface RegisterModalProps {
  regist
}


const RegisterModal = ({}) => {

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".auth-model") && menuisopen) {
        set((prev) => false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuisopen, setmenuisopen]);

  return (
    <>
      <div>
        <div className="fixed w-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-white rounded-lg z-10">
          <div className="relative py-4 border-b-[#0000003b] border-b-2">
            <p className="text-center font-bold text-sm">Register</p>
            <FaX className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] opacity-60 cursor-pointer" />
          </div>
          <div className="py-6 px-4 flex flex-col gap-2">
            <p className="font-bold">Welcome To Airbnb</p>
            <p className="opacity-60 text-xs">Create an Account</p>
            {/* email */}
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute top-1 left-3 text-[10px] opacity-50"
              >
                Email
              </label>
              <input
                type="email"
                name=""
                id="email"
                className="pt-5 pb-2 px-3 border-2 text-xs w-full focus:outline-none rounded-md"
              />
            </div>
            {/* name */}
            <div className="relative">
              <label
                htmlFor="name"
                className="absolute top-1 left-3 text-[10px] opacity-50"
              >
                Name
              </label>
              <input
                type="text"
                name=""
                id="name"
                className="pt-5 pb-2 px-3 border-2 text-xs w-full focus:outline-none rounded-md"
              />
            </div>
            {/* email */}
            <div className="relative">
              <label
                htmlFor="password"
                className="absolute top-1 left-3 text-[10px] rounded-md"
              >
                Password
              </label>
              <input
                type="password"
                name=""
                id="password"
                className="pt-5 pb-2 px-3 border-2 text-xs w-full focus:outline-none  rounded-md "
              />
            </div>
            <input
              type="submit"
              value="Continue"
              className="text-white bg-mainColor w-full text-center py-2 my-2 rounded-md font-bold tracking-wide"
            />
          </div>
          <div className="fixed w-screen h-screen bg-transparent left-0 z-[9] top-0"></div>
        </div>
      </div>
    </>
  );
};
export default RegisterModal;
