import Board from "@/components/Board";
import React from "react";
import board from "../../../public/board.png";
import Header from "@/components/Header";
import Board from "@/components/Board";
import Picture from "@/components/Picture";

const page = () => {
  return (
    <div>
      <Header title="Board" src={board} />
      <div className="flex justify-center">
        <Picture />
      </div>
      <Board />
    </div>
  );
};

export default page;
