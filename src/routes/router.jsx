import { createBrowserRouter } from "react-router-dom";
/* Pages */
import App from "../App";
// import CryptoHome from "../Pages/CryptoHome";
// import Tokens from "../pages/Tokens";
import Home from "../pages/Home";
import Swap from "../pages/Swap";
import NFT from "../pages/NFT";
import ErrorPage from "../pages/ErrorPage";
import Tokens from "../pages/Tokens";
import Details from "../components/Details";
import TokenDetails from "../pages/TokenDetails";
import Disclaimer from "../pages/Disclaimer";

/* Set routes in router */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "swap",
        element: <Swap />,
      },
      {
        path: "tokens",
        element: <Tokens />,
      },
      {
        path: "tokens/:id",
        element: <TokenDetails />,
      },
      {
        path: "disclaimer",
        element: <Disclaimer />,
      },
    ],
  },
]);
