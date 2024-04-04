import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/router";
import "./index.css";
import { http, createConfig,WagmiProvider } from 'wagmi'
import { polygon} from 'wagmi/chains'
/* Router */
import { RouterProvider } from "react-router-dom";
 const config = createConfig({
  chains: [polygon,],
  transports: {
    [polygon.id]: http(),
  },
})
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 
const queryClient = new QueryClient() 

ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiProvider config={config}> 
  <QueryClientProvider client={queryClient}> 

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
    </QueryClientProvider> 

    </WagmiProvider> 
);
