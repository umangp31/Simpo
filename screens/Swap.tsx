import {
  ActivityIndicator,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Close from "../assets/icons/Cllose";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../Constants/colors";
import ArrowDown from "../assets/icons/ArrowDown";
import SwapIcon from "../assets/icons/SwapIcon";
import SwapToken from "../assets/icons/SwapToken";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { RecieveSwapSheet, SendSwapSheet } from "../Components/swapSheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTokenStore } from "../store/tokenStore";
import { getQoute } from "../utils/getQoute";
import { useAuthStore } from "../store/authStore";
import { swapTokens } from "../utils/swapTokens";

const Swap = () => {
  const navigation = useNavigation();
  const { privateKey } = useAuthStore();
  const [sendAmount, setSendAmount] = React.useState("");
  const [receiveAmount, setReceiveAmount] = React.useState("");
  const swapTransactionRef = React.useRef<BottomSheetMethods>(null);
  const receiveTransactionRef = React.useRef<BottomSheetMethods>(null);
  const { sendSwapToken, receiveSwapToken } = useTokenStore();
  const [isLoading, setIsLoading] = useState(false);
  const getMeQoute = async () => {
    try {
      setIsLoading(true);
      const result = await getQoute(
        sendSwapToken!,
        receiveSwapToken!,
        parseFloat(sendAmount),
        privateKey!
      );
      console.log("result ", result.qoute);

      setReceiveAmount(result.qoute.slice(0, 5));
    } catch (error) {
      console.log("something went wrong", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={Colors.background}
      />
      <View style={styles.sheetTitleContainer}>
        <Pressable
          style={styles.close}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Close height={18} width={18} />
        </Pressable>
        <Text style={styles.sheetTitle}>Convert</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View>
          <View style={styles.sendBox}>
            <Text style={styles.sendText}>Send</Text>
            <View style={styles.sendAmountContainer}>
              <TextInput
                style={styles.input}
                placeholder="0"
                placeholderTextColor={Colors.background}
                keyboardType="numeric"
                multiline={true}
                value={sendAmount}
                onChangeText={setSendAmount}
                underlineColorAndroid={Colors.background}
              />
              <TouchableOpacity
                style={styles.currencyContainer}
                onPress={() => {
                  swapTransactionRef.current?.snapToIndex(0);
                }}
              >
                <Text style={styles.currency}>{sendSwapToken?.TokenName}</Text>
                <ArrowDown height={20} width={20} color={Colors.background} />
              </TouchableOpacity>
            </View>
          </View>
          {/* <SwapIcon
          height={55}
          width={55}
          style={{
            flex: 100,
            marginTop: -22,
            alignSelf: "center",
            transform: [
              {
                rotate: "90 deg",
              },
            ],
          }}
        /> */}
          <View style={styles.recieveBox}>
            <Text style={styles.receiveText}>Receive</Text>
            <View style={styles.sendAmountContainer}>
              <TextInput
                style={styles.input}
                placeholder="0"
                placeholderTextColor={Colors.background}
                keyboardType="numeric"
                multiline={true}
                value={receiveAmount}
                onChangeText={setReceiveAmount}
                underlineColorAndroid={Colors.background}
              />
              <TouchableOpacity
                style={styles.currencyContainer}
                onPress={() => {
                  receiveTransactionRef.current?.snapToIndex(0);
                }}
              >
                <Text style={styles.currency}>
                  {receiveSwapToken?.TokenName}
                </Text>
                <ArrowDown height={20} width={20} color={Colors.background} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.uniswapCredits}>
            <Text style={styles.uniswapText}>Powered By</Text>
            <View style={styles.uniswapLogo}>
              <Image
                source={require("../assets/UniswapLogo.png")}
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
              />
            </View>
          </View>
        </View>
        <Pressable
          style={[
            styles.createButton,
            {
              backgroundColor: Colors.navyBlue,

              // : Colors.disabledNavyBlue,
            },
          ]}
          onPress={async () => {
            if (receiveAmount === "") {
              await getMeQoute();
            } else {
           
              await swapTokens(
                sendSwapToken!,
                receiveSwapToken!,
                parseFloat(sendAmount),
                privateKey!
              );
            }
          }}
        >
          <Text style={styles.createText}>
            {isLoading ? (
              <ActivityIndicator size={"small"} />
            ) : receiveAmount === "" ? (
              "Get Qoute"
            ) : (
              "Swap"
            )}
          </Text>
        </Pressable>
      </View>
      <SendSwapSheet sendTransactionRef={swapTransactionRef} />
      <RecieveSwapSheet sendTransactionRef={receiveTransactionRef} />
    </SafeAreaView>
  );
};

export default Swap;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: 12,
    flex: 1,
    paddingVertical: 16,
    backgroundColor: Colors.background,
  },
  sheetTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  close: {
    flex: 0.1,
    textAlign: "right",
    flexDirection: "row",
    marginBottom: 12,
  },
  sheetTitle: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    color: Colors.foreground,
    marginTop: 4,
    marginBottom: 20,
    flex: 0.85,
    alignItems: "center",
  },
  input: {
    color: Colors.background,
    marginTop: 4,
    fontSize: 30,
    fontWeight: "500",
    paddingBottom: 8,
    flex: 0.5,
  },
  bodyContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
  },
  sendAmountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sendBox: {
    backgroundColor: Colors.paleYellow,
    padding: 20,
    borderRadius: 20,
    marginVertical: 20,
  },
  sendText: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.background,
  },
  currencyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  currency: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.background,
  },
  recieveBox: {
    backgroundColor: Colors.lightPurple,
    padding: 20,
    borderRadius: 20,

    // zIndex: -1,
  },
  receiveText: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.background,
  },
  uniswapCredits: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  uniswapText: {
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },
  uniswapLogo: {
    height: 100,
    width: 100,

    // asp,
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
