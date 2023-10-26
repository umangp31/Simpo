import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import getTokenBalance from "../utils/getTokenBalance";
import getAllNFT from "../utils/getAllNFT";
import getNFTMetadata from "../utils/getNFTMetadata";
import { getAllTokens } from "../utils/getAllTokens";
const Home = () => {
  // const balance=getTokenBalance('1','0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045');
  useEffect(() => {
    allNFT();
  }, []);
  const allNFT =async()=>await getAllTokens("1", "0xed5af388653567af2f388e6224dc7c4b3241c544");   
    console.log(allNFT);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
