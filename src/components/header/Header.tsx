import Image from "next/image";
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import LeftHeader from "./LeftHeader";
import CenterHeader from "./CenterHeader";
import RightHeader from "./RightHeader";

const Header = () => {
  return (
    <header className="shadow-sm fixed w-full z-10">
      <div className="container flex py-6 items-center justify-between gap-2">
        <LeftHeader />
        <CenterHeader />
        <RightHeader />
      </div>
    </header>
  );
};
export default Header;
