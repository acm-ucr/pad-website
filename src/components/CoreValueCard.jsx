import React from "react";
import { FaBlackTie } from "react-icons/fa";

const CoreValueCard = ({ icon, text }) => {
  return (
    <div className="bg-pad-purple flex flex-col items-center w-[15%] h-64 justify-center">
      <FaBlackTie className="text-4xl text-pad-beige" />
      <div className="h-[2px] w-8 bg-pad-beige my-8" />
      <p className="text-4xl text-pad-beige font-playfair font-bold">
        Integrity
      </p>
    </div>
  );
};

export default CoreValueCard;
