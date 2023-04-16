import { Link } from "react-router-dom";
import Details from "../components/Details";

function TokenDetails(props) {
  return (
    <div className="grid grid-cols-1 gap-28 w-full">
      <article>
        <Link to="/tokens">tokens</Link>
        <h1 className="text-4xl md:text-4xl xl:w-[1200px] font-medium dark:text-white pb-8">
          {" "}
          Token details
        </h1>
      </article>
      \
      <Details />
    </div>
  );
}

export default TokenDetails;
