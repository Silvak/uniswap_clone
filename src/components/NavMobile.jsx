import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { v4 as uuid } from "uuid";
import { useLocation, Link } from "react-router-dom";

export const navMenu = [
  { title: "Swap", route: "/swap", icon: <BsFillSunFill /> },
  { title: "Tokens", route: "/tokens", icon: <BsFillSunFill /> },
];

function NavMobile(props) {
  const location = useLocation();
  const currentLocation = location.pathname.split("/")[1];

  return (
    <div
      className={`
      fixed bottom-0 left-0 sm:hidden flex justify-between items-center w-full h-[52px] backdrop-blur-lg bg-white/80 dark:bg-[#0D111C]/90 border-t-[1px] border-gray-800/10 dark:border-gray-200/10  px-4 py-4 z-50 `}
    >
      {/* Logo tipo & Menu */}
      <div className="flex items-center h-full">
        {/* Nav Menu */}
        <ul className="flex sm:hidden items-center h-full">
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
    </div>
  );
}

export default NavMobile;
