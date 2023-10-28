import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const NFTCard = (props: Props) => {
  return (
    <Pressable
      style={{
        paddingHorizontal: 12,
        flex:0.5,
        width: "100%",
        height: 156,
        backgroundColor: "#ddfffd",
        borderRadius: 16,
      }}
    >
      <Text>NFTCard</Text>
    </Pressable>
  );
};

export default NFTCard;

const styles = StyleSheet.create({});
