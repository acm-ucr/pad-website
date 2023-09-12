"use client";
import Row from "react-bootstrap/Row";
import CoreValueCard from "./CoreValueCard";
import { coreValues } from "@/data/courvalueCards";

const CoreValueCards = () => {
  return (
    <div className="w-10/12 -mt-16 flex justify-center z-50">
      <Row className="w-full flex items-center justify-center">
        {coreValues.map((coreValue, index) => (
          <CoreValueCard
            key={index}
            index={index}
            icon={coreValue.icon}
            text={coreValue.text}
          />
        ))}
      </Row>
    </div>
  );
};

export default CoreValueCards;
