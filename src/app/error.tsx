"use client";

import Link from "next/link";

interface ErrorPageProps {
    error : Error,
    reset : () => void
}



const ErrorPage = ({error , reset} : ErrorPageProps) => {
  return (
    <>
      <div>Something Went Wrong</div>
      <p >title : {error.message}</p>
      <button onClick={() => reset()}>Try Again</button>
      <Link href="/">Go to Home Page</Link>
    </>
  );
};
export default ErrorPage;
