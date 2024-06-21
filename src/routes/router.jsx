import { createBrowserRouter } from "react-router-dom";
/* Pages */
import App from "../App";
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
        path: "",
        element: <Tokens />,
      },
      {
        path: "details/:id",
        element: <TokenDetails />,
      },
      {
        path: "disclaimer",
        element: <Disclaimer />,
      },
    ],
  },
]);
