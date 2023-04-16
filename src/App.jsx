import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

//## Main Component ##
function App() {
  const navigation = useNavigation();

  //dark mode state & function
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  useEffect(() => {}, []);

  return (
    <div
      className={`w-full min-h-screen duration-200 ease-in-out
      ${darkMode ? "dark" : ""}`}
    >
      {/* Dinamic Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Dinamic Conetent */}
      <div className={`${navigation.state === "loading" ? "loading" : ""}`}>
        <Layout>
          <Outlet />
        </Layout>
      </div>
    </div>
  );
}

export default App;
