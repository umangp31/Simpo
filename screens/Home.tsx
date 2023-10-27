import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView } from "react-native";
import React, { useEffect } from "react";
import getTokenBalance from "../utils/getTokenBalance";
import getAllNFT from "../utils/getAllNFT";
import getNFTMetadata from "../utils/getNFTMetadata";
import { getAllTokens } from "../utils/getAllTokens";
import { StatusBar } from "expo-status-bar";
import Avatar from "../UI/Avatar";
import Send from "../UI/Send";
import Assets from "../UI/Assets";
import ArrowDown from "../assets/icons/ArrowDown";
const Home = () => {
  // const balance=getTokenBalance('1','0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045');
  useEffect(() => {
    allNFT();
  }, []);
  const allNFT = async () =>
    await getAllTokens("1", "0xed5af388653567af2f388e6224dc7c4b3241c544");
  console.log(allNFT);
  const height = Dimensions.get("screen").height;
  const width = Dimensions.get("screen").width;
  return (
    <ScrollView style={{ flex: 1,backgroundColor:'#1d1d1d' }}>
      <StatusBar style="dark" />
      <SafeAreaView style={{ paddingVertical: 44, paddingHorizontal: 12 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 12,
          }}
        >
          <Avatar
            height={44}
            width={44}
            src="https://images.pexels.com/photos/12987878/pexels-photo-12987878.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
          <Text style={{ paddingHorizontal: 8,color:"white",fontSize:16 }}>UserName</Text>
          <ArrowDown width={16} height={16} color={'white'} />
        </View>
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
            <Text
              style={{ fontSize: 20, fontWeight: "500", paddingHorizontal: 4 }}
            >
              USDT
            </Text>
          </View>
        </View>
        <View style={{paddingVertical:12,flexDirection:"row",columnGap:8}} >
          <Send/>
          <Send/>
          <Send/>
        </View>
        <Text style={{fontSize:16,fontWeight:"500",color:"white",justifyContent:"center",textAlign:"center",paddingTop:16}} >My Assets</Text>
        <View style={{paddingVertical:12,rowGap:12}} >
          <Assets/>
          <Assets/>
          <Assets/>
          <Assets/>
          <Assets/>
          <Assets/>
          <Assets/>
          <Assets/>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
