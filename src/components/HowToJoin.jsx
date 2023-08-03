import React from "react";
import { PiDiamondsFourBold } from "react-icons/pi";

const HowToJoin = () => {
  return (
    <div className="relative w-full flex text-align-bottom justify-between items-center h-[580px] top-20 translate-y-[350px] ">
      <div className="relative translate-x-1/6 ">
        <p className="text-pad-purple text-center text-2xl relative top-2">
          Open Membership Policy
        </p>

        <div className="relative items-center translate-x-2/4">
          <PiDiamondsFourBold className="relative right-5 top-5" />
          <p className=" text-black font-source text-l">Payments</p>
        </div>
        <div className="relative  translate-x-2/4 left-2">
          <li className=" text-black font-source text-l list-disc">
            $125 one time Nationals Fee(not pay nationals untile further notice)
          </li>
          <div className="relative left-4 top-4 ">
            <p className="text-pad-purple text-l px-4 py-1 border-solid border-1 w-80 border-pad-black underline">
              Pay At The Phi Alpha Delta website
            </p>
            <li className="relative left-4">Chapter Fee is QUARTERLY</li>

            <li className="relative left-10">Pay to our Treasurers Venmo</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToJoin;
