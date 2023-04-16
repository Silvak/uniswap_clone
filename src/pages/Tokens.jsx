import { Outlet } from "react-router-dom";
//import { Outlet } from "react-router";
import Markets from "../components/Markets";
import TokensTable from "../components/TokensTable";

const Tokens = () => {
  return (
    <div className="grid grid-cols-1 gap-28 w-full">
      {/* <Markets /> */}
      <article>
        <h1 className="text-4xl md:text-4xl w-full font-medium dark:text-white pb-8">
          {" "}
          Top tokens on Polygonswap
        </h1>
        <TokensTable />
      </article>

      <article>
        <h1 className="text-4xl md:text-4xl w-full font-medium dark:text-white pb-8">
          {" "}
          Top tokens on World
        </h1>
        <TokensTable />
      </article>
    </div>
  );
};

export default Tokens;
