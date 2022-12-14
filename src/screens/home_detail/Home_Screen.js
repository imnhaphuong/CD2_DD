import React from "react";
import {
  Text,
  Image,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Pressable
} from "react-native";
import styles from "./style";
import Coin from "../../../assets/images/header/coin.svg";
import Thegirl from "../../../assets/images/welcome/Thegirl.svg";
import TopicCard from "../../components/TopicCard";
import Search from "../../../assets/images/nab/Search.svg";
import colors from "../../../contains/colors";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Linking from "expo-linking";
import getAllTopics from "./../../../getdata/getAllTopics";
import Spinner from "react-native-loading-spinner-overlay";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";


const Home_Screen = (props) => {
  const { user } = useSelector(state => state.user)
  const [TOPIC, settopic] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigation = useNavigation();

  //useEffect
  useEffect(() => {
    getAllTopics(settopic, setLoading);
  }, [isLoading]);

  const myRenderTopicItem = ({ item }) => (
    <TopicCard
      name={item.name}
      units={item.units}
      navigation={props.navigation}
    />
  );
  // const [data, setdata] = useState([])
  // function handleDeepLink(event) {
  //   let data = Linking.parse(event.url);
  //   setdata(data);
  // }
  // const url = Linking.useURL();

  // console.log("url"+url );

  // useEffect(() => {
  //   async function getInitalURL() {
  //     const initialURL = await Linking.getInitialURL();
  //     if (initialURL) setdata(Linking.parse(initialURL));
  //   }

  //   Linking.addEventListener("url", handleDeepLink);
  //   if (!data) {
  //     getInitalURL();
  //   }

  //   return () => {
  //     Linking.removeEventListener("click", handleDeepLink);
  //   };
  // }, []);
  AsyncStorage.setItem("userId", "636229a664e39686c4afa67f");

  // console.log(data);
  // const [visible, setvisible] = useState(false);
  // const popupModal = () => {
  //   setvisible(true);
  //   return true;
  // };
  return (
    <SafeAreaView style={styles.container}>
      <Spinner color={colors.violet} visible={isLoading} />
      <StatusBar
        animated={true}
        backgroundColor={colors.white}
        barStyle={"dark-content"}
        showHideTransition={"fade"}
      />
      <View style={styles.header}>
        <Image
          style={styles.landscape}
          source={require("../../../assets/images/welcome/landscape.png")}
        />
        <Pressable onPress={()=>{navigation.navigate("Shop_Screen")}}>
          <View style={styles.coin_display}>
            <Coin />
            <Text style={styles.price}>{user.coin}</Text>
          </View>
        </Pressable>
      </View>
      <FlatList
        ListHeaderComponent={
          <View style={styles.welcome}>
            <View style={styles.group21}>
              <Text style={styles.hello}>
                Chào cậu, <Text style={styles.helloname}>{user.fullname}</Text>{" "}
              </Text>
            </View>
            <View style={styles.Thegirl}>
              <Thegirl style={styles.ThegirlItem} />
            </View>
          </View>
        }
        data={TOPIC}
        renderItem={myRenderTopicItem}
        numColumns={1}
        keyExtractor={(item) => item._id}
      />
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
