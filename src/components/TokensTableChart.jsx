import { useEffect, useState } from "react";

function TokensTableChart(props) {
  const [dataChart, setDataChart] = useState(null);

  const getData = () => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1`
    )
      .then((res) => res.json())
      .then((data) => setDataChart(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    //getData();
    //console.log(dataChart);
  }, []);

  return <div className="chart">{}</div>;
}

export default TokensTableChart;
