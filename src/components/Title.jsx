import React from "react";

const Title = ({ title }) => {
  return (
    <div className=" h-48 w-full">
      <div className="relative top-24">
        <div className="text-pad-textshadow font-bold font-playfair text-5xl md:text-7xl relative left-8">
          {title}
        </div>
        <div className="text-black font-bold font-playfair text-xl md:text-3xl absolute left-20 top-6 md:top-12 underline underline-offset-8 decoration-pad-darkpurple">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Title;
