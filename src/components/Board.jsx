"use client";
import React from "react";
import { Row, Col } from "react-bootstrap";
import BoardPlaceHolder from "../../public/boardPlaceholder.png";
import Image from "next/image";

const Board = () => {
  const boardMembers = [
    {
      position: "Position Title P",
      name: "Firstname Lastname ",
      image: BoardPlaceHolder,
    },
    {
      position: "Position Title VP",
      name: "Firstname Lastname 2",
      image: BoardPlaceHolder,
    },
    {
      position: "Position Title T",
      name: "Firstname Lastname 3",
      image: BoardPlaceHolder,
    },
    {
      position: "Position Title S",
      name: "Firstname Lastname 4",
      image: BoardPlaceHolder,
    },
    {
      position: "Position Title SM",
      name: "Firstname Lastname 5",
      image: BoardPlaceHolder,
    },
    {
      position: "Position Title A",
      name: "Firstname Lastname 6",
      image: BoardPlaceHolder,
    },
  ];

  return (
    <Row className=" my-6 p-0 flex justify-start w-10/12">
      {boardMembers.map((member, idx) => (
        <Col
          sm={6}
          md={3}
          key={idx}
          className="p-4 flex items-center justify-center "
        >
          <div className="relative">
            <Image src={member.image} alt={`Board Member ${idx + 1}`} />
            <div className="absolute -bottom-2 -left-2">
              <div className="bg-pad-purple w-full h-8 shadow">
                <p className="text-pad-beige font-bold font-playfair p-1">
                  {member.position}
                </p>
                <div
                  className="w-0 h-0 =
                border-l-[0px] border-l-transparent
                border-t-[32.5px] border-t-pad-purple
                border-r-[40px] border-r-transparent
                relative bottom-12 left-48"
                ></div>
              </div>
              <div className="bg-pad-lightpurple w-48 h-8 shadow">
                <p className="text-pad-purple font-bold font-playfair p-1">
                  {member.name}
                </p>
                <div
                  className="w-0 h-0 
                border-l-[0px] border-l-transparent
                border-b-[32.5px] border-b-pad-lightpurple
                border-r-[40px] border-r-transparent
                relative bottom-[48.5px] left-48"
                ></div>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Board;
