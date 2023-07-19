import React from "react";

const CoreValueTitle = () => {
  return (
    <div className="flex flex-col h-52 justify-between bg-pad-darkpurple w-2/5 items-start relative">
      <div className="h-full w-full border-4 border-pad-lightpurple absolute -left-5 -top-5 z-0" />
      <div className="flex flex-col h-full justify-between bg-pad-darkpurple w-full items-start relative z-10">
        <div className="flex h-14 w-full justify-end relative">
          <div className="h-6 w-1.5 mr-1.5 bg-pad-lightpurple"></div>
          <div className="h-10 w-1.5 mr-1.5 bg-pad-lightpurple"></div>
          <div className="h-14 w-1.5 mr-1.5 bg-pad-lightpurple"></div>
          <div className="h-8 w-1.5 mr-1.5 bg-pad-lightpurple"></div>
        </div>
        <div className="m-4 relative">
          <p className="text-3xl text-pad-beige font-playfair font-bold pr-2">
            Core Values
          </p>
          <p className="whitespace-normal text-sm text-pad-beige font-playfair w-10/12">
            Bound together by tradition and our common interest in the law, we
            share these core values
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreValueTitle;
