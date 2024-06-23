"use client";

/* calendar */
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";
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

const ReservationCalendar = ({ userHosterInfo }: any) => {
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  /**
   * Represents the initial date selection for the ReservationCalendar component.
   * This object contains the start date, end date, and key for the selection.
   */
  const initialDate = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  // const disabledDates = (startDate,endDate) => {
  //   userHosterInfo?.reservations.forEach(dateRange => {
  //     const range =
  //   })
  // }
  return (
    <>
      {/* <div>ReservationCalendar</div>
      <DateRange
        rangeColors={["#262626"]}
        ranges={[selectionRange]}
        date={new Date()}
        // onChange={calendarChangeHandler}
        direction="vertical"
        showDateDisplay={false}
        minDate={new Date()}
        // onChange={handleSelect}
        // disabledDates={disabledDates}
      /> */}
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </>
  );
};
export default ReservationCalendar;
