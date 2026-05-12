import React from "react";
import { useNavigate } from "react-router";

const NavbarLink = ({ id, text, href, handleClick, currentId }) => {
  const navigate = useNavigate();

  const link_container_style =
    "group relative flex items-center justify-center cursor-pointer";
  const link_text_style = `text-brown lg:text-lg text-2xl tracking-widest lg:tracking-normal hover:text-darkred duration-300 font-serif lg:font-sans py-1 ${currentId == id ? "lg:text-darkred lg:font-medium" : ""}`;
  const underline_style =
    "absolute bottom-0 left-0 w-full h-[1.5px] bg-darkred scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left";

  const handleNavigation = () => {
    navigate(href);
    handleClick();
  };

  return (
    <li className={link_container_style} onClick={handleNavigation}>
      <span className={link_text_style}>
        {text}
        <span className={underline_style}></span>
      </span>
    </li>
  );
};

export default NavbarLink;
