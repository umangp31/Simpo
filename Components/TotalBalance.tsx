import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useTokenStore } from "../store/tokenStore";
import getTokenBalance from "../utils/getTokenBalance";
import { useAuthStore } from "../store/authStore";
import getTokenPrice from "../utils/getTokenPrice";
import { ethers } from "ethers";
import { getAllTokens } from "../utils/getAllTokens";

type Props = {};

const TotalBalance = (props: Props) => {
  const { tokenPrice, userTokenBalance, setTokenPrice, setUserTokenBalance } =
    useTokenStore();
  const [total, setTotal] = useState<string | undefined>(undefined);
  const { publicKey } = useAuthStore();
  useEffect(() => {
    tokenData();
  }, []);
  const tokenData = async () => {
    console.log(publicKey, "publicKey");

    let balanceData = await getTokenBalance("137", publicKey);
    console.log("balance", balanceData);

    balanceData = ethers.formatEther(balanceData.data);
    // setuserBalance(balanceData);
    let tokenBalance = await getTokenPrice(
      "137",
      "0x0000000000000000000000000000000000001010"
    );
    tokenBalance = tokenBalance.data.price;
    console.log(tokenBalance), "tokenBalance";

    // settokenRate(tokenBalance)
    const calculatedTotal = (parseFloat(tokenBalance) * balanceData).toFixed(2);

    setTotal(calculatedTotal);
  };
  console.log("aagaya", total);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, fontWeight: "400", paddingVertical: 4 }}>
        Balance
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "baseline",
          paddingVertical: 4,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "700",
            paddingRight: 4,
          }}
        >
          ${total}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "500", paddingHorizontal: 4 }}>
          USD
        </Text>
      </View>
    </View>
  );
};

export default TotalBalance;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 126,
    backgroundColor: "#ddfffd",
    borderRadius: 16,
    paddingHorizontal: 24,
    justifyContent: "center",
  },
});
