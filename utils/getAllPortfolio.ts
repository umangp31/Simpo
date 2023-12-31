import React from "react";
import { err } from "react-native-svg/lib/typescript/xml";

const getAllPortfolio = async (wallet_addr: string) => {
  const CHAINBASE_API_KEY = process.env.EXPO_PUBLIC_CHAINBASE_API! ;
    if(!wallet_addr){
        throw new Error('wallet is undefined');
    }
  try {
    const response = await fetch(
      `https://api.chainbase.online/v1/account/portfolios?address=${wallet_addr}`,
      {
        method: "GET",
        headers: {
          "x-api-key": CHAINBASE_API_KEY,
          accept: "app;ication/json",
        },
      }
    );

    if (!response.ok) {
      `Network response was not ok: ${response.status} - ${response.statusText}`;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error",error);
    throw error;    
  }
};

export default getAllPortfolio;
