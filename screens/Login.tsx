import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  StatusBar,
  Animated,
  Easing,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../Constants/colors";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthStore } from "../store/authStore";

const Login = () => {
  const [spinAnim, setSpinAnim] = React.useState(new Animated.Value(0));
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const { setprivateKey } = useAuthStore();
  React.useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  });

  const checkLogin = async () => {
    const userData = await AsyncStorage.getItem("@user_data");
    if (userData) {
      const jsonData = JSON.parse(userData);
      setprivateKey(jsonData.privateKey);
      console.log(jsonData.privateKey);
      console.log(jsonData.publicKey);
      navigation.reset({ index: 0, routes: [{ name: "Root" }] });
    }
  };

  React.useEffect(() => {
    checkLogin();
  }, []);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"black"} />
      <Animated.Image
        source={require("../assets/globe.png")}
        style={[styles.globe, { transform: [{ rotate: spin }] }]}
      />
      <View style={styles.contentContainer}>
        <View style={styles.middleImage}>
          <Animated.Image
            source={require("../assets/crypto.png")}
            style={[styles.crypto, { transform: [{ rotate: spin }] }]}
          />
          <Image
            source={require("../assets/Ethereum.png")}
            style={styles.ethereum}
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.title}>Simpo</Text>
          <Text style={styles.subtitle}>Your escape from memorizing</Text>
          <Text style={[styles.subtitle, styles.line]}>random words</Text>
          <Pressable
            style={styles.createButton}
            onPress={async () => {
              navigation.navigate("CreateWallet");
            }}
          >
            <Text style={styles.createText}>Create new wallet</Text>
          </Pressable>
          <Pressable
            style={styles.importButton}
            onPress={async () => {
              navigation.navigate("ImportWallet");
            }}
          >
            <Text style={styles.importText}>Import Existing</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    padding: 16,
  },
  globe: {
    position: "absolute",
    top: -480,
    left: -150,
  },
  crypto: {
    width: 250,
    height: 250,
    alignSelf: "center",
  },
  contentContainer: {
    marginTop: 130,
    flexDirection: "column",
  },
  footer: {
    marginVertical: 30,
  },
  title: {
    fontSize: 54,
    fontWeight: "600",
    color: Colors.foreground,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "400",
    color: Colors.foreground,
  },
  line: {
    textDecorationLine: "line-through",
  },
  createButton: {
    backgroundColor: Colors.foreground,
    borderRadius: 12,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  createText: {
    color: Colors.background,
    fontSize: 20,
    fontWeight: "600",
  },
  importButton: {
    backgroundColor: Colors.navyBlue,
    borderRadius: 12,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  importText: {
    color: Colors.foreground,
    fontSize: 20,
    fontWeight: "600",
  },
  middleImage: {
    position: "relative",
  },
  ethereum: {
    position: "absolute",
    top: "25%",
    left: "30%",
  },
});
