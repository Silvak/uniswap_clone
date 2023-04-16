import useAxios from "../hooks/useAxios";
import Coin from "./Coin";
import { useState } from "react";
import data from "../data";

export const listName = ["#", "Token name", "Price", "Change", "Volume"];

const Markets = () => {
  /* Con este codigo hacemos el filtrado en la searchBar de forma dinamica igual que en Unisw. el código utiliza la biblioteca "axios" y el hook "useAxios" 
  para obtener datos de la API de Coingecko, y utiliza el hook "useState" para 
  almacenar la cadena de búsqueda del usuario. Cuando el usuario ingresa una cadena de búsqueda,
   los datos de respuesta se filtran y se actualiza el estado del componente con los resultados filtrados. */
  // const { response, setResponse, responseFiltered, setResponseFiltered } =
  //   useAxios(
  //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=id&category=coin&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  //   );

  const [search, setSearch] = useState("");
  const [dataFiltered, setDataFiltered] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    filtered(e.target.value);
  };

  // const filtered = () => {
  //   if (search.length > 1) {
  //     var resultsSearch = response.filter((coin) => {
  //       if (
  //         coin.name.toLowerCase().includes(search.toLowerCase()) ||
  //         coin.symbol.toLowerCase().includes(search.toLowerCase())
  //       ) {
  //         return coin;
  //       }
  //     });
  //     setResponseFiltered(resultsSearch);
  //   } else {
  //     setResponseFiltered("");
  //   }
  // };

  const filtered = () => {
    if (search.length > 1) {
      var resultsSearch = data.filter((coin) => {
        if (
          coin.name.toLowerCase().includes(search.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(search.toLowerCase())
        ) {
          return coin;
        }
      });
      setDataFiltered(resultsSearch);
    } else {
      setDataFiltered("");
    }
  };

  return (
    <div className="grid place-content-center w-full">
      <h1 className="text-2xl mb-8 ">Top tokens on Poligonswap</h1>

      {/* Grid */}
      <section className="flex flex-col w-[100vw] h-[600px] max-w-[1200px] overflow-x-hidden rounded-md border border-gray-200/20">
        {/* List token name */}
        <div className="flex items-centerjustify-between px-6 border-b border-gray-200/20 dark:bg-[#0D111C] rounded-t-md text-gray-500 text-sm h-[48px]">
          {listName.map((element, index) => (
            <p key={index}>{element}</p>
          ))}
        </div>

        {/* List token */}
        <div className="flex flex-col  dark:bg-[#0D111C]">
          {data?.map((coin, index) => (
            <Coin coin={coin} key={index} index={index + 1} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Markets;

/*


     <div>
        <button type="select"></button>
        <div>
          <select name="" id="">
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
        </div>
      </div>


    <div>
          { search bar }
          <div className="hidden lg:flex items-center justify-start">
            <input
              type="text"
              className="border rounded-lg px-4 py-2 w-80 mb-4 text-gray-600 outline-none"
              value={search}
              placeholder="Filter tokens"
              onChange={handleChange}
            />
          </div>
    </div>

*/
