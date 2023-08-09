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
    <div className="columns-2 w-1/2">
      {values.map((value) => (
        <div
          key={value}
          className="flex items-center font-playfair text-1xl py-1.5"
        >
          <PiDiamondsFourBold className=" text-2xl text-pad-lightpurple mr-1" />
          {value}
        </div>
      ))}
    </div>
  );
};

export default CoreValues;
