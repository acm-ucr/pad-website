import React from "react";
import PAD3 from "../../public/PAD3.png";
import Image from "next/image";
import Boxessvg from "./Boxessvg";

const Picture = () => {
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
      <Image src={PAD3} className="w-full" />
    </div>
  );
};

export default Picture;
