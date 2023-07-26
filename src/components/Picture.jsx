import React from "react";
import PAD3 from "../../public/PAD3.png";
import Image from "next/image";
import Boxessvg from "./Boxessvg";

const Picture = () => {
  return (
    <div className="relative w-1/2">
      <div className="absolute right-0 top-0 translate-x-full -translate-y-full">
        <Boxessvg color="black" className="stroke-pad-purple" />
      </div>
      <div className="absolute left-0 top-0 -translate-x-full -translate-y-full rotate-90">
        <Boxessvg color="#ff0000" />
      </div>
      <div className="absolute right-0 bottom-0 translate-x-full translate-y-full rotate-90">
        <Boxessvg color="#ff0000" />
      </div>
      <div className="absolute left-0 bottom-0 -translate-x-full translate-y-full">
        <Boxessvg color="#ff0000" />
      </div>
      <Image src={PAD3} className="w-full" />
    </div>
  );
};

export default Picture;
