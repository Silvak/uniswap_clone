import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavMobile from "./components/NavMobile";
import Layout from "./components/Layout";

//## Main Component ##
function App() {
  //dark mode state & function
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  useEffect(() => {}, []);

  return (
    <div
      className={`relative w-full min-h-screen transition duration-200 ease-in-out
      ${darkMode ? "dark" : ""}`}
    >
      {/* Dinamic Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <NavMobile />

      {/* Dinamic Conetent */}
      <div className={`flex justify-center`}>
        <Layout>
          <Outlet />
        </Layout>
      </div>

      <div className="hidden  sm:flex justify-end  sm:fixed bottom-0 right-3 select-none">
        <p className="relative flex justify-end items-center text-green-500/60 dark:text-green-500/40  text-[12px] ">
          00003974
          <span className="text-3xl text-green-500 ml-1 dark:text-green-400 ">
            •
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
