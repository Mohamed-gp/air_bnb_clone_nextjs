"use client";

import Link from "next/link";

const EmptyListings = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "calc(100vh - 94.94px)" }}
    >
      <div className="flex flex-col items-center">
        <p className="font-bold">No Exact Much</p>
        <p className="opacity-70 text-sm mt-1 mb-3">
          Try Changing Or Removing Some Of Your Filters
        </p>
        <Link
          href="/"
          className="border-2 font-bold border-black px-6 py-2 rounded-xl"
        >
          Remove All Filters
        </Link>
      </div>
    </div>
  );
};
export default EmptyListings;
