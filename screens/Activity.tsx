import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import TransactionCard from "../Components/TransactionCard";
import { StatusBar } from "expo-status-bar";
import { ethers } from "ethers";
import fetchUserTransaction from "../utils/fetchUserTransaction";
import { useAuthStore } from "../store/authStore";
import getUserTransactionActivity from "../utils/fetchUserTransaction";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTransactionStore } from "../store/transactionStore";
type Props = {};

const Activity = (props: Props) => {
  useEffect(() => {
    // ActivityData();
    fetchUserTransaction();
  }, []);

  const { publicKey } = useAuthStore();
  const { AllProfileTransactions, setAllProfileTransactions } =
    useTransactionStore();
  const fetchUserTransaction = async () => {
    const transactionData = await getUserTransactionActivity(publicKey!);
    setAllProfileTransactions(transactionData.result);
  };
  // console.log("hanji", AllProfileTransactions![0]);

  return (
    <SafeAreaView style={styles.scrollviewContainer}>
      <StatusBar style="light" backgroundColor="#1d1d1d" />
      <ScrollView style={{ paddingHorizontal: 12, rowGap: 4 }}>
        <View>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "500",
              color: "white",
              justifyContent: "center",
              textAlign: "left",
              paddingTop: 24,
              paddingBottom: 12,
              paddingHorizontal: 8,
            }}
          >
            Recent Transactions
          </Text>
          {AllProfileTransactions?.map((item, index) => {
            return (
              <>
                <TransactionCard key={index!} from={item.from!} to={item.to!} value={item.value!} />
              </>
            );
          })}
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
