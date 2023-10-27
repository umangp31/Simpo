import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import React from "react";
import Cover from "../assets/icons/Cover";
import { Dimensions } from "react-native";
import RightArrow from "../assets/icons/RightArrow";
const Login = () => {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;
  return (
    <View style={{ position: "relative", flex: 1 }}>
      {/* <Cover width={width} height={height} /> */}
      <View style={{ flex: 0.8 }}>
        <Image
          source={require("../assets/icons/BLAYKKK5.png")}
          style={{ position: "relative" }}
        />
      </View>
      {/* <Text
        style={{
          fontSize: 32,
          color: "white",
          paddingVertical: 4,
          justifyContent: "center",
          alignItems: "center",
          flex: 0.7,
        }}
      >
        Simpo
      </Text> */}
      <View style={{ flex: 1,zIndex:4,opacity:1 }}>
        <Image
          source={require("../assets/icons/pie.png")}
          style={{ position: "relative",bottom:110,zIndex:8,width:'70%',height:'70%' }}
        />
      </View>
      <View
        style={{
          flex: 0.5,
          paddingHorizontal: 12,
          justifyContent: "space-around",
          // alignItems: "center",
          // borderWidth: 2,
          borderColor: "red",
        }}
      >
        <Text style={{ fontSize: 32, color: "white" }}>
          Wallet made Simple to use
        </Text>
        <Pressable
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            width: "100%",
            height: 48,
            borderRadius: 8,
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 24,
          }}
        >
          <Text>Continue</Text>
          <RightArrow width={16} height={16} />
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
