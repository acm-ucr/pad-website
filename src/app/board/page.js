import ExecBoards from "@/components/board/ExecBoards";
import board from "../../../public/headers/board.webp";
import Header from "@/components/Header";
import Title from "@/components/Title";
import ExecCommittees from "@/components/board/ExecCommittees";
const BoardPage = () => {
  return (
    <>
      <Header title="Board" src={board} />
      <div className="w-10/12 flex flex-col items-center my-12">
        <Title title="Executive Board" />
      </div>
      <ExecBoards />
      <div className="w-10/12 flex flex-col items-center my-12">
        <Title title="Executive Committee" />
      </div>
      <ExecCommittees />
    </>
  );
};

export default BoardPage;
