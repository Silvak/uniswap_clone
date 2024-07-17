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
      props.tokenId !== customPoligonTokenName ? props.tokenId : "uniswap";
    try {
      axios.get(`https://api.coincap.io/v2/assets/${token}/history?interval=d1`)
        .then((res) => {
          console.log(res.data.data.slice(0, 500));
          setData(res.data.data.slice(0, 500));
        })
        .catch(() => {
          setData([
            { date: "2023-01-01", priceUsd: "1.00" },
            { date: "2023-01-02", priceUsd: "1.01" },
            { date: "2023-01-03", priceUsd: "1.02" },
            { date: "2023-01-04", priceUsd: "1.02" },
            { date: "2023-01-05", priceUsd: "1.04" },
            { date: "2023-01-06", priceUsd: "1.02" },
            { date: "2023-01-07", priceUsd: "1.06" },
            { date: "2023-01-08", priceUsd: "1.07" },
            { date: "2023-01-09", priceUsd: "1.08" },
            { date: "2023-01-10", priceUsd: "1.09" },
            { date: "2023-01-11", priceUsd: "1.02" },
            { date: "2024-01-12", priceUsd: "1.00" },
            { date: "2024-01-01", priceUsd: "1.02" },
            { date: "2024-01-02", priceUsd: "1.01" },
            { date: "2024-01-03", priceUsd: "1.02" },
            { date: "2024-01-04", priceUsd: "1.02" },
            { date: "2024-01-05", priceUsd: "1.04" },
            { date: "2024-01-06", priceUsd: "1.05" },
            { date: "2024-01-07", priceUsd: "1.02" },
            { date: "2024-01-08", priceUsd: "1.07" },
            { date: "2024-01-09", priceUsd: "1.08" },
            { date: "2024-01-10", priceUsd: "1.09" },
            { date: "2024-01-11", priceUsd: "1.10" },
            // Agrega más datos aquí según sea necesario
          ]);
        });
    } catch (error) {
      console.error(error);
    }
  }, [props.tokenId]);

  const dataPrice = data.map(item => parseFloat(item.priceUsd).toFixed(2));
  const dataTime = data.map(item => item.date);

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
    responsive: true,
    maintainAspectRatio: false,
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
    <div className="relative mr-12 w-full h-64">
      <Line data={dataTest} options={options}></Line>
    </div>
  );
}

export default DetailsChart;
