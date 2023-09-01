import React from "react";
import Image from "next/image";
import Boxessvg from "../svg/Boxessvg";

const Picture = ({ picture }) => {
  return (
    <div className="relative w-1/2">
      <Boxessvg
        color="#745091"
        className="absolute right-0 top-0 translate-x-full -translate-y-full w-16 h-16"
      />
      <Boxessvg
        color="#745091"
        className="absolute left-0 top-0 -translate-x-full -translate-y-full rotate-90 w-16 h-16"
      />
      <Boxessvg
        color="#745091"
        className="absolute right-0 bottom-0 translate-x-full translate-y-full rotate-90 w-16 h-16"
      />
      <Boxessvg
        color="#745091"
        className="absolute left-0 bottom-0 -translate-x-full translate-y-full w-16 h-16"
      />
      <Image src={picture} className="w-full" alt="picture" />
    </div>
  );
};

export default Picture;