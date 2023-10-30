import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from "react-native";
export const DeFiApps = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={styles.box}
        onPress={() => handleImageClick(item.url)}
      >
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={styles.IconTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const handleImageClick = (url: string) => {
    const params = { url };
    navigation.navigate("WebView", { url });
  };

  return (
    <View style={styles.container}>
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
        Trending Defi dapps
      </Text>

      <FlatList
        data={apps}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  sectionTitle: {
    color: "#000",
    fontFamily: "Rubik-Bold",
    fontSize: 20,
    marginBottom: 8,
    paddingLeft: 4,
  },

  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  IconTitle: {
    paddingVertical: 4,
    color: "#000",
  },

  image: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    borderRadius: 50,
  },
});

const apps = [
  {
    id: 1,
    title: "Aave",
    url: "https://aave.com/",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZPSfvRHMxBXfOLquGso_twHaHa%26pid%3DApi&f=1&ipt=0ecad96782a1386f89bb9f8ecc91262f82f741d9f1bf7220457af0bf77b405c8&ipo=images",
  },
  {
    id: 2,
    title: "Lido",
    url: "https://lido.fi/",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kKsOUXfVsAWiroz91trm3AHaEX%26pid%3DApi%26h%3D160&f=1&ipt=5cc9e350d00c5f80dc979ddb84ca0f0ee33a092addf2259bf92c13ac0bb66045&ipo=images",
  },
  {
    id: 3,
    title: "Balancer",
    url: "https://balancer.fi/",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.akE_4yRWyPdLLCoedtgRjgHaHa%26pid%3DApi&f=1&ipt=167506b5049d78cd226121979c2511b58b914ce4aaa843cc2ed6b8584c562192&ipo=images",
  },
  {
    id: 4,
    title: "Stader",
    url: "https://www.staderlabs.com/",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.QMCVKfyUJvHfs42h2JK3VwAAAA%26pid%3DApi&f=1&ipt=8fcb6293d9b249c126947c6111771497474fb1cb8b5cba76e6ebcbc0d878520e&ipo=images",
  },
];
