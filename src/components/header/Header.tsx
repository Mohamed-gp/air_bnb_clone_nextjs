import LeftHeader from "./LeftHeader";
import CenterHeader from "./CenterHeader";
import RightHeader from "./RightHeader";
import { useSession } from "next-auth/react";

const Header = async () => {
  return (
    <header className="shadow-sm sticky w-full z-10">
      <div className="container flex py-6 items-center justify-between gap-2">
        <LeftHeader />
        <CenterHeader />
        <RightHeader />
      </div>
    </header>
  );
};
export default Header;
