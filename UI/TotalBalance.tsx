import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const TotalBalance = (props: Props) => {
  return (
    <View
      style={{
        width: "100%",
        height: 126,
        backgroundColor: "#ddfffd",
        borderRadius: 16,
        paddingHorizontal: 24,
        justifyContent: "center",
      }}
    >
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
          $3255.24
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "500", paddingHorizontal: 4 }}>
          USDT
        </Text>
      </View>
    </View>
  );
};

export default TotalBalance;

const styles = StyleSheet.create({});
