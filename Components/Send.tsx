import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SendIcon from "../assets/icons/SendIcon";
import ArrowUp from "../assets/icons/GreenArrowUp";
import Colors from "../Constants/colors";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import TransactionSheet from "./transactionSheet";

type Props = {};

const Send = (props: Props) => {
  const sendTransactionRef = React.useRef<BottomSheetMethods>(null);

  const openTransactionSheet = () => {
    sendTransactionRef?.current?.snapToIndex(0);
  };
  return (
    <TouchableOpacity style={{flex:1}} onPress={openTransactionSheet}>
      <View
        style={{
          width: "100%",
          height: 84,
          flex: 1,
          backgroundColor: "#2d2d2d",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 16,
        }}
      >
        <ArrowUp width={32} height={32} color={Colors.foreground} />
        <Text style={{ fontWeight: "400", fontSize: 16, color: "white" }}>
          Send
        </Text>
      </View>
      <TransactionSheet sendTransactionRef={sendTransactionRef} />
    </TouchableOpacity>
  );
};

export default Send;

const styles = StyleSheet.create({});
