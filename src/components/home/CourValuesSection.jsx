"use client";
import React from "react";
import CoreValueTitle from "./CoreValueTitle";
import CoreValues from "./CoreValues";
import Image from "next/image";
import PAD2 from "../../../public/PAD2.png";
import useView from "../useView.jsx";

const CourValuesSection = () => {
  const [inView, ref] = useView(100);
  return (
    <div ref={ref} className="w-full mt-32">
      <div className="flex items-end  flex-col-reverse relative w-full md:flex-row md:justify-end md:items-start">
        <div className="w-full justify-center md:justify-end flex md:mt-48">
          <CoreValues inView={inView} />
        </div>
        <Image src={PAD2} className="z-10 w-4/5 md:w-1/2" alt="picture" />
        <CoreValueTitle
          className={
            "w-3/4 flex flex-col md:w-1/2 z-50 absolute -top-32 left-6 md:left-16"
          }
        />
      </div>
    </div>
  );
};

export default CourValuesSection;
