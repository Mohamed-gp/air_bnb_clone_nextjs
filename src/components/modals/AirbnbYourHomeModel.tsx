"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { FaGithub, FaX } from "react-icons/fa6";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "@/redux/uiSlice/uiSlice";
import { IRootState } from "@/redux/store";
import { signIn, useSession } from "next-auth/react";
import { authActions } from "@/redux/authSlice/authSlice";
import { categories } from "@/utils/categories";
import CategoriesStep from "./airbnb-your-home-items/CategoriesStep";
import LocationStep from "./airbnb-your-home-items/LocationStep"

const AirbnbYourHomeModel = () => {
  const airBnbYourHome = useSelector((state) => state.ui.airBnbYourHome);
  const dispatch = useDispatch();
  
  return (
    <>
      <CategoriesStep airBnbYourHome={airBnbYourHome} />
      <LocationStep airBnbYourHome={airBnbYourHome} />
    </>
  );
};
export default AirbnbYourHomeModel;

