import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import TransactionCard from "../Components/TransactionCard";
import { StatusBar } from "expo-status-bar";
import { ethers } from "ethers";
import fetchUserTransaction from "../utils/fetchUserTransaction";
import { useAuthStore } from "../store/authStore";
import getUserTransactionActivity from "../utils/fetchUserTransaction";

type Props = {};

const Activity = (props: Props) => {
  useEffect(() => {
    // ActivityData();
    fetchUserTransaction()
  }, [])

  const ActivityData=async()=>{
    const pro=new ethers.EtherscanProvider();
    
    const provider = new ethers.JsonRpcProvider(
      process.env.EXPO_PUBLIC_RPC_URL
    );
    // const transaction=await provider
    console.log(pro);
    
  }

  const {publicKey}=useAuthStore();
  const fetchUserTransaction= async()=>{
    const transactionData=await getUserTransactionActivity(publicKey!);
    
    console.log('transaction data',transactionData);

    // return transactionData;
}
console.log('this are all tra',);

  
  return (
    <ScrollView style={styles.scrollviewContainer}>
      <StatusBar style="light" backgroundColor="#1d1d1d" />
      <SafeAreaView style={{ paddingHorizontal: 12 }}>
        <View>
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Activity;

const styles = StyleSheet.create({
  scrollviewContainer: {
    flex: 1,
    backgroundColor: "#1d1d1d",
  },
});
