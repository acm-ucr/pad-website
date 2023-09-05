import { PiDiamondsFourBold } from "react-icons/pi";
import Link from "next/link";

const HowToJoin = () => {
  return (
    <div className="w-8/12 font-playfair flex flex-col items-center justify-center">
      <p className="text-pad-purple text-lg md:text-2xl w-full font-bold">
        Open Membership Policy
      </p>

      <div className="flex items-center w-8/12">
        <PiDiamondsFourBold className="text-base md:text-2xl m-2 text-pad-purple" />
        <p className="text-base md:text-2xl text-black font-source m-0">
          Payments
        </p>
      </div>
      <div className=" text-black text-lg">
        <li className="text-sm md:text-lg list-disc my-3">
          $125 one time Nationals Fee(not pay nationals untile further notice)
        </li>
        <Link
          href="https://www.pad.org/"
          target="blank"
          className="w-fit p-2 text-sm md:text-lg my-4 no-underline hover:text-pad-beige text-pad-purple hover:bg-pad-purple bg-pad-beige text-l md:px-4 py-1 border-solid border-1 border-pad-purple duration-300"
        >
          Pay At The Phi Alpha Delta website
        </Link>
        <li className="text-sm md:text-lg my-3">Chapter Fee is QUARTERLY</li>

        <li className="text-sm md:text-lg ml-4 mb-10">
          Pay to our Treasurers Venmo
        </li>
      </div>
    </div>
  );
};

export default HowToJoin;
