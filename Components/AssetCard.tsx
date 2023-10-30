import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Bitcoin from "../assets/icons/Bitcoin";
import ArrowUp from "../assets/icons/GreenArrowUp";
import { logo, useTokenStore } from "../store/tokenStore";
import { ethers } from "ethers";
import getPriceHistory from "../utils/getPriceHistory";
import fetchSlippage from "../utils/fetchSlippage";
import RedArrowDown from "../assets/icons/RedArrowDown";
import GreenArrowUp from "../assets/icons/GreenArrowUp";

type AssetProps = {
  balance: string | undefined;
  current_usd_price: number | undefined;
  logos: logo[];
  tokenName: string | undefined;
  symbol: string | undefined;
  contract_address: string | undefined;
};

const AssetCard = (props: AssetProps) => {
  console.log(props.contract_address, "okayyy");
  const {
    currentTokenRate,
    previousTokenRate,
    setCurrentTokenRate,
    setPreviousTokenRate,
  } = useTokenStore();
  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    const response = await fetchSlippage(props?.contract_address);
    console.log("all trans here", response);

    setCurrentTokenRate(response.data[0].price);
    console.log("current token ratee", currentTokenRate);

    setPreviousTokenRate(response.data[response.data.length - 1].price);
    console.log("prev finally", previousTokenRate);
  };
  console.log("res from fetchslippage", data);

  console.log("yess", typeof currentTokenRate);
  console.log('hi',parseFloat(currentTokenRate!));
  
  const rate =
    (parseFloat(currentTokenRate!) - parseFloat(previousTokenRate!))/100;
    // const ratePer=rate.toFixed(4)
  console.log(rate, "ratweee");
  // const rate= parseInt(currentTokenRate-previousTokenRate)/100;
  return (
    <View
      style={{
        width: "100%",
        height: 64,
        backgroundColor: "#2d2d2d",
        borderRadius: 12,
        paddingHorizontal: 12,
        justifyContent: "center",
      }}
    >
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: props.logos[0]?.uri }}
            height={48}
            width={48}
            style={{ borderRadius: 50, marginRight: 2 }}
          />
          <View style={{ paddingHorizontal: 4 }}>
            <Text style={{ fontWeight: "500", fontSize: 14, color: "white" }}>
              {props.tokenName}
            </Text>
            <Text style={{ fontWeight: "500", fontSize: 14, color: "white" }}>
              {props.symbol}
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 8,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 14, color: "white" }}>
            $ {ethers.formatEther(props.balance!)}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text style={{ fontWeight: "500", fontSize: 14, color: "white" }}>
              {rate.toFixed(4)}
            </Text>
            {rate > 0 ? (
              <GreenArrowUp width={12} height={12} />
            ) : (
              <RedArrowDown width={12} height={12} />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default AssetCard;

const styles = StyleSheet.create({});
