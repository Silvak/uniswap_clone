"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import DetailsChart from "../components/DetailsChart";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { currencyBillion } from "../utils";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { SwapWidget } from "@uniswap/widgets";
import { createPublicClient, createWalletClient, custom, http } from "viem";
import { base } from "viem/chains";
import TokenDataAbi from "../abis/TokenData.json";
import axios from "axios";

const MY_TOKEN_LIST = [
  {
    name: "MyToken",
    address: "0x0BEb47f0dDEB603E85DC8882d9bCFCfd327a6469",
    symbol: "MKT",
    decimals: 18,
    chainId: 8453,
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
  },
  {
    name: "Wrapped Ether",
    address: "0x4200000000000000000000000000000000000006",
    symbol: "WETH",
    decimals: 18,
    chainId: 8453,
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
  },
];

const JSON_RPC_URL =
  "https://base-mainnet.infura.io/v3/5c17da17578a413195e387c9a5cdcfce";
const UNI = "0x4200000000000000000000000000000000000006";
const AUTHORIZED_WALLET = "0x899cA5891a0B45699B511c19fAdB09673718fbEE";
const CONTRACT_ADDRESS = "0xB37B6C6acAa86F01Af983761042c88fc65351a94";

const TokenInfo = ({ title, info }) => (
  <div className="flex flex-col">
    <h3 className="text-gray-500 dark:text-gray-400">{title || "Test"}</h3>
    <p className="text-2xl">{info || "$54.1B"}</p>
  </div>
);

const TokenDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [currentAccount, setCurrentAccount] = useState(null);

  const publicClient = createPublicClient({
    chain: base,
    transport: http(JSON_RPC_URL),
  });

  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          const client = createWalletClient({
            chain: base,
            transport: custom(window.ethereum),
          });
          const [account] = await client.getAddresses();
          setCurrentAccount(account);
        } catch (error) {
          console.error("Error connecting to wallet", error);
        }
      }
    };
    connectWallet();
  }, []);
  
  const getTokenDataFromContract = async (tokenId) => {

    try {
      
      const data = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: TokenDataAbi,
        functionName: "getTokenData",
        args: ["KNRT"],
      });
  
      const isValidNumber = (value) => {
        const number = parseFloat(value);
        return !isNaN(number) && isFinite(number);
      };
  
      setData({
        image: "https://res.cloudinary.com/dug5cohaj/image/upload/v1721236584/dyuh91sa9yz2u7cgelth.svg",
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
      console.error("Error fetching token data from contract", error);
    }
  };
  const setTokenDataInContract = async (tokenData) => {
    try {
      const client = createWalletClient({
        chain: base,
        transport: custom(window.ethereum),
      });
console.log(tokenData)
      const { request } = await publicClient.simulateContract({
        address: CONTRACT_ADDRESS,
        abi: TokenDataAbi,
        functionName: "setTokenData",
        args: [tokenData],
        account: currentAccount,
      });

      await client.writeContract(request);
    } catch (error) {
      console.error("Error setting token data in contract", error);
    }
  };

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
    if (id === "Koolinart") {
      getTokenDataFromContract(id);
    } else {
      getData(id);
    }
  }, [id]);

  if (!data) {
    return <Loading />;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setTokenDataInContract([
      data.image,
      data.name,
      data.symbol,
      data.graphClone,
      data.priceUsd,
      data.changePercent24Hr,
      data.supply,
      data.volumeUsd24Hr,
      data.vwap24Hr,
      data.marketCapUsd,
    ]);
  };

  const renderAuthorizedPanel = () => (
    <div className="flex flex-col p-4 border border-gray-300 rounded-md mt-6">
      <h2 className="text-xl mb-4">Admin Panel</h2>
      <div className="flex flex-col gap-4">
        {Object.keys(data).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="text-white">{key}</label>
            <input
              className="p-2 border text-black border-gray-300 rounded"
              type="text"
              name={key}
              value={data[key]}
              onChange={handleInputChange}
            />
          </div>
        ))}
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
         Get Real Data
        </button>
      </div>
    </div>
  );

  return (
    <article className="grid grid-cols-1 lg:grid-cols-3 lg:px-4 pb-20">
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
          <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
            <img
              src={data?.image ? data.image : "path/to/default/image.png"}
              alt={data.name}
            />
          </div>

          <h1 className="flex items-center gap-2 text-2xl dark:text-gray-200">
            <span>{data.name}</span>{" "}
            <span className="text-gray-500">{data.symbol}</span>
          </h1>

          <p className="text-4xl w-full">
            $
            {parseFloat(data.priceUsd) > 0.01
              ? parseFloat(data.priceUsd).toFixed(2)
              : parseFloat(data.priceUsd).toFixed(6)}
          </p>

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
              {parseFloat(data.changePercent24Hr).toFixed(2)}%
            </p>
          </div>
        </div>

        <DetailsChart
          tokenId={data.graphClone != null ? data.graphClone : data.id}
        />

        <h2 className="text-2xl mt-10 mb-6">Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-500/60 pb-10">
          <TokenInfo title={"Market Cap"} info={currencyBillion(data.marketCapUsd)} />
          <TokenInfo title={"Supply"} info={currencyBillion(data.supply)} />
          <TokenInfo title={"24h Volume"} info={currencyBillion(data.volumeUsd24Hr)} />
          <TokenInfo title={"24h VWAP"} info={currencyBillion(data.vwap24Hr)} />
        </div>

        {currentAccount === AUTHORIZED_WALLET && renderAuthorizedPanel()}

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

      <div className="justify-center">
        <SwapWidget
          jsonRpcUrlMap={{
            8453: [JSON_RPC_URL], // Añadido soporte para la red base
          }}
          tokenList={MY_TOKEN_LIST}
          defaultInputTokenAddress="NATIVE"
          defaultInputAmount="1"
          defaultOutputTokenAddress={UNI}
        />
      </div>
    </article>
  );
};

export default TokenDetails;
