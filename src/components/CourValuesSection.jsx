import React from "react";
import CoreValueTitle from "./CoreValueTitle";
import CoreValues from "./CoreValues";
import Image from "next/image";
import PAD2 from "../../public/PAD2.png";

const CourValuesSection = () => {
  return (
    <div className="flex items-center justify-center m-5">
      <div className="flex flex-col w-fit items-stretch">
        <CoreValueTitle />
        <CoreValues />
        <div className="w-[450px] absolute right-3 translate-y-1/4 -translate-x-2/4 ">
          <Image src={PAD2} className="" />
        </div>
      </div>
    </div>
  );
};

export default CourValuesSection;
