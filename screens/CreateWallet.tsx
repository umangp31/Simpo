import {
  ActivityIndicator,
  Button,
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../Constants/colors";
import {
  Wallet,
  ethers,
  hexlify,
  pbkdf2,
  randomBytes,
  toUtf8Bytes,
} from "ethers";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthStore } from "../store/authStore";

export type Answer = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

export type Question = {
  text: string;
  onChange: (text: string) => void;
  value: string;
};
const CreateWallet = () => {
  const {setprivateKey,setpublicKey}=useAuthStore();
  const [answer, setAnswer] = React.useState<Answer>({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const navigation = useNavigation();

  const Questions: Question[] = [
    {
      text: "What is your childhood name?",
      onChange: (text: string) => {
        setAnswer({ ...answer, first: text });
      },
      value: answer.first,
    },
    {
      text: "What is your favourite color?",
      onChange: (text: string) => {
        setAnswer({ ...answer, second: text });
      },
      value: answer.second,
    },
    {
      text: "What is your school name?",
      onChange: (text: string) => {
        setAnswer({ ...answer, third: text });
      },
      value: answer.third,
    },
    {
      text: "What is your favourite sport?",
      onChange: (text: string) => {
        setAnswer({ ...answer, fourth: text });
      },
      value: answer.fourth,
    },
  ];

  const storeWalet = async (privateKey: string) => {
    const wallet = new Wallet(privateKey);
    console.log("wallet private key", wallet.privateKey);
    console.log("wallet public key", wallet.address);
    setprivateKey(wallet.privateKey);
    setpublicKey(wallet.address);
    const data = {
      privateKey: wallet.privateKey,
      publicKey: wallet.address,
    };
    const userData = JSON.stringify(data);
    await AsyncStorage.setItem("@user_data", userData);

    navigation.reset({ index: 0, routes: [{ name: "Root" }] });
  };

  const createWallet = async () => {
    try {
      if (
        answer.first == "" ||
        answer.second == "" ||
        answer.third == "" ||
        answer.fourth == ""
      ) {
        console.log("invalid click");
        return;
      }

      setIsLoading(true);

      const combinedAnswer =
        answer.first + answer.second + answer.third + answer.fourth;
      console.log(combinedAnswer, "combined answer");
      const answersBytes = toUtf8Bytes(combinedAnswer, "NFKC");

      const salt = "df1f2d3f4d77ac66e9c5a6c3d8f921b6";
      const saltBytes = toUtf8Bytes(salt, "NFKC");
      console.log(saltBytes, "random salt");

      const privateKey = await pbkdf2(
        answersBytes,
        saltBytes,
        100000,
        32,
        "sha256"
      );
      console.log(privateKey, "private key in buffer");
      await storeWalet(privateKey);
    } catch (error) {
      console.log("Something went wrong", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderQuestions = ({ item }: { item: Question }) => {
    return (
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{item.text}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter you answer✍️"
          placeholderTextColor="#555555"
          keyboardType="default"
          value={item.value}
          onChangeText={item.onChange}
          multiline={true}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.createContainer}>
      <StatusBar />
      <Text style={styles.headerText}>
        Answer some simple questions to setup your wallet !
      </Text>

      <FlatList
        data={Questions}
        renderItem={renderQuestions}
        style={styles.questionsContainer}
      />
      <Pressable
        style={styles.createButton}
        onPress={async () => {
          // setIsLoading(true);
          await createWallet();
        }}
      >
        <Text style={styles.createText}>
          {isLoading ? (
            <ActivityIndicator color={Colors.foreground} />
          ) : (
            "Create"
          )}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default CreateWallet;

const styles = StyleSheet.create({
  createContainer: {
    backgroundColor: Colors.background,
    flex: 1,
    padding: 16,
  },
  headerText: {
    color: Colors.foreground,
    fontSize: 22,
    fontWeight: "600",
  },
  questionsContainer: {
    marginTop: 24,
    flexDirection: "column",
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
  createButton: {
    backgroundColor: Colors.navyBlue,
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
