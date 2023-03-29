import { createBrowserRouter } from "react-router-dom";
/* Pages */
import App from "../App";
// import CryptoHome from "../Pages/CryptoHome";
// import Tokens from "../pages/Tokens";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Tokens from "../Pages/Tokens";
import CryptoDetail from "../Pages/CryptoDetail";
import TokensDetail from "../components/TokensDetail";


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
          element: <TokensDetail/>
        }]
      },
      {
        path: "nft",
        element: <Home />,
      },
    ],
  },
]);
