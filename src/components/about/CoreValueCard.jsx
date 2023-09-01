import React from "react";

const CoreValueCard = ({ icon, text }) => {
  return (
    <div className="aspect-[3/5] group-even:bg-pad-purple group-odd:bg-pad-darkpurple flex flex-col items-center w-full justify-center">
      {icon}
      <div className="h-[3px] w-16 bg-pad-beige my-8 " />
      <p className="text-1xl text-pad-beige font-playfair font-bold  ">
        {text}
      </p>
    </div>
  );
};

export default CoreValueCard;