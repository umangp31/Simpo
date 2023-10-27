import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../types/navigation/index";
import React from "react";
import Wallet from "../assets/icons/Wallet";
import Settings from "../assets/icons/Settings";
import Setting from "../screens/Settings";
import Home from "../screens/Home";
import CustomTabBar from "../screens/BottomTabBar";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <BottomTab.Screen
        name="Wallet"
        component={Home}
        options={{
          tabBarLabel: "Wallet",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Wallet height={24} width={24} color={color} />
          ), // Specify the icon for this taba
          tabBarStyle: {
            backgroundColor: "#1d1d1d",
          },
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Setting}
        options={{
          headerShown: false,
          tabBarLabel: "Wallet",
          tabBarIcon: ({ color }) => (
            <Settings height={24} width={24} color={color} />
          ),
          tabBarStyle: {
            backgroundColor: "#1d1d1d",
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
