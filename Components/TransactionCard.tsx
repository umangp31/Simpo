import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import RedArrowDown from "../assets/icons/RedArrowDown";

type Props = {};

const TransactionCard = (props: Props) => {
  return (
    <View style={styles.ActivityContainer}>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* <Image source={{ uri: props.logos[0]?.uri }} height={48} width={48} /> */}
          <View style={{ paddingLeft: 6, paddingRight: 2 }}>
            <Image
              source={{
                uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-VXH5l0qH_CTVtxIxLw0rAHaHa%26pid%3DApi&f=1&ipt=37f95b195022efe27792e5f01a09413a894d04ab7008e78ad690a1f8be58fdee&ipo=images",
              }}
              style={styles.ParentImage}
              height={48}
              width={48}
            />
            <Image
              source={{
                uri: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
              }}
              style={styles.ChainImage}
              height={22}
              width={22}
            />
          </View>
          <View style={{ paddingHorizontal: 4 }}>
            <View style={styles.ActivityMethodContainer}>
              <RedArrowDown width={14} height={14} />
              <Text style={styles.ActivityMethodText}>Recieved</Text>
            </View>
            <Text style={styles.TransactionAssetName}>WMatic</Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 8,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text style={styles.TokenPrice}>$ 5423</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text style={styles.TokenPriceInUSD}>0.435</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  ActivityContainer: {
    width: "100%",
    // height: 64,
    // backgroundColor: "#2d2d2d",
    borderRadius: 12,
    paddingHorizontal: 12,
    // gap: 4,
    paddingVertical: 8,
    justifyContent: "center",
  },
  ParentImage: {
    borderRadius: 50,
    backgroundColor: "red",
    marginRight: 8,
  },
  ChainImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 50,
    paddingRight: 2,
    objectFit: "contain",
  },
  ActivityMethodContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor:"green",
    justifyContent: "space-between",
    // paddingHorizontal:2,
    columnGap: 4,
  },
  ActivityMethodText: {
    fontWeight: "500",
    fontSize: 14,
    color: "white",
  },
  TransactionAssetName: {
    fontWeight: "500",
    fontSize: 18,
    color: "white",
  },
  TokenPrice: {
    fontWeight: "500",
    fontSize: 14,
    color: "white",
  },
  TokenPriceInUSD: {
    fontWeight: "500",
    fontSize: 18,
    color: "white",
  },
});
