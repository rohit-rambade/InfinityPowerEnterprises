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
    <header className="font-poppins">
      <nav className=" border-gray-200">
        <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
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
            <ul className="absolute text-center md:static w-full font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100  bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
              {menuList.map((navMenu) => (
                <li key={navMenu.no}>
                  <a
                  href={`#${navMenu.name}`}
                    className={`block cursor-pointer py-2 px-3 rounded md:p-0 text-black font-bold`}
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
  );
};

export default Header;
