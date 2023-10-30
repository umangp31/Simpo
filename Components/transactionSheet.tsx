import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import Sheet from "./BottomSheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import Colors from "../Constants/colors";
import Close from "../assets/icons/Cllose";
import { Wallet, ethers } from "ethers";
import { useAuthStore } from "../store/authStore";

const TransactionSheet = ({
  sendTransactionRef,
}: {
  sendTransactionRef: React.RefObject<BottomSheetMethods>;
}) => {
  const [address, setAddress] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const { privateKey } = useAuthStore();
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChangeAmount = (value: string) => {
    setAmount(value);
  };

  const checkAddress = (value: string) => {
    setAddress(value);
    if (
      (value.includes("0x") && value.length === 42) ||
      value.includes(".eth")
    ) {
      setIsValid(true);
    }
  };

  const sendTokens = async () => {
    try {
      setIsLoading(true);
      const provider = new ethers.JsonRpcProvider(
        process.env.EXPO_PUBLIC_RPC_URL
      );
      console.log(privateKey);
      const signer = new Wallet(privateKey!, provider);
      const tx = await signer.sendTransaction({
        to: address,
        value: ethers.parseUnits(amount, "ether"),
      });
      console.log(tx);
      sendTransactionRef?.current?.close();
    } catch (error) {
      console.log("something went wrong", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet
      ref={sendTransactionRef}
      enablePanDownToClose={true}
      snapPoints={["60%"]}
    >
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.sheetTitleContainer}>
            <Text style={styles.sheetTitle}>Send Matic</Text>
            <Pressable
              style={styles.close}
              onPress={() => {
                sendTransactionRef?.current?.close();
              }}
            >
              <Close height={18} width={18} />
            </Pressable>
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>Enter Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Any address or ENS name"
              placeholderTextColor="#555555"
              keyboardType="default"
              multiline={true}
              value={address}
              onChangeText={checkAddress}
            />
          </View>
          <View style={styles.middleContainer}>
            <View style={styles.amountContainer}>
              <Text style={styles.dollar}>$</Text>
              <TextInput
                style={styles.amountInput}
                placeholder="0"
                placeholderTextColor={Colors.foreground}
                keyboardType="numeric"
                multiline={true}
                value={amount}
                onChangeText={onChangeAmount}
                selectionColor={Colors.foreground}
                cursorColor={Colors.foreground}
              />
            </View>
            <Text style={styles.maticAmount}>~ 0 Matic</Text>
          </View>
          <Text style={styles.balance}>Your Balance - 3 Matic</Text>
        </View>
        <Pressable
          style={[
            styles.createButton,
            {
              backgroundColor: isValid
                ? Colors.navyBlue
                : Colors.disabledNavyBlue,
            },
          ]}
          onPress={async () => {
            await sendTokens();
          }}
          disabled={!isValid}
        >
          <Text style={styles.createText}>
            {isLoading ? <ActivityIndicator size={"small"} /> : "Send"}
          </Text>
        </Pressable>
      </View>
    </Sheet>
  );
};

export default TransactionSheet;

const styles = StyleSheet.create({
  sheetTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  close: {
    flex: 0.25,
    textAlign: "right",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginBottom: 12,
  },
  sheetTitle: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "right",
    color: Colors.foreground,
    marginTop: 4,
    marginBottom: 20,
    flex: 0.7,
    alignItems: "center",
  },
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    flex: 1,
    paddingVertical: 12,
  },
  contentContainer: {
    flexDirection: "column",
  },
  middleContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 20,
  },
  questionContainer: {
    backgroundColor: Colors.foreground,
    padding: 18,
    borderRadius: 20,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    color: Colors.foreground,
    fontWeight: "500",
    backgroundColor: Colors.navyBlue,
    borderRadius: 10,
    paddingHorizontal: 4,
    alignSelf: "flex-start",
  },
  input: {
    color: Colors.background,
    marginTop: 8,
    fontSize: 20,
    fontWeight: "500",
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flex: 0.8,
    marginLeft: 70,
  },
  dollar: {
    color: Colors.foreground,
    fontSize: 42,
    fontWeight: "500",
  },
  amountInput: {
    color: Colors.foreground,
    fontSize: 44,
    fontWeight: "500",
    marginLeft: 4,
  },
  maticAmount: {
    color: Colors.navyBlue,
    fontSize: 16,
    flex: 0.4,
    marginBottom: 8,
    fontWeight: "600",
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
    gap: 4,
  },
  balance: {
    color: Colors.foreground,
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    marginVertical: 16,
  },
  createButton: {
    borderRadius: 10,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  createText: {
    color: Colors.foreground,
    fontSize: 20,
    fontWeight: "800",
  },
});
