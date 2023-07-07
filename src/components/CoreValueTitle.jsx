import React from "react";

const CoreValueTitle = () => {
  return (
    <div className="flex relative top-64 h-52">
      <div className="flex flex-col h-24 w-80">
        <div className="outline outline-pad-lightpuple absolute left-40 h-40 w-96">
          <div className="bg-pad-purple absolute left-2 top-2 h-44 w-96">
            <div className="flex flex-row-reverse h-32 w-full relative">
              <div className="bg-pad-lightpuple h-6 w-1.5 right-2 absolute"></div>
              <div className="bg-pad-lightpuple h-10 w-1.5 right-6 absolute"></div>
              <div className="bg-pad-lightpuple h-14 w-1.5 right-10 absolute"></div>
              <div className="bg-pad-lightpuple h-8 w-1.5 right-14 absolute"></div>
            </div>
            <p className="text-xl text-pad-beige font-playfair font-bold left-6 top-16 absolute pr-2">
              Core Values
            </p>
            <p className="whitespace-normal text-sm text-pad-beige font-playfair left-6 top-28 absolute pr-2">
              Bound together by tradition and our common interest in the law, we
              share these core values
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValueTitle;
