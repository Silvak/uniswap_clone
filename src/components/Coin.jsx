import { currencyFormat, percentageFormat, currencyBillion } from "../utils";
import { TrendingDown, TrendingUp } from "../icons/icons";
import { Link } from "react-router-dom";

const Coin = ({ coin, index }) => {
  return (
    <Link to={`/tokens/${coin.id}`}>
      <div className="grid grid-flow-col items-center h-[64px] hover:bg-gray-600/20  duration-200 ease-in-out">
        {/* Token name Field */}
        <div className="grid grid-cols-4 gap-1 w-[200px]">
          <p className="">{index}</p>
          <div className="h-[24px] w-[24px]">
            <img
              className="w-full object-contain"
              src={coin.image}
              alt={coin.name}
            />
          </div>
          <p className="whitespace-nowrap w-[90px] overflow-hidden">
            {coin.name}
          </p>
          <p className="text-gray-600">({coin.symbol.toUpperCase()})</p>
        </div>

        {/* Price */}
        <p className="">{currencyFormat(coin.current_price)}</p>

        {/* Change */}
        <p
          className={`flex gap-1 ${
            coin.price_change_percentage_24h < 0
              ? "text-red-400"
              : "text-green-400"
          }`}
        >
          {coin.price_change_percentage_24h < 0 ? (
            <TrendingDown />
          ) : (
            <TrendingUp />
          )}
          {percentageFormat(coin.price_change_percentage_24h)}
        </p>

        {/* Volume */}
        <div className="hidden sm:flex">
          <p>{currencyBillion(coin.total_volume)}</p>
        </div>
      </div>
    </Link>
  );
};

export default Coin;
