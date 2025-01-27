import { memo } from 'react';
import { m } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "@/context/globalContext";
import { mainHeading, maxWidth, paragraph, watchBtn } from "@/styles";
import { IMovie } from "@/types";
import { cn } from "@/utils/helper";
import { useMotion } from "@/hooks/useMotion";
import { FaPlay, FaRegSave, FaFilm } from "react-icons/fa"; // Importing icons from react-icons

const HeroSlide = ({ movie }: { movie: IMovie }) => {
  const { getTrailerId, setIsModalOpen } = useGlobalContext();
  const navigate = useNavigate();
  const { fadeDown, staggerContainer } = useMotion();

  const {
    overview,
    original_title: title,
    poster_path: posterPath,
    id,
  } = movie;

  const showTrailer = () => {
    getTrailerId(id);
    setIsModalOpen(true);
  };

  const handleWatchNow = () => {
    navigate(`/movie/${id}`);
  };

  const handleAddToWishlist = () => {
    // Implement the functionality to add to wishlist
    console.log("Added to wishlist");
  };

  return (
    <div
      className={cn(
        maxWidth,
        `mx-auto flex items-center h-full flex-row lg:gap-32 sm:gap-20`
      )}
    >
      <m.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        animate="show"
        className="text-gray-300 sm:max-w-[80vw] max-w-[90vw] md:max-w-[420px] font-nunito flex flex-col sm:gap-5 xs:gap-3 gap-[10px] sm:mb-8"
      >
        <m.h2 variants={fadeDown} className={cn(mainHeading)}>
          {title}
        </m.h2>
        <m.p variants={fadeDown} className={paragraph}>
          {overview.length > 180 ? `${overview.substring(0, 180)}...` : overview}
        </m.p>
        <m.div
          variants={fadeDown}
          className="flex flex-row items-center gap-6 sm:mt-6 xs:mt-5 mt-[18px]"
        >
          <button
            type="button"
            name="watch-now"
            className={cn(
              watchBtn,
              `bg-[#00FF40] text-shadow text-secColor flex items-center justify-center gap-2 min-w-[200px] px-4 py-2`
            )}
            onClick={handleWatchNow}
          >
            <FaPlay /> Play Now
          </button>

          <button
            type="button"
            name="watch-trailer"
            className={cn(
              watchBtn,
              `bg-transparent border-2 border-gray-300 text-gray-300 hover:bg-gray-800 hover:border-gray-400 flex items-center justify-center gap-2 min-w-[200px] px-4 py-2`
            )}
            onClick={showTrailer}
          >
            <FaFilm /> Watch Trailer
          </button>

          <button
            type="button"
            name="add-wishlist"
            className={cn(
              watchBtn,
              `bg-transparent border-2 border-gray-300 text-gray-300 hover:bg-gray-800 hover:border-gray-400 flex items-center justify-center gap-2 min-w-[200px] px-4 py-2`
            )}
            onClick={handleAddToWishlist}
          >
            <FaRegSave /> Add to Wishlist
          </button>
        </m.div>
      </m.div>
    </div>
  );
};

export default memo(HeroSlide);
