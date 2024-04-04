import { useEffect, useState } from "react";
import TokensTable from "../components/TokensTable";
import Loading from "../components/Loading";
import axios from "axios";
import { request } from "graphql-request";

const Tokens = () => {
  const [data, setData] = useState(null);
  const [customTokens, setCustomTokens] = useState(null);

  //get data from api
  const getData = async () => {
    const res = await axios.get(`https://api.coincap.io/v2/assets`);
    setData(res.data.data);
  };

  // get data from graphql api
  const fetchCustomTokens = async () => {
    const { customtokens } = await request(
      "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clh5i4qxh63xb01um95chewyy/master",
      `
      {
        customtokens {
            image {
              url
            }
            name
            symbol
            graphClone
            priceUsd
            changePercent24Hr
            supply
            volumeUsd24Hr
            vwap24Hr
            marketCapUsd
          }
      }
  `
    );
    setCustomTokens(customtokens);
  };

  useEffect(() => {
    fetchCustomTokens();
    getData();
  }, []);

  //filter data for poligon table
  const poligonDataTable = (tokensId, poligonToken) => {
    let arr = data.slice(0, 20);
    let selectedTokens = arr.filter((tokens) => {
      return (
        tokensId.includes(parseInt(tokens.rank)) &&
        parseFloat(tokens.changePercent24Hr) > 0
      );
    });

    selectedTokens.push(poligonToken);
    return selectedTokens.reverse().slice(0, 5);
  };

  //loading
  if (!data || !customTokens) {
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
        <TokensTable
          data={poligonDataTable(
            [
              4, 13, 6, 9, 12, 14, 19, 12, 7, 8, 20, 21, 17, 29, 31, 37, 26, 33,
              57, 60, 50,
            ],
            customTokens[0]
          )}
        />
      </article>
      <article>
        <h1 className="text-4xl md:text-4xl w-full font-medium dark:text-white pb-8">
          {" "}
          Top tokens on World
        </h1>
        <TokensTable data={data.slice(0, 60)} />
      </article>
    </div>
  );
};

export default Tokens;
