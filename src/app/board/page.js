import React from "react";
import board from "../../../public/board.png";
import Header from "@/components/Header";
import Board from "@/components/Board";
const page = () => {
  return (
    <div>
      <Header title="Board" src={board} />

      <Board />
    </div>
  );
};

export default page;
