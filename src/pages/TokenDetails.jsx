"use client"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import DetailsChart from "../components/DetailsChart";
import SwapCard from "../components/SwapCard";
import axios from "axios";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { currencyBillion } from "../utils";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { request } from "graphql-request";

const MY_TOKEN_LIST = [
  {
  "name": "MyToken",
  "address": "0x0BEb47f0dDEB603E85DC8882d9bCFCfd327a6469",
  "symbol": "MKT",
  "decimals": 18,
  "chainId": 8453,
  "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
},

{
  "name": "Wrapped Ether",
  "address": "0x4200000000000000000000000000000000000006",
  "symbol": "WETH",
  "decimals": 18,
  "chainId": 8453,
  "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
}
]

const JSON_RPC_URL = 'https://base-mainnet.infura.io/v3/cb5245cf7c294c0b877ec1a2f5b95de9';
const TOKEN_LIST = 'https://ipfs.io/ipns/tokens.uniswap.org';
const UNI = '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270';
import { SwapWidget } from '@uniswap/widgets';
if (typeof window !== "undefined") {
  // @ts-ignore
    window.Browser = {
      T: () => {
      }
    };
  }
  
const TokenInfo = (props) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-gray-500 dark:text-gray-400">
        {props.title || "Test"}
      </h3>
      <p className="text-2xl">{props.info || "$54.1B"}</p>
    </div>
  );
};

// main component
function TokenDetails(props) {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const hardcodedTokenData = {
    image: { url: "https://example.com/krt-token-image.png" },
    name: "Koolinart Token",
    symbol: "KNRT",
    graphClone: "Koolinart Token",
    priceUsd: "1.00",
    changePercent24Hr: "0.005",
    supply: "10000",
    volumeUsd24Hr: "700",
    vwap24Hr: "0.995",
    marketCapUsd: "10000",
  };

  //get data from api
  const getData = async (tokenId) => {
    try {
      const res = await axios.get(
        `https://api.coincap.io/v2/assets/${tokenId}`
      );
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id === "Koolinart Token") {
      setData(hardcodedTokenData);
    } else {
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
        setData(customtokens[0]);
      };
      fetchCustomTokens();

      if (id !== "Koolinart Token") {
        //        ^^^^ change this to your token name
        getData(id);
      }
    }
  }, [id]);

  if (!data) {
    return <Loading />;
  }
  return (
    <article className="grid  grid-cols-1 lg:grid-cols-3 lg:px-4 pb-20">
      {/* Chart */}

      <div className="flex flex-col col-span-2">
        <a
          href="/"
          className="flex items-center gap-2 text-gray-500 mb-4 text-sm hover:text-gray-600 duration-100 ease-in-out"
        >
          <span>
            <AiOutlineArrowLeft />
          </span>
          Tokens
        </a>
        <div className="flex flex-wrap gap-2 items-center justify-start">
          {/* title image */}
          <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
            <img
              src={
                data?.image?.url != null
                  ? data.image.url
                  : `https://assets.coincap.io/assets/icons/${data.symbol.toLowerCase()}@2x.png`
              }
              alt=""
            />
          </div>

          <h1 className=" flex items-center gap-2 text-2xl dark:text-gray-200">
            <span>{data.name}</span>{" "}
            <span className="text-gray-500">{data.symbol}</span>
          </h1>

          <p className="text-4xl w-full">
            $
            {parseFloat(data.priceUsd) > 0.01
              ? parseFloat(data.priceUsd).toFixed(2)
              : parseFloat(data.priceUsd).toFixed(6)}
          </p>

          {/* Change Filed */}
          <div className="flex justify-start items-center w-[128px] mb-2">
            <p
              className={`font-medium flex items-center ${
                parseFloat(data.changePercent24Hr) > 0
                  ? "text-green-500 dark:text-green-400/90"
                  : "text-red-500 dark:text-red-400/90"
              }`}
            >
              <span className="mr-1">
                {parseFloat(data.changePercent24Hr) > 0 ? (
                  <FiArrowUpRight />
                ) : (
                  <FiArrowDownRight />
                )}
              </span>
              {parseFloat(data.changePercent24Hr).toFixed(2)}
            </p>
          </div>
        </div>

        <DetailsChart
          tokenId={data.graphClone != null ? data.graphClone : data.id}
        />
 
        {/* Stats */}
        <h2 className="text-2xl mt-10 mb-6">Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-500/60 pb-10">
          <TokenInfo title={"TLV"} info={currencyBillion(data.marketCapUsd)} />
          <TokenInfo title={"Supply"} info={currencyBillion(data.supply)} />
          <TokenInfo
            title={"24h volume"}
            info={currencyBillion(data.volumeUsd24Hr)}
          />
          <TokenInfo title={"24H vwap"} info={currencyBillion(data.vwap24Hr)} />
        </div>

        {/* About */}
        <div className="hidden">
          <h2 className="text-2xl mt-10 mb-6">About</h2>
          <p>
            Ethereum is a smart contract platform that enables developers to
            build tokens and decentralized applications (dapps). ETH is the
            native currency for the Ethereum platform and also works as the
            transaction fees to miners on the Ethereum network. Ethereum is the
            pioneer for blockchain based smart contracts. Smart contract is
            essentially a computer code that runs exactly as programmed without
            any...
          </p>
        </div>
      </div>

      {/* Swap card */}
      <div className="  justify-center">
      <SwapWidget
        jsonRpcUrlMap={{
          8453: [JSON_RPC_URL] // Añadido soporte para la red base
        }}
        tokenList={MY_TOKEN_LIST}
        defaultInputTokenAddress="NATIVE"
        defaultInputAmount="1"
        defaultOutputTokenAddress={UNI}
      />
      </div>
    </article>
  );
}

export default TokenDetails;
