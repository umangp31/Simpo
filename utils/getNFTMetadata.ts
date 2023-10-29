import React from "react";

const getNFTMetadata = async (
  network_id: string,
  contract_addr: string,
  token_id: string
) => {
  const CHAINBASE_API_KEY = process.env.EXPO_PUBLIC_CHAINBASE_API! ;
  if (!network_id || !contract_addr || !token_id) {
    throw new Error("parameters are missing or undefined");
  }
  try {
    const response = await fetch(
      `https://api.chainbase.online/v1/nft/metadata?chain_id=${network_id}&contract_address=${contract_addr}&token_id=${token_id}`,
      {
        method: "GET",
        headers: {
          "x-api-key": CHAINBASE_API_KEY,
          accept: "application/json",
        },
      }
    );
    const res = await response.json();
    return res;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export default getNFTMetadata;
