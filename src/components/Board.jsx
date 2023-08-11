import React from "react";

const Board = () => {
  return (
    <div className="h-full">
      <div className="w-full h-[60vh]">
        <img src="./BoardPlaceholder.png" className="relative top-12 left-20" />
        <div className="relative top-5 left-16">
          <div className="bg-pad-purple w-48 h-8 shadow">
            <p className="text-pad-beige font-bold font-playfair p-1">
              Position Title
            </p>
            <div
              className="w-0 h-0 
                border-l-[0px] border-l-transparent
                border-t-[32.5px] border-t-pad-purple
                border-r-[40px] border-r-transparent
                relative bottom-12 left-48"
            ></div>
          </div>
          <div className="bg-pad-lightpurple w-48 h-8 shadow">
            <p className="text-pad-purple font-bold font-playfair p-1">
              Firstname Lastname
            </p>
            <div
              className="w-0 h-0 
                  border-l-[0px] border-l-transparent
                  border-b-[32.5px] border-b-pad-lightpurple
                  border-r-[40px] border-r-transparent
                  relative bottom-[48.5px] left-48"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
