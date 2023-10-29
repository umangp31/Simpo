import React from "react";

const getAllNFT = async (network_id: string, wallet_addr: string) => {
  const CHAINBASE_API_KEY = "2XPFIo3YEpS9nidYqPoYm3syEab";
  if (!wallet_addr || !network_id) {
    throw new Error("wallet address or network is undefined");
  }
  try {
    const response = await fetch(
      `https://api.chainbase.online/v1/account/nfts?chain_id=${network_id}&address=${wallet_addr}&page=1&limit=5`,
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

export default getAllNFT;
