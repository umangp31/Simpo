import React from "react";

export const getAllTokens = async (network_id: string, wallet_addr: string) => {
  const CHAINBASE_API_KEY = process.env.EXPO_PUBLIC_CHAINBASE_API! ;
  if (!network_id || !wallet_addr) {
    throw new Error("network or wallet is undefined");
  }
  try {
    const response = await fetch(
      `https://api.chainbase.online/v1/account/tokens?chain_id=${network_id}&address=${wallet_addr}&limit=5&page=1`,
      {
        method: "GET",
        headers: {
          "x-api-key": CHAINBASE_API_KEY,
          append: "application/json",
        },
      }
    );
    const res = await response.json();
    if (!response.ok) {
      throw new Error(
        `Network response was not ok: ${response.status} - ${response.statusText}`
      );
    }
    return res;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
