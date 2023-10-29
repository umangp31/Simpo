import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getAllTokens } from "../utils/getAllTokens";
import { useAuthStore } from "../store/authStore";
import AssetCard from "./AssetCard";
import { useTokenStore } from "../store/tokenStore";

type Props = {};

const MyAssets = (props: Props) => {
  const { publicKey } = useAuthStore();
  const { userAllTokens, setUserAllTokens } = useTokenStore();
  useEffect(() => {
    TokenData();
  }, []);
  const TokenData = async () => {
    // const data = await getAllTokens(
    //   "137",
    //   "0x544bc5524a3d8b563af3a94959dc30c6a79a6d5d"
    // );
    // console.log("data", data);
    // setUserAllTokens(data.data);
  };

  return (
    <View style={{ paddingVertical: 12, rowGap: 12 }}>
      {userAllTokens &&
        userAllTokens.map((item, index) => {
          console.log("yaar", item.data);
          return (
            <>
              <AssetCard
                key={index}
                balance={item.data.balance}
                current_usd_price={item.data.current_usd_price}
                name={item.data.name}
                logos={item.data.logos}
                symbol={item.data.symbol}
              />
            </>
          );
        })}
    </View>
  );
};

export default MyAssets;

const styles = StyleSheet.create({});
