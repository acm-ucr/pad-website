"use client";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CoreValueCard from "./CoreValueCard";
import { coreValues } from "../data/courvalueCards";

const CoreValueCards = () => {
  return (
    <div className="w-10/12 -mt-16 flex justify-center z-50">
      <Row className="w-full flex items-center justify-center">
        {coreValues.map((coreValue, index) => (
          <Col className="p-0 group border-0" key={index} xs={3} md>
            <CoreValueCard icon={coreValue.icon} text={coreValue.text} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CoreValueCards;
