import {
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
  const [answer, setAnswer] = React.useState<Answer>({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
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
          console.log(answer);
        }}
      >
        <Text style={styles.createText}>Create</Text>
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
    // textAlign: "center",
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
    color: Colors.background,
    fontWeight: "500",
    backgroundColor: Colors.mintGreen,
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
    backgroundColor: Colors.mintGreen,
    borderRadius: 10,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  createText: {
    color: Colors.background,
    fontSize: 20,
    fontWeight: "800",
  },
});
