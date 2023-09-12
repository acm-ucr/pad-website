"use client";
import Row from "react-bootstrap/Row";
import { boardMembers } from "@/data/boards";
import Board from "./Board";

const Boards = () => {
  return (
    <Row className="my-6 p-0 flex justify-center w-9/12 animate-fade-up animate-delay-[300ms] animate-once">
      {boardMembers.map((member, idx) => (
        <Board member={member} key={idx} index={idx} />
      ))}
    </Row>
  );
};

export default Boards;
