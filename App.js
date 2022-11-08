import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "./src/screens/sign_up/SignUpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClassDetailScreen from "./src/screens/class_detail";
import Home_Screen from "./src/screens/home_detail/Home_Screen";
import NavigationBar from "./src/components/Navigation/NavigationBar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignInScreen from "./src/screens/sign_in/SignInScreen";
import Search_Screen from "./src/screens/search/Search_Screen";
import TopicReadMore from "./src/screens/readmore";
import VerifyEmailScreen from "./src/screens/verify_email/VerifyEmailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // tắt header
          headerShown: false,
        }}
        initialRouteName="Navi"
      >
        <Stack.Screen name="Navi" component={NavigationBar} />
        <Stack.Screen name="Home" component={Home_Screen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ClassDetail" component={ClassDetailScreen} />
        <Stack.Screen name="Search" component={Search_Screen}/>
        <Stack.Screen name="TopicReadMore" component={TopicReadMore}/>
        <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
