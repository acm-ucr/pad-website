import React from "react";

const CoreValueCard = ({ icon, text }) => {
  return (
    <div className="bg-pad-purple flex flex-column items-center w-full h-44 justify-center">
      {icon}

      <div className="h-[3px] w-16 bg-pad-beige my-8 " />
      <p className="text-1xl text-pad-beige font-playfair font-bold  ">
        {text}
      </p>
    </div>
  );
};

export default CoreValueCard;
