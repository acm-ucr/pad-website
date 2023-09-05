"use client";
import Row from "react-bootstrap/Row";
import { boardMembers } from "../data/boards";
import Board from "./Board";

const Boards = () => {
  return (
    <div className="flex justify-center">
      <Row className="my-6 p-0 flex justify-start w-10/12">
        {boardMembers.map((member, idx) => (
          <Board member={member} key={idx} />
        ))}
      </Row>
    </div>
  );
};

export default Boards;
