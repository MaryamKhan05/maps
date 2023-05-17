import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
import Colors from "../../assets/Colors";

const blue = Colors.blue;
const black = Colors.black;
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  const size = 20;
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <AntDesign name="home" size={size} color={focused ? blue : black} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <Feather name="bell" size={size} color={focused ? blue : black} />
          ),
        }}
        name="Notifications"
        component={NotificationScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomTab;
