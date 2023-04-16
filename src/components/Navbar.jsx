import { useState, useEffect } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { v4 as uuid } from "uuid";
import { useLocation, Link } from "react-router-dom";

export const navMenu = [
  { title: "Swap", route: "/swap", icon: <BsFillSunFill /> },
  { title: "Tokens", route: "/tokens", icon: <BsFillSunFill /> },
];

function Navbar(props) {
  const location = useLocation();
  const currentLocation = location.pathname.split("/")[1];
  const [onScroll, setOnScroll] = useState(null);

  // Get scroll position
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    //console.log(Math.round(scrollPosition));
    if (scrollPosition > 100) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };

  //Update position
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      onScroll={handleScroll}
      className={`${
        onScroll
          ? "backdrop-blur-xl bg-white/80 dark:bg-[#0D111C]/80 border-b-[1px] order-gray-800/10 dark:border-gray-200/10"
          : "border-b border-gray-900/0"
      }  fixed top-0 left-0 flex justify-between items-center w-full h-[72px] bg-white dark:bg-[#121625]  px-4 py-4 z-50 `}
    >
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
            <li key={uuid()}>
              <Link
                to={element.route}
                className={`flex justify-center items-center hover:bg-gray-400/30 h-[38px] px-[12px] cursor-pointer rounded-xl`}
              >
                {" "}
                <span
                  className={`${
                    currentLocation == element.title.toLowerCase()
                      ? "dark:text-white"
                      : "text-[#6D748D]"
                  }`}
                >
                  {element.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* search bar */}
      <div className="hidden lg:flex items-center justify-center">
        <input
          type="text"
          className="w-[360px] h-[45px] px-4 mx-2 py-3 rounded-lg dark:bg-[#242635] border-[1px] border-gray-400/20 outline-none"
          placeholder="Search tokens and NFT collections "
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
