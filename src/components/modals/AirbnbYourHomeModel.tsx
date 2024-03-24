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
import LocationStep from "./airbnb-your-home-items/LocationStep";
import InfoStep from "./airbnb-your-home-items/InfoStep";
import ImagesStep from "./airbnb-your-home-items/ImagesStep";
import PriceStep from "./airbnb-your-home-items/PriceStep";

const AirbnbYourHomeModel = () => {
  const airBnbYourHome = useSelector(
    (state: IRootState) => state.ui.airBnbYourHome
  );
  const [chosedCategory, setchosedCategory] = useState("");
  const [country, setcountry] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [guestsCount, setguestsCount] = useState(2);
  const [roomsCount, setroomsCount] = useState(3);
  const [bathroomsCount, setbathroomsCount] = useState(1);
  const [imagesrc, setimagesrc] = useState(null);
  const [price, setprice] = useState("");
  return (
    <>
      <CategoriesStep
        airBnbYourHome={airBnbYourHome}
        chosedCategory={chosedCategory}
        setchosedCategory={setchosedCategory}
      />
      <LocationStep
        airBnbYourHome={airBnbYourHome}
        country={country}
        setcountry={setcountry}
      />
      <InfoStep
        airBnbYourHome={airBnbYourHome}
        guestsCount={guestsCount}
        roomsCount={roomsCount}
        bathroomsCount={bathroomsCount}
        setroomsCount={setroomsCount}
        setguestsCount={setguestsCount}
        setbathroomsCount={setbathroomsCount}
      />
      <ImagesStep
        airBnbYourHome={airBnbYourHome}
        imagesrc={imagesrc}
        setimagesrc={setimagesrc}
      />
      <PriceStep
        airBnbYourHome={airBnbYourHome}
        price={price}
        setprice={setprice}
        title={title}
        settitle={settitle}
        description={description}
        setdescription={setdescription}
        chosedCategory={chosedCategory}
        country={country}
        guestsCount={guestsCount}
        roomsCount={roomsCount}
        bathroomsCount={bathroomsCount}
        imagesrc={imagesrc}
      />
    </>
  );
};
export default AirbnbYourHomeModel;
