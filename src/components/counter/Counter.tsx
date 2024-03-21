import { FaMinus, FaPlus } from "react-icons/fa6";


interface CounterProps {
    title : string,
    description : string,
    value : number,
    setvalue : React.Dispatch<React.SetStateAction<number>>
}

const Counter = ({ title, description, value, setvalue } : CounterProps) => {
  return (
    <div className="flex justify-between items-center border-b">
      <div className="flex flex-col my-3">
        <p className="text-sm font-bold">{title}</p>
        <p className="opacity-60 text-sm font-semibold">
         {description} ?
        </p>
      </div>
      <div className="flex items-center gap-3 opacity-60">
        <button
          disabled={value == 1 ? true : false}
          onClick={(e) => {
            e.preventDefault();
            setvalue((prev) => prev - 1);
          }}
          className="text-xs p-2 border-2 border-black rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaMinus />
        </button>
        <span className="text-sm font-bold ">{value}</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            setvalue((prev) => prev + 1);
          }}
          className="p-2 border-2 text-xs border-black rounded-full "
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};
export default Counter;
