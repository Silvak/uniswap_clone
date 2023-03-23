import useAxios from "../hooks/useAxios"
import Coin from "./Coin"


const Markets = () => {

  const { response, loading } = useAxios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

  return (
     <div>
      <div className="text-2x1 ml-20 mb-8 text-3xl font-sans">Top tokens on Poligonswap</div>
      <div className="border-b border-t ml-20 mr-20 mx-auto border-r border-l border-gray-300 rounded-t-md text-gray-600 text-sm h-12 flex items-center justify-center"></div>
      <section className="flex flex-col ml-20 mr-20 mb-20  bg-white shadow-lg rounded-b-md border border-gray-300 p-4" >  
       {response && response.map(coin => <Coin key={coin.id} coin={coin}/>)}
    </section>
    </div>
  )
}

export default Markets