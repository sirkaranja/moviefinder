import { memo, FC } from "react";
import { m } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

import Image from "@/common/Image";
import { useMotion } from "@/hooks/useMotion";

interface CastsProps {
  casts: {
    id: string;
    profile_path: string;
    name: string;
  }[];
}

const Casts: FC<CastsProps> = ({ casts }) => {
  const isNotMobile = useMediaQuery("(min-width: 768px");
  const { fadeDown, staggerContainer } = useMotion();
  const topCasts = casts.slice(0, 4);

  if (topCasts.length === 0) return null;

  return (
    <>
      <m.h3
        variants={fadeDown}
        className="text-secColor font-bold md:text-[18px] sm:text-[16.75px] xs:text-[15.75px] text-[14.75px]"
      >
        Top Casts
      </m.h3>
      <m.div
        variants={staggerContainer(0.2, 1)}
        initial="hidden"
        animate="show"
        className="flex flex-nowrap gap-4 overflow-x-auto py-4"
      >
        {topCasts.map((cast) => {
          const { id, profile_path: profilePath, name } = cast;
          return (
            <m.figure
              variants={fadeDown}
              key={id}
              className="flex flex-col items-center justify-center gap-2 transition-transform transform hover:scale-105"
            >
              <div className="md:h-[80px] md:w-[80px] h-[60px] w-[60px] rounded-full overflow-hidden shadow-lg bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                <Image
                  width={isNotMobile ? 80 : 60}
                  height={isNotMobile ? 80 : 60}
                  src={`https://image.tmdb.org/t/p/original/${profilePath}`}
                  alt={name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-gray-300 md:text-[14px] sm:text-[12px] text-[11px] font-semibold text-center leading-tight max-w-[80px]">
                {name}
              </h4>
            </m.figure>
          );
        })}
      </m.div>
    </>
  );
};

export default memo(Casts, (prevProps, newProps) => {
  return prevProps.casts[0]?.id === newProps.casts[0]?.id;
});
