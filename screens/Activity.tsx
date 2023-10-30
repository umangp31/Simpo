import {ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import TransactionCard from "../Components/TransactionCard";
import { StatusBar } from "expo-status-bar";
import { ethers } from "ethers";
import fetchUserTransaction from "../utils/fetchUserTransaction";
import { useAuthStore } from "../store/authStore";
import getUserTransactionActivity from "../utils/fetchUserTransaction";
import { SafeAreaView } from "react-native-safe-area-context";
type Props = {};

const Activity = (props: Props) => {
  useEffect(() => {
    // ActivityData();
    fetchUserTransaction();
  }, []);

  const { publicKey } = useAuthStore();
  const fetchUserTransaction = async () => {
    const transactionData = await getUserTransactionActivity(publicKey!);
    
  };

  return (
    <SafeAreaView style={styles.scrollviewContainer}>
      <StatusBar style="light" backgroundColor="#1d1d1d" />
      <ScrollView style={{ paddingHorizontal: 12,rowGap:4 }}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;

const styles = StyleSheet.create({
  scrollviewContainer: {
    flex: 1,
    backgroundColor: "#1d1d1d",
  },
});
