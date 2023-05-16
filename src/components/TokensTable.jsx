import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { currencyBillion } from "../utils";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import MiniChart from "./MiniChart";

function TokensTable(props) {
  const navigate = useNavigate();
  const { data } = props;

  return (
    <div className="w-full border border-gray-300 dark:border-gray-300/20 dark:bg-[#0D111C] rounded-xl select-none">
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
        {data.map((token, index) => (
          <div
            key={uuid()}
            onClick={() =>
              navigate(
                `/details/${token.id !== undefined ? token.id : token.name}`
              )
            }
            className="flex justify-between items-center h-[64px] hover:bg-gray-500/10 cursor-pointer px-3"
          >
            {/* Token Name Filed */}
            <div className="flex items-center gap-2 w-[240px]">
              <div className="hidden sm:flex justify-center items-center w-[32px] ">
                <p className="pt-1 ">{index + 1}</p>
              </div>
              <div className="w-[24px] h-[24px] rounded-full bg-gray-200 overflow-hidden">
                <img
                  src={
                    token?.image?.url != null
                      ? token.image.url
                      : `https://assets.coincap.io/assets/icons/${token.symbol.toLowerCase()}@2x.png`
                  }
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col sm:items-center sm:flex-row">
                <p className=" font-medium dark:text-white whitespace-nowrap">
                  {token.name.length > 11
                    ? token.name.substring(0, 12) + "..."
                    : token.name}
                </p>
                <p className="text-[0.76em] sm:text-sm sm:font-medium sm:ml-2 dark:text-[#98a1c0]/50">
                  {token.symbol.toUpperCase()}
                </p>
              </div>
            </div>

            {/* Price Filed */}
            <div className="flex flex-col font-medium dark:text-white w-[128px] text-right">
              <p>
                $
                {parseFloat(token.priceUsd) > 0.01
                  ? parseFloat(token.priceUsd).toFixed(2)
                  : parseFloat(token.priceUsd).toFixed(6)}
              </p>
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
            <div className=" hidden sm:flex justify-end items-center w-[128px]">
              <p
                className={`font-medium flex items-center ${
                  parseFloat(token.changePercent24Hr) > 0
                    ? "text-green-500 dark:text-green-400/90"
                    : "text-red-500 dark:text-red-400/90"
                }`}
              >
                <span className="mr-1">
                  {parseFloat(token.changePercent24Hr) > 0 ? (
                    <FiArrowUpRight />
                  ) : (
                    <FiArrowDownRight />
                  )}
                </span>
                {parseFloat(token.changePercent24Hr).toFixed(2)}
              </p>
            </div>

            {/* TLV Filed */}
            <p className="hidden md:block font-medium dark:text-white w-[128px] text-right">
              {currencyBillion(token.marketCapUsd)}
            </p>

            {/* Volume Filed */}
            <p className="hidden lg:block font-medium dark:text-white w-[128px] text-right">
              {currencyBillion(token.supply)}
            </p>

            {/* Chart */}
            <div className="hidden lg:flex md:w-[48px] lg:w-[148px] h-full  md:pl-6 xl:pl-2 py-2">
              <MiniChart
                tokenId={token.graphClone != null ? token.graphClone : token.id}
                change={token.changePercent24Hr}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TokensTable;
/*



*/
