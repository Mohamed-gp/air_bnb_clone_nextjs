"use client"
import { IRootState } from "@/redux/store";
import { useSelector } from "react-redux";
import RegisterModel from "../modals/RegisterModel";
import AirbnbYourHomeModel from "../modals/AirbnbYourHomeModel";

const ModelParent = () => {
  const registerModelIsOpen = useSelector(
    (state: IRootState) => state.ui.registerModelIsOpen
  );
  const loginModelIsOpen = useSelector(
    (state: IRootState) => state.ui.loginModelIsOpen
  );
  return (
    <>
      {registerModelIsOpen && <RegisterModel />}
      {loginModelIsOpen && <RegisterModel />}
      <AirbnbYourHomeModel />
    </>
  );
};

export default ModelParent;