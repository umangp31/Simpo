// import { dataLength } from "ethers";
import getPriceHistory from "./getPriceHistory";
// import { useTokenStore } from "../store/tokenStore";

const fetchSlippage = async (contract_address: string | undefined) => {
  // const { setCurrentTokenRate, setPreviousTokenRate } = useTokenStore();
  const currentDate = new Date();
  let currentEpochTime = Math.floor(currentDate.getTime() / 1000).toString();

  currentEpochTime.toString();

  const twentyFourHoursAgoTime = currentDate.getTime() - 24 * 60 * 60 * 1000;
  let twentyFourHoursAgoEpochTime = Math.floor(
    twentyFourHoursAgoTime / 1000
  ).toString();

  const history = await getPriceHistory(
    "137",
    contract_address!,
    twentyFourHoursAgoEpochTime,
    currentEpochTime
  );
  // console.log("this is history current price", history.data[0].price);
  // setCurrentTokenRate(history.data[0].price);
  // console.log("this is 24 hrs before price", history.data[history.data.length - 1].price);
  // setPreviousTokenRate(history.data[history.data.length - 1].price);
  // console.log(history);

  return history;
};

export default fetchSlippage;
