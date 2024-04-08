"use client";

import { useEffect, useState } from "react";
import { IconType } from "react-icons/lib";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { categories } from "@/utils/categories";
import { useSelector } from "react-redux";
import { IRootState } from "@/redux/store";



const Categories = () => {
  const CategoryLogoClick = useSelector((state:IRootState) => state.ui.CategoryLogoClick);
  const router = useRouter();
  useEffect(() => {
    if (CategoryLogoClick) {
      setcategoryParams("All");
    }
  }, [CategoryLogoClick,router]);
  const [categoryParams, setcategoryParams] = useState(
    useSearchParams().get("category") || "All"
  );
  const changeCategory = (title: string) => {
    if (title === categoryParams) {
      router.push("/");
      setcategoryParams("All");
      return;
    }
    setcategoryParams(title);
    router.push(`/?category=${title}`);
  };


  return (
    <div className="container flex gap-6 overflow-x-auto py-2 my-3 pb-7 items-center">
      {categories.map((category, index) => (
        <div
          key={index}
          onClick={() => {
            changeCategory(category.label);
          }}
          className={`${
            categoryParams == category.label
              ? "text-black border-b-2 border-b-black pb-1 "
              : "text-grayColor"
          } flex items-center space-x-2 flex-col gap-x-2  duration-300 cursor-pointer justify-center   hover:text-black hover:border-b-black hover:border-b-2 hover:pb-1`}
        >
          <category.icon size={30} />
          <h3 className="text-sm w-full ">{category.label}</h3>
        </div>
      ))}
    </div>
  );
};
export default Categories;
