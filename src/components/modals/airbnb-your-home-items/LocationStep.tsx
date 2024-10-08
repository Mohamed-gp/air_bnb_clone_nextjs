"use client";
import useCountries from "@/hooks/useCountries";
import { uiActions } from "@/redux/uiSlice/uiSlice";
import { FaX } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import Select from "react-select";
// import Map from "@/components/map/Map";
import { toast } from "react-hot-toast";
import dynamic from "next/dynamic";



interface LocationStepProps {
  country: any;
  setcountry: React.Dispatch<any>;
}

const LocationStep = ({ country, setcountry }: LocationStepProps) => {
  const dispatch = useDispatch();
  const { getAll } = useCountries();
  const submitHandler = (
    e: React.FormEvent<HTMLInputElement>,
    direction: string
  ) => {
    e.preventDefault();
    if (direction == "Next" && !country) {
      return toast.error("Please Choose A Location");
    }
    dispatch(uiActions.setAirBnbYourHomeType(direction));
  };

  const Map = dynamic(() => import("@/components/map/Map"), {
    loading: () => <p className="text-center font-bold my-10">loading...</p>,
    ssr: false
  })

  return (
    <div
      className="fixed flex justify-center items-center bg-black/70 left-0 top-0 w-screen overflow-y-scroll h-screen 
          animation-on-show z-10"
    >
      <div
        className="w-[400px] flex flex-col bg-white rounded-lg z-10 overflow-y-auto h-[80vh]"
      >
        <div className="relative py-4 border-b-[#0000003b]/10 border-b-2">
          <p className="text-center font-bold text-sm">Airbnb You Home!</p>
          <FaX
            onClick={() => {
              dispatch(uiActions.setAirBnbYourHomeType("Remove"));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] opacity-60 cursor-pointer"
          />
        </div>
        <form className="py-6 px-4 flex flex-col gap-2">
          <p className="font-bold">Where Is Your Place Located?</p>
          <p className="opacity-60 text-xs">Help Geusts Find You!</p>
          <div className="flex flex-wrap my-3 gap-5 justify-center relative z-10">
            <Select
              value={country}
              onChange={(e) => setcountry(e)}
              formatOptionLabel={(option: any) => (
                <div className="flex flex-row items-center gap-3 ">
                  <div>{option.flag}</div>
                  <div>
                    {option.label},
                    <span className="ml-1 text-neutral-500">
                      {option.region}
                    </span>
                  </div>
                </div>
              )}
              isClearable
              placeholder="Inser Your Location"
              options={getAll()}
              className="w-full"
              classNames={{
                control: () => "p-3 border-2 w-full",
                input: () => "text-lg",
                option: () => "text-lg",
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 6,
                colors: {
                  ...theme.colors,
                  primary: "black",
                  primary25: "#ffe4e6",
                },
              })}
            ></Select>
          </div>
          <Map latlng={country?.latlng} />
          <div className="flex gap-2 ">
            <input
              onClick={(e) => submitHandler(e, "Back")}
              type="submit"
              value="Back"
              className="text-white cursor-pointer  bg-mainColor w-full text-center py-2 my-2 rounded-md font-bold tracking-wide"
            />
            <input
              onClick={(e) => submitHandler(e, "Next")}
              type="submit"
              value="Next"
              className="cursor-pointer text-white bg-mainColor w-full text-center py-2 my-2 rounded-md font-bold tracking-wide"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default LocationStep;
