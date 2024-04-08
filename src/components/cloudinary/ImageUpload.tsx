"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { FaCloudArrowUp, FaX } from "react-icons/fa6";

interface ImageUploadProps {
  imagesrc: string | null;
  setimagesrc: React.Dispatch<React.SetStateAction<any>>;
}
const ImageUpload = ({ imagesrc, setimagesrc }: ImageUploadProps) => {
  const handleSubmitImage = (e) => {
    setimagesrc(e.info.secure_url);
  };
  return (
    <CldUploadWidget
      onUpload={handleSubmitImage}
      options={{ maxFiles: 1 }}
      uploadPreset="kbym49ai"
    >
      {({ open }) => {
        return (
          <>
            {imagesrc ? (
              <div className="h-[200px] w-full relative">
                <Image
                  src={imagesrc}
                  alt="House"
                  fill
                  priority={true}
                  sizes="100%"
                  quality={100}
                  className="rounded-3xl group-hover:scale-110 duration-500 w-auto h-auto object-cover  "
                />
                <FaX
                  className="absolute -top-2 text-3xl p-1 w-6 h-6 rounded-full -right-2 bg-red-500 text-white cursor-pointer"
                  onClick={() => setimagesrc(null)}
                />
              </div>
            ) : (
              <button
                className="w-full h-[200px] rounded-xl border-dashed border-2 opacity-70 flex justify-center items-center text-4xl text-black cursor-pointer"
                // onChange={handleSubmitImage}
                onClick={(e) => {
                  open?.();
                  e.preventDefault();
                }}
              >
                <FaCloudArrowUp size={80} />
              </button>
            )}
          </>
        );
      }}
    </CldUploadWidget>
  );
};
export default ImageUpload;

