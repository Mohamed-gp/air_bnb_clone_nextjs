"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { FaCloudArrowUp, FaX } from "react-icons/fa6";

interface ImageUploadProps {
    imagesrc: string | null;
    setimagesrc : React.Dispatch<React.SetStateAction<any>>;
}
const ImageUpload = ({imagesrc,setimagesrc}) => {
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
                  layout="fill"
                  objectFit="contain"
                  alt="House"
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

// // 'use client';

// import { CldUploadWidget } from "next-cloudinary";
// import Image from "next/image";
// import { useCallback } from "react";
// import { TbPhotoPlus } from 'react-icons/tb'

// declare global {
//   var cloudinary: any
// }

// const uploadPreset = "pgc9ehd5";

// interface ImageUploadProps {
//   onChange: (value: string) => void;
//   value: string;
// }

// const ImageUpload: React.FC<ImageUploadProps> = ({
//   onChange,
//   value
// }) => {
//   const handleUpload = useCallback((result: any) => {
//     onChange(result.info.secure_url);
//   }, [onChange]);

//   return (
//     <CldUploadWidget
//       onUpload={handleUpload}
//       uploadPreset={uploadPreset}
//       options={{
//         maxFiles: 1
//       }}
//     >
//       {({ open }) => {
//         return (
//           <div
//             onClick={() => open?.()}
//             className="
//               relative
//               cursor-pointer
//               hover:opacity-70
//               transition
//               border-dashed
//               border-2
//               p-20
//               border-neutral-300
//               flex
//               flex-col
//               justify-center
//               items-center
//               gap-4
//               text-neutral-600
//             "
//           >
//             <TbPhotoPlus
//               size={50}
//             />
//             <div className="font-semibold text-lg">
//               Click to upload
//             </div>
//             {value && (
//               <div className="
//               absolute inset-0 w-full h-full">
//                 <Image
//                   fill
//                   style={{ objectFit: 'cover' }}
//                   src={value}
//                   alt="House"
//                 />
//               </div>
//             )}
//           </div>
//         )
//     }}
//     </CldUploadWidget>
//   );
// }

// export default ImageUpload;
