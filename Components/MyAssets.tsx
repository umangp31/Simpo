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
    const data = await getAllTokens("137", publicKey!);
    setUserAllTokens(data.data);
    setTimeout(() => {}, 0);
    // console.log('me select ho gaya',data);
  };
  console.log("high hu", userAllTokens);

  return (
    <View style={{ paddingVertical: 12, rowGap: 12 }}>
      {userAllTokens.map((item, index) => {
        console.log('yaar',item.data);
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
