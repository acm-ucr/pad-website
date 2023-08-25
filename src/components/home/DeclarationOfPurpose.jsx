"use client";
import React from "react";
import Scalesvg from "../svg/Scalesvg";
import PAD1 from "../../../public/PAD1.png";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
const DeclarationOfPurpose = () => {
  return (
    <Row className="items-stretch w-full flex flex-col md:flex-row justify-between my-5 mx-0 p-0">
      <Col xs={12} md={6} className="p-0 m-0">
        <Image
          src={PAD1}
          className="w-full h-full object-cover"
          alt="picture"
        />
      </Col>
      <Col
        xs={12}
        md={6}
        className="relative bg-pad-darkpurple flex flex-col justify-between py-10 overflow-hidden px-0 m-0"
      >
        <Scalesvg
          color="#745091"
          className="absolute top-1/2 -translate-y-1/2 right-0"
        />
        <div className="relative font-playfair py-1 text-center text-md md:text-2xl w-4/5 border-t-2 border-l-2 border-b-2 text-pad-beige border-pad-beige self-end mb-10">
          DECLARATION OF PURPOSE
        </div>
        <div className="relative font-playfair w-3/4 text-pad-beige text-md md:text-lg lg:text-xl justify-self-end self-center">
          The purpose of this Fraternity shall be to form a strong bond uniting
          students and teachers of the lawwith members of the Bench and Bar in a
          fraternal fellowship designed to advance the ideals of liberty and
          equal justice under the law; to stimulate excellence in scholarship;
          to inspire the virtues of compassion and courage; to foster integrity
          and professional competence; to promote the welfare of its members;
          and to encourage their moral, intellectual, and cultural advancement;
          so that each member may enjoy a life time of honorable professional
          and public service.
        </div>
      </Col>
    </Row>
  );
};

export default DeclarationOfPurpose;
