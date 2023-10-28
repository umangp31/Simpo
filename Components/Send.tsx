import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SendIcon from "../assets/icons/SendIcon";
import ArrowUp from "../assets/icons/ArrowUp";
import Colors from "../Constants/colors";

type Props = {};

const Send = (props: Props) => {
  return (
    <View
      style={{
        width: 106,
        height: 84,
        backgroundColor: "#2d2d2d",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
      }}
    >
      <ArrowUp width={32} height={32} color={Colors.foreground} />
      <Text style={{ fontWeight: "400", fontSize: 16, color: "white" }}>
        Send
      </Text>
    </View>
  );
};

export default Send;

const styles = StyleSheet.create({});
