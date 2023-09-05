import React from "react";

const Title = ({ title }) => {
  return (
    <div className="relative w-full mt-14">
      <div className="absolute text-pad-textshadow text-5xl md:text-7xl font-bold font-playfair -left-8 bottom-3 whitespace-nowrap">
        {title}
      </div>
      <div className="text-black font-bold font-playfair text-xl md:text-3xl relative">
        {title}
        <div className="h-1 w-8 bg-pad-purple" />
      </div>
    </div>
  );
};

export default Title;
