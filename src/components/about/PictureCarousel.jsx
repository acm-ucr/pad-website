"use client";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import React from "react";
import { useState } from "react";

const PictureCarousel = () => {
  const slides = [
    {
      url: "PAD5.png",
    },
    {
      url: "events.png",
    },
    {
      url: "about.png",
    },
    {
      url: "join.png",
    },
  ];
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
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
    <div className="h-[85vh]">
      <div>
        <div className="max-w-[800px] h-[480px] w-full m-auto relative group">
          <p className=" mb-1 font-playfair text-pad-black text-2xl">
            Phi Alpha Delta Retreat 2022
          </p>
          <div
            style={{ backgroundImage: `url(${slides[currentIdx].url})` }}
            className="w-full h-full bg-center bg-cover duration-500"
          ></div>
          {/* Left Arrow */}
          <div className=" absolute top-[50%] -translate-x-52 translate-y-[-50%] left-5  text-pad-purple cursor-pointer">
            <AiOutlineArrowLeft onClick={prevSlide} size={70} />
          </div>
          {/* Right Arrow */}
          <div className="absolute top-[50%] translate-x-52 translate-y-[-50%] right-5  text-pad-purple cursor-pointer">
            <AiOutlineArrowRight onClick={nextSlide} size={70} />
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
      </div>
    </div>
  );
};

export default PictureCarousel;
