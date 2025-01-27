import img from "@/assets/svg/not-found.svg";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-green-500">
      <div className="flex flex-col gap-4 items-center font-robotoCondensed text-center p-4">
        <img
          src={img}
          alt="Page Not Found"
          className="lg:max-h-[370px] xs:max-h-[270px] max-h-[180px] w-full"
        />
        <h3 className="text-2xl lg:text-3xl font-bold text-white">
          Oops! Page Not Found
        </h3>
        <p className="text-lg lg:text-xl text-gray-100">
          We couldn’t find the page you were looking for. 
        </p>
        <a
          href="/"
          className="mt-4 px-6 py-2 bg-white text-green-500 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
