import { StyleSheet, Text, View, Image } from "react-native";
import React,{useState,useEffect} from "react";
import Bitcoin from "../assets/icons/Bitcoin";
import ArrowUp from "../assets/icons/GreenArrowUp";
import { logo, useTokenStore } from "../store/tokenStore";
import { ethers } from "ethers";
import getPriceHistory from "../utils/getPriceHistory";
import fetchSlippage from "../utils/fetchSlippage";
import RedArrowDown from "../assets/icons/RedArrowDown";

type AssetProps = {
  balance: string | undefined;
  current_usd_price: number | undefined;
  logos: logo[];
  tokenName: string | undefined;
  symbol: string | undefined;
  contract_address:string | undefined;
};

const AssetCard = (props: AssetProps) => {
  console.log(props.contract_address,'okayyy');
  useEffect(() => {
    data();
  }, [])
  
  const data=async()=>await fetchSlippage(props?.contract_address);
  const {currentTokenRate,previousTokenRate}=useTokenStore();
  console.log('yess',typeof(currentTokenRate));
  
  const rate:number = (currentTokenRate-previousTokenRate)/100;
  console.log(rate,'ratwwww');
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
          {/* <Bitcoin width={48} height={48} /> */}
          <Image source={{ uri: props.logos[0]?.uri }} height={48} width={48} />
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
            {rate>0?<ArrowUp width={12} height={12}/> :<RedArrowDown width={12} height={12}/>}
            {/* <ArrowUp width={12} height={12} /> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default AssetCard;

const styles = StyleSheet.create({});
