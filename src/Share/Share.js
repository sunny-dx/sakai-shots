import { Slider } from "@miblanchard/react-native-slider";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { viewportWidth } from "../../constants";
import { useGlobalContext, usePreviewRef } from "../../GlobalContext";
import onShare from "./onShare";

const options = [
  {
    id: "medium",
    title: "Medium Quality",
  },
  {
    id: "high",
    title: "High Quality",
  },
];

const getQualityResolution = (quality, aspectRatio) => {
  switch (quality) {
    case "high":
      return {
        width: 1280,
        height: 1280 / aspectRatio,
      };
    case "medium":
      return {
        width: 720,
        height: 720 / aspectRatio,
      };
  }
};

const Share = () => {
  const [state, dispatch] = useGlobalContext();
  const previewRef = usePreviewRef();

  const renderItem = (item, i) => (
    <TouchableOpacity
      key={i}
      style={{
        // width: 50,
        height: 50,
        marginHorizontal: 5,
        borderRadius: 10,
        marginRight: 10,
        backgroundColor: "rgba(255,255, 255, 0.1)",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
      onPress={() => onShare(previewRef, item.id, state.aspectRatio)}
    >
      <Text
        style={{
          color: "white",
        }}
      >
        {item.title}
      </Text>
      {/* <Item editor={true} /> */}
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
          //   backgroundColor: 'red',
          width: viewportWidth,
          justifyContent: "flex-end",
        }}
        showsHorizontalScrollIndicator={false}
      >
        {options.map(renderItem)}
      </ScrollView>
      {/* <Text style={styles.title}>{state.title}</Text> */}

      {/* <Slider value={state.radius} onValueChange={onRadiusChange} /> */}
    </View>
  );
};

export default Share;
