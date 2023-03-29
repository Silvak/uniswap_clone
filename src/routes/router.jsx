import { createBrowserRouter } from "react-router-dom";
/* Pages */
import App from "../App";
// import CryptoHome from "../Pages/CryptoHome";
// import Tokens from "../pages/Tokens";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Tokens from "../Pages/Tokens";
import Details from "../components/Details"


/* Set routes in router */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "swap",
        element: <Home />,
      },
      {
        path: "tokens",
        element: <Tokens />,
        children: [{
          path:":id",
          element: <Details/>
        }]
      },
      {
        path: "nft",
        element: <Home />,
      },
    ],
  },
]);
