interface AuthModelProps {
  isopen: boolean;
}

export default function AuthModel({ isopen }: AuthModelProps) {
  return (
    <>
      {isopen && (
        <div className="absolute top-[55px]  py-3 rounded-2xl w-[160px] bg-white border-2 right-0">
          <ul className="flex flex-col gap-2">
            <li className="text-sm hover:bg-hoverColor w-full px-3 py-1 duration-500">
              Sign Up
            </li>
            <li className="text-sm hover:bg-hoverColor w-full px-3 py-1 duration-500">
              Login
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
