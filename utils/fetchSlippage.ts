// import { dataLength } from "ethers";
import getPriceHistory from "./getPriceHistory";
// import { useTokenStore } from "../store/tokenStore";

const fetchSlippage = async (contract_address: string | undefined) => {
  // const { setCurrentTokenRate, setPreviousTokenRate } = useTokenStore();
  const currentDate = new Date();
  let currentEpochTime = Math.floor(currentDate.getTime() / 1000).toString();
  console.log(typeof currentEpochTime, "current hrs");

  console.log("again current", currentEpochTime);

  currentEpochTime.toString();
  console.log("this is curr epoch", currentEpochTime);

  const twentyFourHoursAgoTime = currentDate.getTime() - 24 * 60 * 60 * 1000;
  let twentyFourHoursAgoEpochTime = Math.floor(
    twentyFourHoursAgoTime / 1000
  ).toString();
  console.log(typeof twentyFourHoursAgoEpochTime, "24 hrs");
  console.log("contract address", contract_address);

  console.log("GMT Time 24 Hours Ago (Epoch):", twentyFourHoursAgoEpochTime);

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
