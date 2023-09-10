import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { viewportWidth } from "../constants";
import { useGlobalContext } from "../GlobalContext";
import Backgrounds from "./Backgrounds";

const data = Array.from({ length: 20 }, (_, index) => ({
  id: String(index),
  imageUrl: `https://source.unsplash.com/random/${index}`,
}));

const Background = () => {
  const [state, dispatch] = useGlobalContext();
  const onRadiusChange = (radius) => {
    dispatch({
      type: "RADIUS",
      payload: { radius },
    });
  };

  const renderItem = (Item, i) => (
    <TouchableOpacity
      key={i}
      style={{
        width: 50,
        height: 50,
        marginHorizontal: 5,
        borderRadius: 10,
        marginRight: 10,
      }}
      onPress={() =>
        dispatch({
          type: "BACKGROUND",
          payload: { background: Item },
        })
      }
    >
      <Item editor={true} />
      {/* <Image
        style={{
          width: 50,
          height: 50,
          marginHorizontal: 5,
          borderRadius: 10,
          marginRight: 10,
        }}
        source={{ uri:  `https://source.unsplash.com/random/${i}`, }}
        resizeMode="cover"
      /> */}
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
        {Backgrounds.map(renderItem)}
      </ScrollView>
      {/* <Text style={styles.title}>{state.title}</Text> */}

      {/* <Slider value={state.radius} onValueChange={onRadiusChange} /> */}
    </View>
  );
};

export default Background;
