import React from "react";
import Image from "next/image";

const Header = ({ src, title }) => {
  return (
    <div className=" relative w-full  overflow-hidden  justify-between">
      <Image src={src} alt="header img" />
      <div className="absolute -left-16  bottom-60 ml-[55%] text-4xl text-pad-beige font-bold -translate-y-1/4 ">
        <p className="flex  px-4 py-2 -translate-y-full border-solid border-1 border-beige-50 ">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Header;
