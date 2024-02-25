import { useEffect } from "react";

interface AuthModelProps {
  menuisopen: boolean;
  setmenuisopen: React.Dispatch<React.SetStateAction<boolean>>;
  registermodelisopen: boolean,
  setregistermodelisopen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthModel({
  menuisopen,
  setmenuisopen,
  setregistermodelisopen
}: AuthModelProps) {


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".auth-model") && menuisopen) {
        setmenuisopen((prev) => false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuisopen, setmenuisopen]);
  return (
    <>
      {menuisopen && (
        <>
          <div className="auth-model absolute top-[55px]  py-3 rounded-2xl w-[160px] bg-white border-2 right-0 z-[11]">
            <ul className="flex flex-col gap-2">
              <li className="text-sm hover:bg-hoverColor w-full px-3 py-1 duration-500" onClick={() => {setregistermodelisopen(true)}}>
                Sign Up
              </li>
              <li className="text-sm hover:bg-hoverColor w-full px-3 py-1 duration-500">
                Login
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
