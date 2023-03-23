import { useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";

export const navMenu = [
  { title: "Swap", route: "/swap", icon: <BsFillSunFill /> },
  { title: "Tokens", route: "tokens", icon: <BsFillSunFill /> },
  { title: "NFTs", route: "nft", icon: <BsFillSunFill /> },
];

function Navbar(props) {
  return (
    <nav className="fixed top-0 left-0 flex justify-between items-center w-full h-[72px] border-b-[1px] border-gray-200/10 px-4 py-4">
      {/* Logo tipo & Menu */}
      <div className="flex items-center h-full">
        {/* Logo */}
        <div className="h-full min-w-[152px] pr-8">
          <img
            className="h-full w-auto object-contain"
            src={
              props.darkMode
                ? "/brand/small/imagotipo_color.png"
                : "/brand/small/imagotipo_color_dark.png"
            }
            alt=""
          />
        </div>

        {/* Nav Menu */}
        <ul className="hidden  sm:flex items-center h-full">
          {navMenu.map((element, index) => (
            <li
              key={uuid()}
              className={`flex justify-center items-center hover:bg-gray-400/30 h-full px-[12px] cursor-pointer rounded-lg`}
            >
              {element.title}
            </li>
          ))}
        </ul>
      </div>

      {/* search bar */}
      <div className="hidden lg:flex items-center justify-center">
        <input
          type="text"
          className="w-[360px] h-[46px] px-4 mx-2 py-3 rounded-lg bg-gray-200/5 border-[1px] border-gray-400/20 outline-none"
          placeholder="Search tokens and NFT collections"
        />
      </div>

      {/*  dark mode Button */}
      <div className="flex items-center justify-end h-full gap-4">
        <button
          onClick={props.toggleDarkMode}
          className="flex justify-center items-center w-[32px] h-[32px] border rounded-[4px] dark:hover:bg-white/20 hover:bg-black/10"
        >
          {props.darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>

        <button className="bg-[#4c82fb]/20 text-[#4c82fb] hover:bg-[#4c82fb]/30 font-bold h-full px-4 rounded-full">
          Connect
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
