import React, { useState } from "react";
import styles from "./style";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home_Screen from "../../screens/home_detail/Home_Screen";
import colors from "../../../contains/colors";
import Home from "../../../assets/images/home.svg";
import Class from "../../../assets/images/class.svg";
import New from "../../../assets/images/new.svg";
import Noti from "../../../assets/images/noti.svg";
import Profile from "../../../assets/images/profile.svg";
import { View, Text, Alert } from "react-native";
import ClassScreen from "../../screens/class";

const Tab = createBottomTabNavigator();
export default function NavigationBar() {
  const [currentScreen, setcurrentScreen] = useState("class");

  return (
    <Tab.Navigator initialRouteName={currentScreen}>
      <Tab.Screen
        name="home"
        component={Home_Screen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.view}>
              <Home stroke={focused ? colors.violet : colors.graySecondary} />
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          focus: (e) => {
            // if (route.state.routeNames.length > 0) {
            // navigation.navigate('class')
            setcurrentScreen(route.name);
            // }
          },
        })}
      />
      <Tab.Screen
        name="class"
        component={ClassScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.view}>
              <Class stroke={focused ? colors.violet : colors.graySecondary} />
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          focus: (e) => {
            setcurrentScreen(route.name);
          },
        })}
      />
      <Tab.Screen
        name="new"
        component={Home_Screen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.view}>
              <New stroke={focused ? colors.violet : colors.graySecondary} />
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          focus: (e) => {
            setcurrentScreen(route.name);
          },
        })}
      />
      <Tab.Screen
        name="noti"
        component={Home_Screen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.view}>
              <Noti stroke={focused ? colors.violet : colors.graySecondary} />
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          focus: (e) => {
            setcurrentScreen(route.name);
          },
        })}
      />
      <Tab.Screen
        name="profile"
        component={Home_Screen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.view}>
              <Profile
                stroke={focused ? colors.violet : colors.graySecondary}
              />
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          focus: (e) => {
            setcurrentScreen(route.name);
          },
        })}
      />
    </Tab.Navigator>
  );
}