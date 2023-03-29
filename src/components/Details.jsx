import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";

const CoinDetails = () => {
  const { id } = useParams();
  const { response } = useAxios(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=false`
  );

  if (!response) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-1 item-left m-60">
      <div className="flex gap-2 items-center">
        <img src={response.image.small} alt={response.name} />
        <h1 className="text-2xl text-gray-400 mt-4 mb-2 capitalize font-bold">{response.name}</h1>
      </div>
      <p className='mt-6 text-gray-300 [&>a]:text-blue-600 [&>a]:underline inline-block sm:block' dangerouslySetInnerHTML={{ __html: response.description.en }}></p>
    </div>
  );
};

export default CoinDetails;
