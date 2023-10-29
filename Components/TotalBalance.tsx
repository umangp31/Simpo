import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useTokenStore } from "../store/tokenStore";
import getTokenBalance from "../utils/getTokenBalance";
import { useAuthStore } from "../store/authStore";
import getTokenPrice from "../utils/getTokenPrice";
import { ethers } from "ethers";
import { getAllTokens } from "../utils/getAllTokens";
import Address from "../Constants/address";
import { ChainId } from "../Constants/chainId";

type Props = {};

const TotalBalance = (props: Props) => {
  const { userBalance } = useTokenStore();

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
          ${userBalance}
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
