import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import MiniLoading from "./MiniLoading";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function DetailsChart(props) {
  const [data, setData] = useState([]);
  const customPoligonTokenName = "Koolinart";

  useEffect(() => {
    let token =
      props.tokenId != customPoligonTokenName ? props.tokenId : "uniswap";

    axios
      .get(`https://api.coincap.io/v2/assets/${token}/history?interval=d1`)
      .then((res) => {
        setData(res.data.data.slice(0, 500));
      });
  }, []);

  let dataPrice = [];
  data.map((item) => {
    return dataPrice.push(parseFloat(item.priceUsd).toFixed(2));
  });

  let dataTime = [];
  data.map((item) => {
    return dataTime.push(item.date);
  });

  const dataTest = {
    labels: dataTime,
    datasets: [
      {
        data: dataPrice,
        backgroundColor: "transparent",
        borderColor: "#0099ff",
        pointBorderColor: "transparent",
        pointBorderWidth: 1,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: "#0099ff",
      },
      point: { radius: 0 },
    },
    layout: {
      padding: { top: 0, bottom: 0, left: 0, right: 0 },
    },
  };

  if (!data) {
    return <MiniLoading />;
  }
  return (
    <div className="flex justify-start items-center w-[90vw] lg:w-[94%]">
      <Line data={dataTest} options={options}></Line>
    </div>
  );
}
export default DetailsChart;
