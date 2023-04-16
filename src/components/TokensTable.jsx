import { useNavigate } from "react-router-dom";

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

/*
{tokenListTest.map((token, index) => (
          <div key={token} className="h-[64px]">
            {token}
          </div>
        ))}

*/
function TokensTable(props) {
  const navigate = useNavigate();
  // max-w-[1200px]
  return (
    <div className="w-full border border-gray-300 dark:border-gray-300/20 dark:bg-[#0D111C] rounded-xl">
      {/* Titles */}
      <div className="flex justify-between items-center px-3 h-[48px] border-b border-gray-300 dark:border-gray-300/20">
        <h4 className="flex items-center font-medium dark:text-[#98a1c0] w-[100px] sm:w-[240px] overflow-hidden">
          <div className="hidden sm:flex justify-center items-center w-[32px] ">
            <p className="pt-1 dark:text-[#98a1c0] ">#</p>
          </div>
          <p className="ml-0 sm:ml-2">Token name</p>
        </h4>

        <h4 className="font-medium dark:text-[#98a1c0]  w-[128px] text-right">
          Price
        </h4>

        <h4 className="hidden sm:block font-medium dark:text-[#98a1c0]  w-[128px] text-right">
          Change
        </h4>

        <h4 className="hidden md:block font-medium dark:text-[#98a1c0]  w-[128px] text-right">
          TLV
        </h4>

        <h4 className="hidden lg:block font-medium dark:text-[#98a1c0]  w-[128px] text-right">
          Volume
        </h4>

        <div className="hidden lg:block sm:w-[22px] md:w-[48px] lg:w-[148px]">
          {" "}
        </div>
      </div>

      {/* Tokens  */}
      <div className="grid grid-cols-1 gap-1">
        {tokenListTest.map((token, index) => (
          <div
            key={token}
            onClick={() => navigate(`/tokens/${index}`)}
            className="flex justify-between items-center h-[64px] hover:bg-gray-500/10 cursor-pointer px-3"
          >
            {/* Token Name Filed */}
            <div className="flex items-center gap-2 w-[240px]">
              <div className="hidden sm:flex justify-center items-center w-[32px] ">
                <p className="pt-1 dark:text-[#98a1c0] ">{index}</p>
              </div>
              <div className="w-[24px] h-[24px] rounded-full bg-gray-200 overflow-hidden">
                <img src="" alt="" className="object-cover w-full" />
              </div>
              <div className="flex flex-col sm:items-center sm:flex-row">
                <p className=" font-medium dark:text-white">Token</p>
                <p className="text-[0.76em] sm:text-sm sm:font-medium sm:ml-2 dark:text-[#98a1c0]/50">
                  ICETH
                </p>
              </div>
            </div>

            {/* Price Filed */}
            <div className="flex flex-col font-medium dark:text-white w-[128px] text-right">
              <p>$20,120.00</p>
              <p
                className={`text-sm  sm:hidden ${
                  5 > 2
                    ? "text-green-500 dark:text-green-400/90"
                    : "text-red-500 dark:text-red-400/90"
                }`}
              >
                +0.00%
              </p>
            </div>

            {/* Change Filed */}
            <div className="hidden sm:flex justify-end w-[128px]">
              <p
                className={`font-medium ${
                  5 > 2
                    ? "text-green-500 dark:text-green-400/90"
                    : "text-red-500 dark:text-red-400/90"
                }`}
              >
                +0.00%
              </p>
            </div>

            {/* TLV Filed */}
            <p className="hidden md:block font-medium dark:text-white w-[128px] text-right">
              $328.1M
            </p>

            {/* Volume Filed */}
            <p className="hidden lg:block font-medium dark:text-white w-[128px] text-right">
              $556.3K
            </p>

            {/* Chart */}
            <div className="hidden lg:flex md:w-[48px] lg:w-[148px] h-full bg-gray-200/10">
              {" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TokensTable;
