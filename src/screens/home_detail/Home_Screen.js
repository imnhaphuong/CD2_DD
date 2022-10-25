import React from "react";
import {
  Text,
  Image,
  View,
  StatusBar,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import styles from "./style";
import Coin from "../../../assets/images/coin.svg";
import Thegirl from "../../../assets/images/Thegirl.svg";
import Topic from "../../components/Topic";
import Search from "../../../assets/images/Search.svg";
import colors from "../../../contains/colors";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Linking from "expo-linking";

const Home_Screen = (props) => {
  const [data, setdata] = useState([])
  function handleDeepLink(event) {
    let data = Linking.parse(event.url);
    setdata(data);
  }
  const url = Linking.useURL();

  console.log("url"+url );

  useEffect(() => {
    async function getInitalURL() {
      const initialURL = await Linking.getInitialURL();
      if (initialURL) setdata(Linking.parse(initialURL));
    }

    Linking.addEventListener("url", handleDeepLink);
    if (!data) {
      getInitalURL();
    }

    return () => {
      Linking.removeEventListener("click", handleDeepLink);
    };
  }, []);
  AsyncStorage.setItem('userId', '6354f970676f000671d71f21')
 
  console.log(data);
  const [visible, setvisible] = useState(false);
  const popupModal = () => {
    setvisible(true);
    return true;
  };

  const myRenderItem = ({ item }) => {
    <Topic topicname={item.topicname} />;
  };

  const coinPrice = "200";
  return (
    <SafeAreaView style={styles.container}>
      <Text>{} </Text>
      <StatusBar
        animated={true}
        backgroundColor={colors.white}
        barStyle={"dark-content"}
        showHideTransition={"fade"}
      />
      <View style={styles.header}>
        <Image
          style={styles.landscape}
          source={require("../../../assets/images/landscape.png")}
        />
        <View style={styles.coin_display}>
          <Coin />
          <Text style={styles.price}>{coinPrice}</Text>
        </View>
      </View>
      <ScrollView style={styles.scroolview}>
        <View style={styles.welcome}>
          <View style={styles.group21}>
            <Text style={styles.hello}>
              Chào cậu, <Text style={styles.helloname}>Jessica</Text>{" "}
            </Text>
          </View>
          <View style={styles.Thegirl}>
            <Thegirl style={styles.ThegirlItem} />
          </View>
        </View>
        <View>
          <Topic />
        </View>
      </ScrollView>
      <View style={styles.search}>
        <View style={styles.searchicon}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
            <Search></Search>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home_Screen;
