import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="flex w-screen h-screen justify-center items-center">
        <div className="flex flex-col items-center">
          <p className="text-9xl font-bold text-mainColor ">404</p>
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
