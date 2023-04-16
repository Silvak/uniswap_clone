import { useEffect, useState } from "react";
import TokensTable from "../components/TokensTable";
import Loading from "../components/Loading";
import axios from "axios";

const Tokens = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`
    );
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return <Loading />;
  }
  return (
    <div className="grid grid-cols-1 gap-28 w-full">
      {/* <Markets /> */}
      <article>
        <h1 className="text-4xl md:text-4xl xl:w-[1200px] font-medium dark:text-white pb-8">
          {" "}
          Top tokens on Polygonswap
        </h1>
        <TokensTable data={data} />
      </article>
      <article>
        <h1 className="text-4xl md:text-4xl w-full font-medium dark:text-white pb-8">
          {" "}
          Top tokens on World
        </h1>
        <TokensTable data={data} />
      </article>
    </div>
  );
};

export default Tokens;
