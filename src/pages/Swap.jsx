import { darkTheme, lightTheme,  SwapWidget } from '@uniswap/widgets'
const MY_TOKEN_LIST = [
  {
    "name": "Koolinart",
    "address": "0x987B1c07ABCE32B27A988b02a7893c1a5781E7B6",
    "symbol": "KNRT",
    "decimals": 18,
    "chainId": 137,
    "logoURI": "https://bafybeiht35ccpfi2iozocnwdzimx4xzakgcxhtpdph4i2rmenlw2lpzpi4.ipfs.nftstorage.link/logouniswap.png"
  },
  ]
function Swap() {
  const theme = {
    borderRadius: 0,
    fontFamily: '"Helvetica"',
  }
  return (
    <div className="Uniswap">
  <SwapWidget  
      tokenList={MY_TOKEN_LIST}
      locale={'en-US'}
      
      hideConnectionUI={true}
      width={360} 
      /> 
       
    </div>
  );
}

export default Swap;
