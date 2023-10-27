import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Bitcoin from "../assets/icons/Bitcoin";
import ArrowUp from "../assets/icons/ArrowUp";

type Props = {};

const Assets = (props: Props) => {
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
          <Bitcoin width={48} height={48} />
          <View style={{ paddingHorizontal: 4 }}>
            <Text style={{ fontWeight: "500", fontSize: 14, color: "white" }}>
              Bitcoin
            </Text>
            <Text style={{ fontWeight: "500", fontSize: 14, color: "white" }}>
              BTC
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
            $345.23
          </Text>
          <View style={{flexDirection:"row",alignItems:"center",gap:4}} >
            <Text style={{ fontWeight: "500", fontSize: 14, color: "white" }}>
              1.34
            </Text>
            <ArrowUp width={12} height={12} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Assets;

const styles = StyleSheet.create({});
