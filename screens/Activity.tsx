import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TransactionCard from "../Components/TransactionCard";
import { StatusBar } from "expo-status-bar";

type Props = {};

const Activity = (props: Props) => {
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
