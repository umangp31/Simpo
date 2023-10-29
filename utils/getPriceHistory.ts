import React from 'react'

const getPriceHistory = async(network_id:string,token_addr:string,contract_addr:string,start_time:Date,end_time:Date) => {
    const CHAINBASE_API_KEY = "2XPET0EzcCGIdM5iPNboKQzSDIu";
    if (!contract_addr || !network_id ) {
      throw new Error("wallet address or network is undefined");
    }
    try {
      const response = await fetch(
        `https://api.chainbase.online/v1/token/price/history?chain_id=${network_id}&contract_address=${token_addr}&from_timestamp=${start_time}&end_timestamp=${end_time}`,
        {
          method: "GET",
          headers: {
            "x-api-key": CHAINBASE_API_KEY,
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
      console.log(data.data);
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
}

export default getPriceHistory;