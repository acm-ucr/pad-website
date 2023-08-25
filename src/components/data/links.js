import { FaInstagram, FaTiktok } from "react-icons/fa";
import { PiLinkBold } from "react-icons/pi";
const iconClassnme = "text-4xl -rotate-45";
export const Socials = [
  {
    path: "https://www.instagram.com/ucrphialphadelta/",
    title: "Instagram",
    image: <FaInstagram className={iconClassnme} />,
  },
  {
    path: "https://www.google.com/",
    title: "Tiktok",
    image: <FaTiktok className={iconClassnme} />,
  },
  {
    path: "https://www.google.com/",
    title: "Links",
    image: <PiLinkBold className={iconClassnme} />,
  },
];
