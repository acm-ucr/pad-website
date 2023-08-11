import React from "react";

const Title = ({ title }) => {
  return (
    <div className="md:flex-row h-48 w-full md:items-end md:justify-end">
      <div className="relative top-24">
        <div className="text-pad-textshadow md:text-m md:items-end font-bold font-playfair text-7xl relative left-8">
          {title}
        </div>
        <div className="text-black font-bold font-playfair md:text-m text-3xl relative left-20 bottom-7">
          <span className="underline underline-offset-8 decoration-pad-darkpurple">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Title;
