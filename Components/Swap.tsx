import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SwapToken from "../assets/icons/SwapToken";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const Swap = (props: Props) => {
  const navigation = useNavigation();
  const navigateToSwap = () => {
    navigation.navigate("Swap");
  };
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={navigateToSwap}>
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
        <SwapToken width={32} height={32} />
        <Text style={{ fontWeight: "400", fontSize: 16, color: "white" }}>
          Swap
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Swap;

const styles = StyleSheet.create({});
