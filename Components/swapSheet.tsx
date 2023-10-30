import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Sheet from "./BottomSheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import Colors from "../Constants/colors";
import { useAuthStore } from "../store/authStore";
import WMatic from "../assets/icons/WMatic";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { tokens } from "../Constants/swap";
import { token } from "../types/Uniswap";
import { useTokenStore } from "../store/tokenStore";

export const SendSwapSheet = ({
  sendTransactionRef,
}: {
  sendTransactionRef: React.RefObject<BottomSheetMethods>;
}) => {
  const { setSendSwapToken } = useTokenStore();

  const _renderItem = ({ item, index }: { item: token; index: number }) => {
    return (
      <TouchableOpacity
        style={styles.tokenContainer}
        onPress={() => {
          setSendSwapToken(item);
          sendTransactionRef.current?.close();
        }}
      >
        {item.TokenLogo}
        <Text style={styles.tokenName}>{item.TokenName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Sheet
      ref={sendTransactionRef}
      enablePanDownToClose={true}
      snapPoints={["38%"]}
    >
      <View style={styles.container}>
        <FlatList data={tokens} renderItem={_renderItem} />
      </View>
    </Sheet>
  );
};

export const RecieveSwapSheet = ({
  sendTransactionRef,
}: {
  sendTransactionRef: React.RefObject<BottomSheetMethods>;
}) => {
  const { setReceiveSwapToken } = useTokenStore();

  const _renderItem = ({ item, index }: { item: token; index: number }) => {
    return (
      <TouchableOpacity
        style={styles.tokenContainer}
        onPress={() => {
          setReceiveSwapToken(item);
          sendTransactionRef.current?.close();
        }}
      >
        {item.TokenLogo}
        <Text style={styles.tokenName}>{item.TokenName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Sheet
      ref={sendTransactionRef}
      enablePanDownToClose={true}
      snapPoints={["38%"]}
    >
      <View style={styles.container}>
        <FlatList data={tokens} renderItem={_renderItem} />
      </View>
    </Sheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: 16,
    flex: 1,
    paddingVertical: 12,
  },
  tokenContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    marginVertical: 8,
  },
  tokenName: {
    fontSize: 28,
    fontWeight: "500",
    color: Colors.foreground,
  },
});
