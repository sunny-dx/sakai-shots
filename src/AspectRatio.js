import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { viewportWidth } from "../constants";
import { useGlobalContext } from "../GlobalContext";
import Backgrounds from "./Backgrounds";

const ratios = [
  { id: "1", aspectRatio: 1, title: "1:1" },
  { id: "16/9", aspectRatio: 16 / 9, title: "16:9" },
  { id: "9/16", aspectRatio: 9 / 16, title: "9:16" },
  { id: "4/3", aspectRatio: 4 / 3, title: "4:3" },
];

const AspectRatio = () => {
  const [state, dispatch] = useGlobalContext();

  const renderItem = ({ aspectRatio, id, title }) => (
    <TouchableOpacity
      key={id}
      style={{
        width: 50,
        height: 50,
        marginHorizontal: 5,
        borderRadius: 10,
        marginRight: 10,
        backgroundColor: state.aspectRatio === aspectRatio?"rgba(255, 255, 255, 0.3)": "rgba(255, 255, 255, 0.1)",
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() =>
        dispatch({
          type: "ASPECT_RATIO",
          payload: { aspectRatio },
        })
      }
    >
      <Text
        style={{
          color: "white",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        width: viewportWidth,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <ScrollView
        horizontal
        style={{
          width: viewportWidth,
          maxHeight: 65,
        }}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {ratios.map(renderItem)}
      </ScrollView>
      {/* <Text style={styles.title}>{state.title}</Text> */}
    </View>
  );
};

export default AspectRatio;
