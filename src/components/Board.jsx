import React from "react";

const Board = () => {
  const boardMembers = [
    {
      position: "Position Title P",
      name: "Firstname Lastname ",
      image: "./BoardPlaceholder.png",
    },
    {
      position: "Position Title VP",
      name: "Firstname Lastname 2",
      image: "./BoardPlaceholder.png",
    },
    {
      position: "Position Title T",
      name: "Firstname Lastname 3",
      image: "./BoardPlaceholder.png",
    },
    {
      position: "Position Title S",
      name: "Firstname Lastname 4",
      image: "./BoardPlaceholder.png",
    },
    {
      position: "Position Title SM",
      name: "Firstname Lastname 5",
      image: "./BoardPlaceholder.png",
    },
    {
      position: "Position Title A",
      name: "Firstname Lastname 6",
      image: "./BoardPlaceholder.png",
    },
  ];

  return (
    <div className="container">
      <div className="h-full w-full mt-6 mb-6">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {boardMembers.map((member, idx) => (
            <div className="w-full h-96" key={idx}>
              <img
                src={member.image}
                className="relative top-6 left-16"
                alt={`Board Member ${idx + 1}`}
              />
              <div className="relative -top-1 left-16">
                <div className="bg-pad-purple w-48 h-8 shadow">
                  <p className="text-pad-beige font-bold font-playfair p-1">
                    {member.position}
                  </p>
                  <div
                    className="w-0 h-0 
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
