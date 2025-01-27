import { useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";

import Overlay from "../Overlay";
import { useGlobalContext } from "@/context/globalContext";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useMotion } from "@/hooks/useMotion";
import { useOnKeyPress } from "@/hooks/useOnKeyPress";

const VideoModal = () => {
  const { videoId, closeModal, isModalOpen } = useGlobalContext();
  const { zoomIn } = useMotion();
  const { ref } = useOnClickOutside({
    action: closeModal,
    enable: isModalOpen,
  });
  useOnKeyPress({
    key: "Escape",
    action: closeModal,
    enable: isModalOpen,
  });

  useEffect(() => {
    const body = document.body;
    const rootNode = document.documentElement;
    if (isModalOpen) {
      const scrollTop = rootNode.scrollTop;
      body.style.top = `-${scrollTop}px`;
      body.classList.add("no-scroll");

      return;
    }

    const top = parseFloat(body.style.top) * -1;
    body.classList.remove("no-scroll");
    if (top) {
      rootNode.style.scrollBehavior = "auto";
      rootNode.scrollTop = top;
      rootNode.style.scrollBehavior = "smooth";
    }
  }, [isModalOpen]);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <Overlay className="flex items-center justify-center bg-black bg-opacity-70">
          <m.div
            variants={zoomIn(0.9, 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            ref={ref}
            className="md:w-[570px] md:h-[370px] sm:w-[80vw] sm:h-[60vh] w-[80vw] xs:h-[35vh] h-[40vh] bg-gradient-to-b from-gray-800 to-gray-900 z-[25] shadow-2xl rounded-lg relative overflow-hidden"
          >
            <button
              type="button"
              className="absolute -right-6 -top-6 text-white text-[32px] bg-black bg-opacity-40 rounded-full p-2 z-50 transition-transform transform hover:scale-110"
              onClick={closeModal}
            >
              <IoMdClose />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1`}
              title="Trailer"
              width="100%"
              height="100%"
              className="rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105"
              allowFullScreen
            />
          </m.div>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
