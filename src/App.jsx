import { BrowserRouter, Route, Routes } from "react-router-dom"
import CryptoHome from "./Pages/CryptoHome";
import CryptoDetail from './Pages/CryptoDetail';
import { useState } from "react";
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

  return (
    <div
      className={`w-screen h-screen mx-auto 
      ${darkMode ? "dark" : ""}`}
    >
      <BrowserRouter>
            {/* Dinamic Navbar */}
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
    </BrowserRouter>

      {/* Dinamic Conetent */}
      <div className={navigation.state === "loading" ? "loading" : ""}>
        <Layout>
          <Outlet />
        </Layout>
      </div>
    </div>
  );
}

export default App
