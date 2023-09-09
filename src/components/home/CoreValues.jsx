import { PiDiamondsFourBold } from "react-icons/pi";
import useView from "../useView";
import { coreValues } from "@/data/courvalueCards";

const CoreValues = () => {
  const [inView, ref] = useView();
  return (
    <div className="w-full justify-center md:justify-end flex md:mt-48">
      <div ref={ref} className="columns-2 w-3/4">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className={`${
              inView &&
              `animate-fade-right animate-once animate-delay-[${index}00ms]`
            } flex items-center font-playfair text-md md:text-2xl py-1.5`}
          >
            <PiDiamondsFourBold className="text-lg md:text-2xl text-pad-lightpurple mr-3" />
            {value.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
