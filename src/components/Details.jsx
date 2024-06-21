import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import Loading from "./Loading";
import DetailsChart from "./DetailsChart";
import SwapCard from "./SwapCard";

const Details = (props) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [dataChart, setDataChart] = useState([]);

  const getData = async () => {
    const res = await axios.get(`api.coincap.io/v2/assets/${id}`);
    const resChart = await axios.get(`api.coincap.io/v2/assets/${id}`);
    setData(res.data.data);
    setDataChart(resChart.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return <Loading />;
  }
  return (
    <article className="grid grid-cols-2 gap-4">
      <div className="flex flex-col w-[65vw]">
        <div className="">
          <div className="flex gap-2 items-center justify-start">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              <img
                src={`https://assets.coincap.io/assets/icons/${data.symbol.toLowerCase()}@2x.png`}
                alt=""
              />
            </div>
            <h1 className="flex items-center gap-2 text-2xl dark:text-gray-200 mt-4 mb-2 ">
              <span>Ethereum</span> <span className="text-gray-500">ETH</span>
            </h1>
          </div>
          <p className="text-4xl">$123123</p>
        </div>
        <DetailsChart tokenId={id} />
      </div>

      {/**() 
      <div className="flex justify-center  min-w-[20vw]">
        <SwapCard />
      </div>*/}
    </article>
  );
};

export default Details;
/*

 <div className="flex gap-2 items-center">
        <img src={response?.image.small} alt={response?.name} />
        <h1 className="text-2xl text-gray-400 mt-4 mb-2 capitalize font-bold">
          {response?.name}
        </h1>
      </div>
      <p
        className="mt-6 text-gray-300 [&>a]:text-blue-600 [&>a]:underline inline-block sm:block"
        dangerouslySetInnerHTML={{ __html: response?.description.en }}
      ></p>
      
*/
