import { useEffect, useState } from "react";
import TokensTable from "../components/TokensTable";
import Loading from "../components/Loading";
import axios from "axios";
import { request } from "graphql-request";
import { createPublicClient, http } from 'viem';
import { base } from 'viem/chains';

import KRT_ABI from "../abis/TokenData.json";
const KRT_ADDRESS = "0xB37B6C6acAa86F01Af983761042c88fc65351a94"; // Reemplaza con la dirección de tu contrato

const JSON_RPC_URL =
  "https://base-mainnet.infura.io/v3/5c17da17578a413195e387c9a5cdcfce";
const Tokens = () => {
  const [data, setData] = useState(null);
  const [customTokens, setCustomTokens] = useState(null);
  const [KRtToken, setKRtToken] = useState(null);

  const client = createPublicClient({
    chain: base,
    transport: http(JSON_RPC_URL),
  });

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
  const fetchKRtTokenData = async () => {
    try {
      const data = await client.readContract({
        address: KRT_ADDRESS,
        abi: KRT_ABI,
        functionName: "getTokenData",
        args: ["KNRT"],
      });

      const isValidNumber = (value) => {
        const number = parseFloat(value);
        return !isNaN(number) && isFinite(number);
      };

      setKRtToken({
        image: {url:"https://res.cloudinary.com/dug5cohaj/image/upload/v1721236584/dyuh91sa9yz2u7cgelth.svg"}, // Ajusta la URL según sea necesario
        name: data.name,
        symbol: data.symbol,
        graphClone: data.graphClone,
        priceUsd: isValidNumber(data.priceUsd) ? parseFloat(data.priceUsd) : 0,
        changePercent24Hr: isValidNumber(data.changePercent24Hr) ? parseFloat(data.changePercent24Hr) : 0,
        supply: isValidNumber(data.supply) ? parseFloat(data.supply) : 0,
        volumeUsd24Hr: isValidNumber(data.volumeUsd24Hr) ? parseFloat(data.volumeUsd24Hr) : 0,
        vwap24Hr: isValidNumber(data.vwap24Hr) ? parseFloat(data.vwap24Hr) : 0,
        marketCapUsd: isValidNumber(data.marketCapUsd) ? parseFloat(data.marketCapUsd) : 0,
      });
    } catch (error) {
      console.error("Error fetching KRtToken data from contract", error);
    }
  };

  useEffect(() => {
    fetchCustomTokens();
    getData();
    fetchKRtTokenData();
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

    if (poligonToken) {
      selectedTokens.push(poligonToken);
    }
    if (KRtToken) {
      selectedTokens.push(KRtToken);
    }
    return selectedTokens.reverse().slice(0, 5);
  };

  //loading
  if (!data || !customTokens || !KRtToken) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 gap-28 w-full">
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
