import { FaMagnifyingGlass } from "react-icons/fa6";

const CenterHeader = () => {
  return (
    <div className="flex items-center gap-2 shadow-sm border-2 hover:shadow-md duration-500 py-2 px-4 rounded-3xl sm:w-auto w-full justify-between">
      <button className=" font-semibold text-xs">Any Where</button>
      <button className="border-x-2 px-3 font-semibold text-xs sm:block hidden">
        Any Week
      </button>
      <button className="flex items-center gap-4 ">
        <p className="opacity-60 text-xs sm:block hidden">Add Guest</p>
        <div className="size-7  rounded-full text-white bg-mainColor flex justify-center items-center text-xs p-1">
          <FaMagnifyingGlass />
        </div>
      </button>
    </div>
  );
};
export default CenterHeader;
