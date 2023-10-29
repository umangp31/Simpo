import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ArrowDown from "../assets/icons/ArrowDown";
import Deposit from "../assets/icons/Deposit";
import ArrowUp from "../assets/icons/GreenArrowUp";
import Colors from "../Constants/colors";

type Props = {};

const Recieve = (props: Props) => {
  return (
    <TouchableOpacity style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 84,
          flex: 1,
          backgroundColor: "#2d2d2d",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 16,
        }}
      >
        <ArrowUp
          width={32}
          height={32}
          style={{ transform: [{ rotate: "180deg" }] }}
          color={Colors.foreground}
        />
        <Text style={{ fontWeight: "400", fontSize: 16, color: "white" }}>
          Recieve
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Recieve;

const styles = StyleSheet.create({});
