import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div
        className="flex justify-center items-center"
        style={{ height: "calc(100vh - 94.94px)" }}
      >
        <div className="flex flex-col items-center">
          <p className="text-7xl font-bold text-mainColor ">404</p>
          <p className="opacity-50 text-2xl my-2">Not Found</p>
          <Link href="/" className="underline">
            go to Home Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
