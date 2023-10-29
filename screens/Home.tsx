import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Avatar from "../Components/Avatar";
import Send from "../Components/Send";
import ArrowDown from "../assets/icons/ArrowDown";
import { SafeAreaView } from "react-native-safe-area-context";
import Swap from "../Components/Swap";
import Recieve from "../Components/Recieve";
import NFTCard from "../Components/NFTCard";
import { FlatList } from "react-native-gesture-handler";
import TotalBalance from "../Components/TotalBalance";
import { useAuthStore } from "../store/authStore";
import { ethers } from "ethers";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import TransactionSheet from "../Components/transactionSheet";
import MyAssets from "../Components/MyAssets";
import getTokenPrice from "../utils/getTokenPrice";
import getTokenBalance from "../utils/getTokenBalance";
import { ChainId } from "../Constants/chainId";
import Address from "../Constants/address";
import { useTokenStore } from "../store/tokenStore";
const Home = () => {
  const { publicKey } = useAuthStore();
  const { setTokenPrice, setUserBalance, setUserTokenBalance } =
    useTokenStore();
  const sendTransactionRef = React.useRef<BottomSheetMethods>(null);
  const data = [1, 2, 3, 4];

  const openTransactionSheet = () => {
    sendTransactionRef?.current?.snapToIndex(0);
  };
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    try {
      let balanceData = await getTokenBalance(ChainId.Matic, publicKey);

      balanceData = ethers.formatEther(balanceData.data);
      setUserTokenBalance(balanceData);

      const tokenBalance = await getTokenPrice(ChainId.Matic, Address.Matic);

      setTokenPrice(tokenBalance.data.price);
      const calculatedTotal = (
        parseFloat(tokenBalance.data.price) * balanceData
      ).toFixed(2);

      setUserBalance(calculatedTotal);
    } catch (error) {
      console.log("error while fetching user data", error);
    }
  };
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
          style={{
            flex: 1,
            paddingVertical: 12,
            flexDirection: "row",
            columnGap: 8,
          }}
        >
          <TouchableOpacity onPress={openTransactionSheet}>
            <Send />
          </TouchableOpacity>
          <TouchableOpacity>
            <Swap />
          </TouchableOpacity>
          <TouchableOpacity>
            <Recieve />
          </TouchableOpacity>
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
        <MyAssets />
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
