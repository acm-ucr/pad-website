"use client";
import React from "react";
import { FaBlackTie } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaSymfony } from "react-icons/fa";
import { FaInvision } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import CoreValueCard from "./CoreValueCard";

const iconStyle = "text-4xl text-pad-beige";

const coreValues = [
  { icon: <FaBlackTie className={iconStyle} />, text: "Integrity" },
  { icon: <FaHandshake className={iconStyle} />, text: "Compassion" },
  { icon: <FaHandHoldingHeart className={iconStyle} />, text: "Courage" },
  { icon: <FaLightbulb className={iconStyle} />, text: "Professionalism" },
  { icon: <FaHandHoldingUsd className={iconStyle} />, text: "Service" },
  { icon: <FaSymfony className={iconStyle} />, text: "Diversity" },
  { icon: <FaInvision className={iconStyle} />, text: "Innovation" },
];
const CoreValueCards = () => {
  return (
    <Row className="w-10/12 -mt-12">
      {coreValues.map((coreValue, index) => (
        <Col className="p-0 group" key={index}>
          <CoreValueCard icon={coreValue.icon} text={coreValue.text} />
        </Col>
      ))}
    </Row>
  );
};

export default CoreValueCards;
