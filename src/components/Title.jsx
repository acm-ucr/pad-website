import React from "react";

const Title = ({ title }) => {
  return (
    <div className=" h-48 w-full">
      <div className="relative top-24">
        <div className="text-pad-textshadow font-bold font-playfair text-7xl relative left-8">
          {title}
        </div>
        <div className="text-black font-bold font-playfair text-3xl relative left-20 bottom-7">
          <span className="underline underline-offset-8 decoration-pad-darkpurple">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Title;
