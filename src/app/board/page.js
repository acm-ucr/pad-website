import Boards from "@/components/board/Boards";
import board from "../../../public/headers/board.png";
import Header from "@/components/Header";

const BoardPage = () => {
  return (
    <>
      <Header title="Board" src={board} />
      <Boards />
    </>
  );
};

export default BoardPage;
