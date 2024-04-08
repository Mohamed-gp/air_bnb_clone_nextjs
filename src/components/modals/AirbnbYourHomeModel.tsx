"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "@/redux/store";
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
      {airBnbYourHome == 0 && (
        <CategoriesStep
          chosedCategory={chosedCategory}
          setchosedCategory={setchosedCategory}
        />
      )}
      {airBnbYourHome == 1 && (
        <LocationStep country={country} setcountry={setcountry} />
      )}
      {airBnbYourHome == 2 && (
        <InfoStep
          guestsCount={guestsCount}
          roomsCount={roomsCount}
          bathroomsCount={bathroomsCount}
          setroomsCount={setroomsCount}
          setguestsCount={setguestsCount}
          setbathroomsCount={setbathroomsCount}
        />
      )}
      {airBnbYourHome == 3 && (
        <ImagesStep imagesrc={imagesrc} setimagesrc={setimagesrc} />
      )}
      {airBnbYourHome == 4 && (
        <PriceStep
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
      )}
    </>
  );
};
export default AirbnbYourHomeModel;
