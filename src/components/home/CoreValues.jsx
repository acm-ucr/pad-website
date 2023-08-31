import React from "react";
import { PiDiamondsFourBold } from "react-icons/pi";

const values = [
  "Integrity",
  "Compassion",
  "Courage",
  "Professionalism",
  "Service",
  "Diversity",
  "Innovation",
];

const CoreValues = () => {
  return (
    <div className="animate-fade-right animate-once animate-delay-[600ms] columns-2 w-3/4">
      {values.map((value) => (
        <div
          key={value}
          className="  flex items-center font-playfair text-md md:text-2xl py-1.5"
        >
          <PiDiamondsFourBold className="animate-fade-right animate-once animate-delay-[400ms] text-lg md:text-2xl text-pad-lightpurple mr-3" />
          {value}
        </div>
      ))}
    </div>
  );
};

export default CoreValues;
