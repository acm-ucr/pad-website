import React from "react";
import { FaBlackTie } from "react-icons/fa";

const CoreValueCard = ({ icon, text }) => {
  return (
    <div className="coreValCard">
      <FaBlackTie className={icon} />
      <p className="text"> {text} </p>
    </div>
  );
};

export default CoreValueCard;
