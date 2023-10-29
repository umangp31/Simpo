const getTokenBalance = async (
  network_id: string,
  wallet_addr: string | undefined
) => {
  const CHAINBASE_API_KEY = "2XPFIo3YEpS9nidYqPoYm3syEab";

  if (!wallet_addr) {
    throw new Error("Wallet address is undefined");
  }
  try {
    const response = await fetch(
      `https://api.chainbase.online/v1/account/balance?chain_id=${network_id}&address=${wallet_addr}`,
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

    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default getTokenBalance;
