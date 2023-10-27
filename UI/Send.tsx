import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RightArrow from "../assets/icons/RightArrow";

type Props = {};

const Send = (props: Props) => {
  return (
    <View
      style={{
        width: 114,
        height:84,
        backgroundColor: "#2d2d2d",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
      }}
    >
      <RightArrow width={32} height={32} />
      <Text>Send</Text>
    </View>
  );
};

export default Send;

const styles = StyleSheet.create({});
