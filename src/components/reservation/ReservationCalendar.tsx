"use client";

/* calendar */
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useEffect, useState } from "react";
// import {} from "date-fns"

// interface UserHosterInfoInterface {
//   userHosterInfo: {
//     name: string | null;
//     image: string | null;
//     reservations: {
//       id: string;
//       userId: string;
//       listingId: string;
//       startDate: Date;
//       endDate: Date;
//       totalPrice: number;
//       createdAt: Date;
//     }[];
//   };
// }

// interface ReservationCalendarProps {
//   userHosterInfo: UserHosterInfoInterface;
// }

const ReservationCalendar = ({ userHosterInfo, listingId, price }: any) => {
  // const [selectionRange, setSelectionRange] = useState<any>({
  /**
   * Represents the initial date selection for the ReservationCalendar component.
   * This object contains the start date, end date, and key for the selection.
   */
  const initialSelectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  const [selectionRange, setselectionRange] = useState<any>([
    initialSelectionRange,
  ]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [differenceInDays, setdifferenceInDays] = useState(0);
  //   const disabledDates = (startDate,endDate) => {
  //   userHosterInfo?.reservations.forEach(dateRange => {
  //     const range =
  //   })
  // }
  useEffect(() => {
    const differenceInMSec =
      selectionRange[0].endDate - selectionRange[0].startDate;
    setdifferenceInDays(differenceInMSec / 1000 / 60 / 60 / 24);
    setTotalPrice(differenceInDays * price);
  }, [selectionRange]);
  return (
    <div className="flex flex-col bg-white p-6 rounded-xl h-fit col-span-4">
      <p className="my-2">
        <span className="text-2xl">${price} </span> night
      </p>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setselectionRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={selectionRange}
        rangeColors={["#FF5A5F"]}
      />
      <button
        // onClick={() => reserveHandler()}
        className="cursor-pointer mx-auto w-full   text-white px-6 py-1 rounded-xl bg-mainColor duration-300 hover:scale-105 justify-center my-2 flex items-center gap-2"
      >
        Reserve
      </button>
      <div className="flex justify-between my-2 text-2xl">
        <p className="font-bold text-lg">Nights</p>
        <p>
          {differenceInDays} * ${price}
        </p>
      </div>
      <div className="flex justify-between my-2 text-2xl">
        <p className="font-bold">Total</p>
        <p>{differenceInDays * price}$</p>
      </div>
    </div>
  );
};
export default ReservationCalendar;
