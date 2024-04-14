"use client";
import useCountries from "@/hooks/useCountries";
import dynamic from "next/dynamic";

interface MapIndividulaListingProps {
  locationValue : string
}

export const MapIndividulaListing = ({ locationValue } : MapIndividulaListingProps) => {
  const { getByValue } = useCountries();
  const Map = dynamic(() => import("@/components/map/Map"), {
    loading: () => <p className="text-center font-bold my-10">loading...</p>,
    ssr: false,
  });
  const formated = getByValue(locationValue);

  return (
      <Map latlng={formated?.latlng as [number,number]} />
  );
};
