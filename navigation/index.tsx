import { Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";

export default function index() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
