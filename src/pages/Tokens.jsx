import { useEffect, useState } from "react";
import TokensTable from "../components/TokensTable";
import Loading from "../components/Loading";
import axios from "axios";
import { request } from "graphql-request";

const Tokens = () => {
  const [data, setData] = useState(null);
  const [customTokens, setCustomTokens] = useState(null);

  const getData = async () => {
    const res = await axios.get(`https://api.coincap.io/v2/assets`);
    setData(res.data.data);
  };

  useEffect(() => {
    const fetchCustomTokens = async () => {
      const { customtokens } = await request(
        "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clh5i4qxh63xb01um95chewyy/master",
        `
        {
          customtokens {
            createdAt
            current_price
            id
            marketCap
            marketCapChangePercentage24H
            name
            publishedAt
            symbol
            totalVolume
            updatedAt
          }
        }
    `
      );

      setCustomTokens(customtokens);
    };

    fetchCustomTokens();
    getData();
  }, []);
  console.log(data);
  if (!data) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 gap-28 w-full">
      {/* <Markets /> */}
      <article>
        <h1 className="text-4xl md:text-4xl xl:w-[1200px] font-medium dark:text-white pb-8">
          {" "}
          Top tokens on Poligonswap
        </h1>
        {/*<TokensTable data={data} />*/}
      </article>
      <article>
        <h1 className="text-4xl md:text-4xl w-full font-medium dark:text-white pb-8">
          {" "}
          Top tokens on World
        </h1>
        <TokensTable data={data.slice(0, 100)} />
      </article>
    </div>
  );
};

export default Tokens;
