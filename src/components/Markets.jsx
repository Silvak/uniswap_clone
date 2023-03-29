import useAxios from "../hooks/useAxios";
import Coin from "./Coin";
import { useState } from "react";

const Markets = () => {
  /* Con este codigo hacemos el filtrado en la searchBar de forma dinamica igual que en Unisw. el código utiliza la biblioteca "axios" y el hook "useAxios" 
  para obtener datos de la API de Coingecko, y utiliza el hook "useState" para 
  almacenar la cadena de búsqueda del usuario. Cuando el usuario ingresa una cadena de búsqueda,
   los datos de respuesta se filtran y se actualiza el estado del componente con los resultados filtrados. */
  const { response, setResponse, responseFiltered, setResponseFiltered } =
    useAxios(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    filtered(e.target.value);
  };

  const filtered = () => {
    if (search.length > 1) {
      var resultsSearch = response.filter((coin) => {
        if (
          coin.name.toLowerCase().includes(search.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(search.toLowerCase())
        ) {
          return coin;
        }
      });
      setResponseFiltered(resultsSearch);
    } else {
      setResponseFiltered("");
    }
  };

  return (
    <div>
      <div className="text-2x1 ml-10 mb-8  text-3xl font-sans">
        Top tokens on Poligonswap
      </div>
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
      <div>
        {/* search bar */}
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
      </div>
      <div className="border-b border-t mx-auto border-r border-l border-gray-300 rounded-t-md text-gray-600 text-sm h-12 flex items-center justify-start">
        <div className="hidden sm:block text-lg items-start ml-6 ">#</div>
        <div className="hidden sm:block text-lg items-start  justify-start gap-8 mr- sm:p-8  md:p-12 lg:p-16 xl:p-20">
          Token Name
        </div>
        <div className="hidden sm:block text-lg items-start justify-start gap-8 ml-10 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          Price
        </div>
        <div className="hidden sm:block text-lg items-start justify-start gap-8 ml-7 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          Change
        </div>
        <div className="hidden sm:block text-lg items-start justify-start gap-8 ml-20 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          Volume
        </div>
      </div>
      <section className="flex flex-col  shadow-lg rounded-b-md mr-20  border-gray-300 p-4">
        {responseFiltered
          ? responseFiltered?.map((coin, index) => (
              <Coin coin={coin} key={index} index={index + 1} />
            ))
          : response?.map((coin, index) => (
              <Coin coin={coin} key={index} index={index + 1} />
            ))}
      </section>
    </div>
  );
};

export default Markets;
