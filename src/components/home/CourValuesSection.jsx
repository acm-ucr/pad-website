"use client";
import CoreValueTitle from "./CoreValueTitle";
import CoreValues from "./CoreValues";
import Image from "next/image";
import PAD2 from "../../../public/images/PAD2.png";
import useView from "../useView.jsx";

const CourValuesSection = () => {
  const [inView, ref] = useView(100);
  return (
    <div
      ref={ref}
      className="w-full mt-32 flex items-end  flex-col-reverse relative md:flex-row md:justify-end md:items-start"
    >
      <CoreValues inView={inView} />
      <Image src={PAD2} className="z-10 w-4/5 md:w-1/2" alt="picture" />
      <CoreValueTitle inView={inView} />
    </div>
  );
};

export default CourValuesSection;
