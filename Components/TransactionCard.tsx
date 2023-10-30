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
          <View style={{ paddingLeft: 6,paddingRight:2 }}>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/18687546/pexels-photo-18687546/free-photo-of-a-green-surfboard-on-a-wooden-pier-overlooking-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              }}
              style={styles.ParentImage}
              height={48}
              width={48}
            />
            <Image
              source={{
                uri: "https://images.pexels.com/photos/18886885/pexels-photo-18886885/free-photo-of-a-picnic-basket-with-flowers-and-bread-in-the-back-of-a-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
              }}
              style={styles.ChainImage}
              height={22}
              width={22}
            />
          </View>
          <View style={{ paddingHorizontal: 4}}>
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
            <Text style={styles.TokenPriceInUSD}>
              0.435
            </Text>
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
    height: 64,
    // backgroundColor: "#2d2d2d",
    borderRadius: 12,
    paddingHorizontal: 12,
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
    paddingRight:2
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
  TokenPriceInUSD:{
    fontWeight: "500", 
    fontSize: 18, 
    color: "white"
  }
});
