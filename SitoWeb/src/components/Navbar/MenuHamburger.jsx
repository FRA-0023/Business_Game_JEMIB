import React from "react";

const MenuHamburger = ({ openMenuMobile }) => {
  const bar_base_style =
    "block absolute h-0.5 w-7 bg-brown transform transition duration-300 ease-in-out";
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center group">
      <span
        className={`
          ${bar_base_style} 
          ${openMenuMobile ? "rotate-45" : "-translate-y-2"}
        `}
      ></span>

      <span
        className={`
          ${bar_base_style} 
          ${openMenuMobile ? "opacity-0" : "opacity-100"}
        `}
      ></span>

      <span
        className={`
          ${bar_base_style} 
          ${openMenuMobile ? "-rotate-45" : "translate-y-2"}
        `}
      ></span>
    </div>
  );
};

export default MenuHamburger;
