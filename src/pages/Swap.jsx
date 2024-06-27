
"use client"
import React, { useEffect } from 'react';
import { SwapWidget } from '@uniswap/widgets';

const JSON_RPC_URL = 'https://base-mainnet.infura.io/v3/cb5245cf7c294c0b877ec1a2f5b95de9';
const TOKEN_LIST = 'https://ipfs.io/ipns/tokens.uniswap.org';
const UNI = '0x4200000000000000000000000000000000000006';

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

if (typeof window !== "undefined") {
  // @ts-ignore
    window.Browser = {
      T: () => {
      }
    };
  }
export function UniswapWidget() {

  if (typeof window !== "undefined") {
		// @ts-ignore
		window.Browser = {
			T: () => {
			}
		};
	}
  return (
    <main>
      <SwapWidget
        jsonRpcUrlMap={{
          8453: [JSON_RPC_URL] // Añadido soporte para la red base
        }}
        tokenList={MY_TOKEN_LIST}
        defaultInputTokenAddress="NATIVE"

        defaultOutputTokenAddress={UNI}
      />
    </main>
  );
}

export default UniswapWidget;
