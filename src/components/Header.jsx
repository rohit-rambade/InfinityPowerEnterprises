import React, { useState } from "react";
import hamburger from "../assets/menu.svg"
import close from "../assets/close.svg"
const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  const menuList = [
    {
      no: 1,
      name: "Home",
    },
    {
      no: 2,
      name: "Services",
    },
    {
      no: 3,
      name: "Contact",
    },
    {
      no: 4,
      name: "About",
    },
  ];
  return (
    <div className="relative">
    <header className="font-poppins bg-black text-white fixed top-0 z-50 w-full">
    <nav className=" border-gray-200">
        <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              InfinityPowerEnterprises
            </span>
          </a>
         
          <div  onClick={handleToggle} className=" md:hidden">
          <img src={open?close:hamburger} className="w-full"/>
          </div>
      
          <div
            className={`${
              open ? "" : "hidden"
            } flex justify-center  w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="absolute text-center md:static bg-black w-full font-medium flex flex-col p-4 md:p-0 mt-4 border-t border-gray-100   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 z-50 ">
            {menuList.map((navMenu) => (
                <li key={navMenu.no}>
                <a
                href={`#${navMenu.name}`}
                className={`block cursor-pointer py-2 px-3 rounded md:p-0 text-white hover:hov after:aft hover:after:haft font-bold`}
                >
                {navMenu.name}
                </a>
                </li>
                ))}
                </ul>
                </div>
        </div>
      </nav>
    </header>
    </div>
  );
};

export default Header;
