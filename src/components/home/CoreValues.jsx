import React from "react";
import { PiDiamondsFourBold } from "react-icons/pi";
import useView from "../useView";

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
  const [inView, ref] = useView();
  return (
    <div ref={ref} className="columns-2 w-3/4">
      {values.map((value, index) => (
        <div
          key={index}
          className={`${
            inView &&
            `animate-fade-right animate-once animate-delay-[${index}00ms]`
          } flex items-center font-playfair text-md md:text-2xl py-1.5`}
        >
          <PiDiamondsFourBold className="text-lg md:text-2xl text-pad-lightpurple mr-3" />
          {value}
        </div>
      ))}
    </div>
  );
};

export default CoreValues;
