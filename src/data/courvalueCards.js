import { FaBlackTie } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaSymfony } from "react-icons/fa";
import { FaInvision } from "react-icons/fa";
const iconStyle = "text-2xl md:text-4xl text-pad-beige";

export const coreValues = [
  { icon: <FaBlackTie className={iconStyle} />, text: "Integrity" },
  { icon: <FaHandshake className={iconStyle} />, text: "Compassion" },
  { icon: <FaHandHoldingHeart className={iconStyle} />, text: "Courage" },
  { icon: <FaLightbulb className={iconStyle} />, text: "Professionalism" },
  { icon: <FaHandHoldingUsd className={iconStyle} />, text: "Service" },
  { icon: <FaSymfony className={iconStyle} />, text: "Diversity" },
  { icon: <FaInvision className={iconStyle} />, text: "Innovation" },
];
