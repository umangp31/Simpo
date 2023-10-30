import { token } from "../types/Uniswap";

export const swapTokens = async (
  tokenA: token,
  tokenB: token,
  value: number,
  privateKey: string
) => {
  if (!tokenA || !tokenB) {
    throw new Error("Undefined call");
  }

  const requestBody = {
    privateKey: privateKey,
    tokenAaddress: tokenA.TokenContract,
    tokenBaddress: tokenB.TokenContract,
    tokenAdecimal: tokenA.TokenDecimals,
    tokenBdecimal: tokenB.TokenDecimals,
    amount: value,
  };

  // Define the URL
  const requestURL =
    "https://uniswap-v3-proxy.vercel.app/api/Uniswap/executeTrade";

  //   console.log("body", JSON.stringify(bodyParams));

  const response = await fetch(requestURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw new Error(
      `Network response was not ok: ${response.status} - ${response.statusText}`
    );
  }
  const jsonRes = await response.json();
  console.log(jsonRes, "ff");

  return jsonRes; // Assuming the response is in JSON format
};
