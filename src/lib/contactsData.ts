import { FaTelegramPlane, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";

export const contacts = [
  {
    IconComponent: FaGithub,
    label: "github icon",
    link: "https://github.com/Valery-Lytvyn",
  },
  {
    IconComponent: FaLinkedinIn,
    label: "linkedin icon",
    link: "https://linkedin.com/in/valery-lytvyn",
  },
  {
    IconComponent: FaTelegramPlane,
    label: "telegram icon",
    link: "https://t.me/valery_lytvyn",
  },
  {
    IconComponent: IoIosPhonePortrait,
    label: "phone icon",
    link: "tel:+380 96 595 17 26",
  },

  {
    IconComponent: CiMail,
    label: "mail icon",
    link: "mailto:lytvynvalery@gmail.com",
  },
];
