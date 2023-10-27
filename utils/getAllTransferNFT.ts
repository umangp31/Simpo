import React from "react";
import { err } from "react-native-svg/lib/typescript/xml";

const getAllTransferNFT = async (
  network_id: string,
  contract_addr: string,
  page?: number,
  limit?: number
) => {
  const CHAINBASE_API_KEY = "2XJJnX3sFlWEFn1n5zKZw49hT8L";
  if (!network_id) {
    throw new Error("network is undefined");
  }
  try {
    const response = await fetch(
      `https://api.chainbase.online/v1/nft/transfers?chain_id=${network_id}&contract_address=${contract_addr}&page=1&limit=5`,
      {
        method: "GET",
        headers: {
          "x-api-key": CHAINBASE_API_KEY,
          accept: "application/json",
        },
      }
    );
    const res = response.json();
    console.log(res);
    return res;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export default getAllTransferNFT;
