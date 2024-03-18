"use client";

import { useEffect, useState } from "react";
import { IconType } from "react-icons/lib";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { categories } from "@/utils/categories";
import { useSelector } from "react-redux";

const Categories = () => {
  const CategoryLogoClick = useSelector((state) => state.ui.CategoryLogoClick);
  useEffect(() => {
    if (CategoryLogoClick) {
      setcategoryParams("All");
    }
  }, [CategoryLogoClick]);
  const [categoryParams, setcategoryParams] = useState(
    useSearchParams().get("category") || "All"
  );
  const router = useRouter();
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
    <div className="container flex gap-6 overflow-x-auto py-2 my-3 pb-7 ">
      {categories.map((category) => (
        <>
          <div
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
            {/* <span className="text-3xl">{icon()}</span> */}
            <h3 className="text-sm">{category.label}</h3>
          </div>
        </>
      ))}
    </div>
  );
};
export default Categories;
