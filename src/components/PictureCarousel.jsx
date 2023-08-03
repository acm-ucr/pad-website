import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import React from "react";
import { useState } from "react";

const PictureCarousel = () => {
  const slides = [
    {
      url: "landing.png",
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[85vh]">
      <div>
        <p className="indent-80 font-playfair text-pad-black text-2xl">
          Phi Alpha Delta Retreat 2022
        </p>
        <div className="max-w-[800px] h-[480px] w-full m-auto relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full bg-center bg-cover duration-500"
          ></div>
          {/* Left Arrow */}
          <div className=" absolute top-[50%] -translate-x-36 translate-y-[-50%] left-5  text-pad-purple cursor-pointer">
            <AiOutlineArrowLeft onClick={prevSlide} size={70} />
          </div>
          {/* Right Arrow */}
          <div className="absolute top-[50%] translate-x-36 translate-y-[-50%] right-5  text-pad-purple cursor-pointer">
            <AiOutlineArrowRight onClick={nextSlide} size={70} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={
                  currentIndex === slideIndex
                    ? "text-4xl cursor-pointer text-white"
                    : "text-pad-purple cursor-pointer text-4xl"
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
