import React from "react";
import Image from "next/image";

const Header = ({ src, title }) => {
  return (
    <div className="relative w-full h-[60vh] overflow-clip z-10">
      <Image
        src={src}
        alt="header img"
        className="w-full object-cover h-full"
      />
      <div className="absolute bg-gradient-to-b from-transparent to-[#331B48] h-full w-full absolute-0 top-0 flex items-center justify-center">
        <p className="px-8 py-2 border-solid border-1 border-pad-beige text-5xl text-pad-beige font-bold font-playfair">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Header;
