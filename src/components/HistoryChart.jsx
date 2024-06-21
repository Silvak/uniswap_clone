import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


const HistoryChart = () => {
  const { id } = useParams();
  const { response } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`);
  
  if(!response) {
    return (
      <div>Loading...</div>
    )
  }
  const coinChartData = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));
  
  const options = {
    responsive: true
  }
  const data = {
    labels: coinChartData
    .map(value => moment(value.x).format('LL'))
    .filter((hour, index) => index % 4 === 0),
    datasets: [
      {
 
        label: id,
        data: coinChartData.map(val => val.y),
        borderColor: 'rgb(161, 207, 237)',
        backgroundColor: 'rgba(53, 199, 235, 0.5)',
        
      }
    ]
  }

  return (
    <div className="ml-20 mr-20 mt-20">
      <Line options={options} data={data} />
    </div>
  )
}

export default HistoryChart;
