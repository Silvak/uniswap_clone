import { currencyFormat, percentageFormat, currencyBillion } from "../utils";
import { TrendingDown, TrendingUp } from "../icons/icons";
import { Link } from "react-router-dom";





const Coin = ({ coin,index }) => {
  return (
    <Link to={`/tokens/${coin.id}`}>
      <div className="grid grid-flow-cols-3 sm:grid-cols-4 font-light p-2   hover:bg-gray-600">
        <div className="flex item-center gap-1 w-full">
          <p className="mr-8">{index}</p>
          <img className="w-6 mr-2" src={coin.image} alt={coin.name} />
          <p>{coin.name}</p>
          <span className="text-transform: uppercase">({coin.symbol})</span>
        </div>
        <span className="w-full text-start ml-20">
          {currencyFormat(coin.current_price)}
        </span>
        <span
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
        </span>
        <div className="hidden sm:block">
           <span>{currencyBillion(coin.total_volume)}</span>
        </div>
      </div>
    </Link>
  );
};

export default Coin;
