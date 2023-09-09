"use client";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";
import Image from "next/image";
import { slides } from "@/data/pictures";

const PictureCarousel = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIdx === 0;
    const newIdx = isFirstSlide ? slides.length - 1 : currentIdx - 1;
    setCurrentIdx(newIdx);
  };

  const nextSlide = () => {
    const isLastSlide = currentIdx === slides.length - 1;
    const newIdx = isLastSlide ? 0 : currentIdx + 1;
    setCurrentIdx(newIdx);
  };

  const goToSlide = (slideIdx) => {
    setCurrentIdx(slideIdx);
  };

  return (
    <div className="h-[300px] md:h-[480px] w-full m-auto group flex-col flex items-center justify-cente md:w-2/3r">
      <div className="h-full items-center justify-center flex">
        <AiOutlineArrowLeft
          onClick={prevSlide}
          size={70}
          className="text-pad-purple cursor-pointer text-xl"
        />
        <div className="flex flex-col items-center justify-center">
          <p className="m-0 font-playfair text-pad-black text-base md:text-2xl">
            {slides[currentIdx].description}
          </p>
          <Image
            src={slides[currentIdx].src}
            className="w-10/12 duration-300"
          />
        </div>

        <AiOutlineArrowRight
          onClick={nextSlide}
          size={70}
          className="text-pad-purple cursor-pointer text-xl"
        />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIdx) => (
          <div
            key={slideIdx}
            onClick={() => goToSlide(slideIdx)}
            className={
              currentIdx === slideIdx
                ? "text-4xl cursor-pointer text-white"
                : "text-pad-lightpurple cursor-pointer text-4xl"
            }
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PictureCarousel;
