import React from "react";
import { PiDiamondsFourBold } from "react-icons/pi";

const HowToJoin = () => {
  return (
    <div className="w-10/12 font-playfair">
      <p className="text-pad-purple text-2xl w-full font-bold">
        Open Membership Policy
      </p>

      <div className="flex items-center ml-[20%]">
        <PiDiamondsFourBold className="text-2xl m-2 text-pad-purple" />
        <p className="text-2xl text-black font-source m-0">Payments</p>
      </div>
      <div className="ml-[25%] text-black text-lg">
        <li className="list-disc">
          $125 one time Nationals Fee(not pay nationals untile further notice)
        </li>
        <p className="mt-2 mb-3 text-pad-purple text-l px-4 py-1 border-solid border-1 w-fit border-pad-black">
          Pay At The Phi Alpha Delta website
        </p>
        <li className="">Chapter Fee is QUARTERLY</li>

        <li className="ml-4">Pay to our Treasurers Venmo</li>
      </div>
    </div>
  );
};

export default HowToJoin;
