//import { Outlet } from "react-router";
import Markets from "../components/Markets";

const tokenListTest = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

const TableTitels = ["#", "Token", "Price", "Change", "TVL", "Volume"];
/*
{tokenListTest.map((token, index) => (
          <div key={token} className="h-[64px]">
            {token}
          </div>
        ))}

*/
const TokensTable = (props) => {
  // max-w-[1200px]
  return (
    <div className="max-w-[1200px] border border-gray-300 dark:border-gray-300/20 dark:bg-[#0D111C] rounded-md">
      {/* Titles */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 px-4 py-3 border-b border-gray-300 dark:border-gray-300/20">
        {TableTitels.map((title, index) => (
          <h4 key={index}>{title}</h4>
        ))}
      </div>

      {/* Tokens  */}
      <div className="grid grid-cols-1">
        {tokenListTest.map((token, index) => (
          <div
            key={token}
            className="grid   grid-cols-2 md:grid-cols-5 h-[64px] hover:bg-gray-500/10 cursor-pointer"
          >
            {token}
          </div>
        ))}
      </div>
    </div>
  );
};

const Tokens = () => {
  return (
    <div className="flex justify-center w-full">
      {/* <TokensTable /> */}

      <Markets />
    </div>
  );
};

export default Tokens;
