import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import Image from "../Image";
import { IMovie } from "@/types";
import { useMediaQuery } from "usehooks-ts";

const MovieCard = ({
  movie,
  category,
}: {
  movie: IMovie;
  category: string;
}) => {
  const { poster_path, original_title: title, name, id, vote_average } = movie;
  const isMobile = useMediaQuery("(max-width: 380px)");

  return (
    <div className="group relative rounded-lg overflow-hidden shadow-lg dark:bg-[#2d2d2d] bg-white w-[140px] sm:w-[200px] h-[300px] hover:scale-105 transform transition-all duration-300 ease-in-out mb-6 mx-4">
      {/* Movie Poster */}
      <Link
        to={`/${category}/${id}`}
        className="block w-full h-full relative"
      >
        <Image
          height={!isMobile ? 300 : 200}
          width={140}
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={movie.original_title}
          className="object-cover w-full h-full group-hover:opacity-80 transition-all duration-300"
          effect="zoomIn"
        />

        {/* Play Button for coursel */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex justify-center items-center">
          <div className="text-red-600 text-4xl">
            <FaYoutube />
          </div>
        </div>
      </Link>

      {/* Movie Title */}
      <h4 className="text-center text-gray-800 dark:text-gray-300 text-sm sm:text-lg font-semibold mt-4 px-2 truncate">
        {(title?.length > 50 ? title.split(":")[0] : title) || name}
      </h4>

      {/* Rating for movie or series */}
      <div className="flex justify-center items-center mt-2 space-x-2">
        <span className="text-yellow-400 text-sm font-semibold">
          {vote_average ? `${vote_average.toFixed(1)}/10` : "No Rating"}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
