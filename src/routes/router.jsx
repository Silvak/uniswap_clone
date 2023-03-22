import { createBrowserRouter } from "react-router-dom";
/* Pages */
import App from "../App";
import Home from "../pages/Home";
import Tokens from "../pages/Tokens";
import ErrorPage from "../pages/ErrorPage";

/* Set routes in router */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "swap",
        element: <Tokens />,
      },
      {
        path: "tokens",
        element: <Tokens />,
      },
      {
        path: "nft",
        element: <Tokens />,
      },
    ],
  },
]);
