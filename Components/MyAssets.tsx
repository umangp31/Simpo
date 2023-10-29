import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getAllTokens } from "../utils/getAllTokens";
import { useAuthStore } from "../store/authStore";
import AssetCard from "./AssetCard";
import { useTokenStore } from "../store/tokenStore";
type Props = {
};

const MyAssets = () => {
  const { publicKey } = useAuthStore();
  
  const { userAllTokens, setUserAllTokens } = useTokenStore();
  // useEffect(() => {
  //   TokenData();
  // }, []);
  // const TokenData = async () => {
  //   const data = await getAllTokens(
  //     "137",
  //     publicKey!
  //   );
  //   console.log("data he", data.data);
  //   setUserAllTokens(data.data);
  // };

  return (
    <View style={{ paddingVertical: 12, rowGap: 12 }}>
      {userAllTokens &&
        userAllTokens.map((item, index) => {
          // console.log("yaar", item);
          return (
            <>
              <AssetCard
                key={index}
                balance={item.balance}
                current_usd_price={item.current_usd_price}
                tokenName={item.name}
                logos={item.logos}
                symbol={item.symbol}
                contract_address={item.contract_address}
              />
            </>
          );
        })}
    </View>
  );
};

export default MyAssets;

const styles = StyleSheet.create({});
