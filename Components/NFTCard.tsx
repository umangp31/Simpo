import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import getAccountNFT from "../utils/getAccountNFT";
import { useAuthStore } from "../store/authStore";
import { useNftStore } from "../store/NftStore";
import getIPFSLink from "../utils/resolveIPFSUrl";
type Props = {};

const NFTCard = (props: Props) => {
  const sendTransactionRef = React.useRef<BottomSheetMethods>(null);
  const { publicKey } = useAuthStore();
  const openTransactionSheet = () => {
    sendTransactionRef?.current?.snapToIndex(0);
  };
  const { AccountNft } = useNftStore();

  return (
    <View
      style={{
        width: "47%",
        height: 156,
        backgroundColor: "#ddfffd",
        borderRadius: 16,
      }}
    >
      {AccountNft?.map((item, index) => {
        return (
          <View>
            <Image
              source={{
                uri: getIPFSLink(item.image_uri),
              }}
              style={{
                // flex:1,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 16,
              }}
            />
          </View>
        );
      })}
    </View>
  );
};

export default NFTCard;

const styles = StyleSheet.create({});
