import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  //console.error(error);

  return (
    <div
      className="grid place-content-center w-full h-screen bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1610337673044-720471f83677?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80')]"
      id="error-page"
    >
      <div className="bg-white/70 px-12 py-10 rounded-xl shadow-lg backdrop-blur-lg m-4 select-none">
        {/* Logo */}
        <div className="h-auto max-w-[180px] mb-6">
          <img
            className=" h-full w-auto object-contain"
            src="/brand/small/imagotipo_color_dark.png"
            alt=""
          />
        </div>

        <h1 className="text-3xl font-bold mb-1">Oops!</h1>
        <p className="text-xl">Sorry, an unexpected error has occurred.</p>
        <p className="text-sm text-red-600/70 mb-4">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/tokens" className="text-md underline text-blue-500">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
