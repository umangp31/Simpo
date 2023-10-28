import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect } from "react";
import getTokenBalance from "../utils/getTokenBalance";
import getAllNFT from "../utils/getAllNFT";
import getNFTMetadata from "../utils/getNFTMetadata";
import { getAllTokens } from "../utils/getAllTokens";
import { StatusBar } from "expo-status-bar";
import Avatar from "../Components/Avatar";
import Send from "../Components/Send";
import Assets from "../Components/Assets";
import ArrowDown from "../assets/icons/ArrowDown";
import { SafeAreaView } from "react-native-safe-area-context";
import Swap from "../Components/Swap";
import Recieve from "../Components/Recieve";
import NFTCard from "../Components/NFTCard";
import { FlatList } from "react-native-gesture-handler";
import TotalBalance from "../Components/TotalBalance";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import Sheet from "../Components/BottomSheet";
import Colors from "../Constants/colors";
import TransactionSheet from "../Components/transactionSheet";
const Home = () => {
  // const balance=getTokenBalance('1','0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045');
  const sendTransactionRef = React.useRef<BottomSheetMethods>(null);

  const openTransactionSheet = () => {
    sendTransactionRef?.current?.snapToIndex(0);
  };

  // useEffect(() => {
  //   allNFT();
  // }, []);
  const allNFT = async () =>
    await getAllTokens("1", "0xed5af388653567af2f388e6224dc7c4b3241c544");
  console.log(allNFT);
  const data = [1, 2, 3, 4];
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#1d1d1d" }}>
      <StatusBar style="light" backgroundColor="#1d1d1d" />
      <SafeAreaView style={{ paddingHorizontal: 12 }}>
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
          <Text
            style={{
              paddingLeft: 8,
              paddingRight: 0,
              color: "white",
              fontSize: 16,
              alignSelf: "center",
            }}
          >
            UserName
          </Text>
          <ArrowDown
            width={26}
            height={26}
            color={"white"}
            style={{ alignSelf: "center" }}
          />
        </View>
        <TotalBalance />
        <View
          style={{ paddingVertical: 12, flexDirection: "row", columnGap: 8 }}
        >
          <TouchableOpacity onPress={openTransactionSheet}>
            <Send />
          </TouchableOpacity>
          <Swap />
          <Recieve />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "white",
            justifyContent: "center",
            textAlign: "center",
            paddingTop: 16,
          }}
        >
          My Assets
        </Text>
        <View style={{ paddingVertical: 12, rowGap: 12 }}>
          <Assets />
          <Assets />
          <Assets />
          <Assets />
          <Assets />
          <Assets />
          <Assets />
          <Assets />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "white",
            justifyContent: "center",
            textAlign: "center",
            paddingTop: 16,
          }}
        >
          My NFT's
        </Text>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <View style={{ flex: 1 / 2, padding: 4 }}>
              <NFTCard />
            </View>
          )}
        />
      </SafeAreaView>
      <TransactionSheet sendTransactionRef={sendTransactionRef} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
