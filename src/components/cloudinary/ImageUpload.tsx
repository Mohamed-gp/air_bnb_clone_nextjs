import { CldUploadWidget } from "next-cloudinary";
const ImageUpload = () => {
  return (
    <CldUploadWidget uploadPreset="kbym49ai">
      {({ open }) => {
        return <button onClick={() => open()}>Upload an Image</button>;
      }}
    </CldUploadWidget>
  );
};
export default ImageUpload;
