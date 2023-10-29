import React from "react";

const getTokenPrice = async (network_id: string, token_addr: string) => {
  const CHAINBASE_API_KEY = process.env.EXPO_PUBLIC_CHAINBASE_API! ;
  if (!token_addr || !network_id) {
    throw new Error("wallet address or network is undefined");
  }
  try {
    const response = await fetch(
      `https://api.chainbase.online/v1/token/price?chain_id=${network_id}&contract_address=${token_addr}`,
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
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default getTokenPrice;
