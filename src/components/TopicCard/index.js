import React from "react";
import UnitCard from "../UnitCard";
import { Text, View, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import Styles from "./styles";
import getALLUnit from "./../../../getdata/getAllUnits";
import { useState } from "react";

const TopicCard = (props) => {
  const topic_title = props.name ? props.name : "Topic";
  const readmore = "Xem thêm";

  const [UNIT_DATA, setdata] = useState([]);
  getALLUnit(setdata);

  const myRenderItem = ({ item }) => (
    <UnitCard
      unit_name={item.unitName}
      username={item.username}
      number_of_cards={item.number_of_cards}
    />
  )
  return (
    <SafeAreaView>
      <View style={{ marginTop: 15 }}>
        <View style={Styles.topic}>
          <Text style={Styles.titletopic}>{topic_title}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('TopicReadMore')}
          >
            <Text style={Styles.readmore}>{readmore}</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.wrapUnits}>
          <FlatList
            data={UNIT_DATA}
            renderItem={myRenderItem}
            numColumns={2}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default TopicCard