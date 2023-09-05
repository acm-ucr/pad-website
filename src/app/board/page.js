import Boards from "@/components/board/Boards";
import board from "../../../public/board.png";
import Header from "@/components/Header";

const BoardPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Header title="Board" src={board} />
      <Boards />
    </div>
  );
};

export default BoardPage;
