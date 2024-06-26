import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavMobile from "./components/NavMobile";
import Layout from "./components/Layout";
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


const config = getDefaultConfig({
  appName: 'Polygonswap',
  projectId: '298ddb71d1b78a9d266f2ee6633c0d16',
  chains: [ base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

//## Main Component ##
function App() {
  //dark mode state & function
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  useEffect(() => {}, []);
  const queryClient = new QueryClient();

  return (
    <div
      className={`relative w-full min-h-screen transition duration-200 ease-in-out
      ${darkMode ? "dark" : ""}`}
    >

<WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
      {/* Dinamic Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <NavMobile />

      {/* Dinamic Conetent */}
      <div className={`flex justify-center`}>
        <Layout>
          <Outlet />
        </Layout>
      </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
     

    </div>
  );
}

export default App;
