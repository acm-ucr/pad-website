import React from "react";
import CoreValueTitle from "./CoreValueTitle";
import CoreValues from "./CoreValues";

const CourValuesSection = () => {
  return (
    <div className="flex items-center justify-center m-5">
      <div className="flex flex-col w-fit items-stretch">
        <CoreValueTitle />
        <CoreValues />
      </div>
    </div>
  );
};

export default CourValuesSection;
