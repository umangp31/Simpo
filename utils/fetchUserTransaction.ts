import { useAuthStore } from "../store/authStore";

const getUserTransactionActivity = async (
    wallet_addr: string,
  ) => {
    const POLYGONSCAN_API_KEY = process.env.EXPO_PUBLIC_POLYGONSCAN_API! ;
    if (!wallet_addr) {
      throw new Error("wallet address or network is undefined");
    }
    try {
      const response = await fetch(
        `https://api.polygonscan.com/api?module=account&action=txlist&address=${wallet_addr}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=NSM2FRUTR5QPXQN7PEKR496VVRUP7DPDNK`,
        {
          method: "GET",
          headers: {
            "x-api-key": POLYGONSCAN_API_KEY,
            accept: "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(
          `Network response was not ok: ${response.status} - ${response.statusText}`
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };


export default getUserTransactionActivity;