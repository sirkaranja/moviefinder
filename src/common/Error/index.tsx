import { BiErrorCircle } from "react-icons/bi";
import { cn } from "@/utils/helper";

interface ErrorProps {
  className?: string | undefined;
  error: string;
}

const Error = ({ className = "h-screen", error }: ErrorProps) => {
  return (
    <div
      className={cn(
        `relative flex justify-center items-center w-full h-full bg-gradient-to-r from-red-400 to-red-600 p-4`,
        className
      )}
    >
      <div className="bg-white rounded-lg shadow-xl w-4/5 md:w-1/2 p-8 text-center transform transition duration-500 hover:scale-105">
        <div className="flex justify-center mb-4">
          <BiErrorCircle className="text-red-700 text-5xl animate-bounce" />
        </div>
        <p className="text-red-800 font-extrabold text-2xl tracking-wide mb-2">{error}</p>
        <p className="text-gray-500 text-sm italic">Oops! Something went wrong. Please try again later.</p>
      </div>
    </div>
  );
};

export default Error;
