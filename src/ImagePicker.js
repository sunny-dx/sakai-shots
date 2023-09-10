import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import * as MediaPicker from "expo-image-picker";
import { useGlobalContext } from "../GlobalContext";
import { viewportWidth } from "../constants";

const Picker = ({ onPress }) => {
  const [state, dispatch] = useGlobalContext();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        padding: 20,
        borderRadius: 20,
        // margin: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 15,
        }}
      >
        Click here to add your image
      </Text>
    </TouchableOpacity>
  );
};

const getSize = (url) =>
  new Promise((resolve) => {
    Image.getSize(url, (width, height) =>
      resolve({
        width,
        height,
      })
    );
  });

export default function ImagePicker({ scale }) {
  const [image, setImage] = useState(null);
  const [imageStyle, setStyle] = useState({
    aspectRatio: 1,
  });
  const [state, dispatch] = useGlobalContext();

  const pickImage = async () => {
    await MediaPicker.requestMediaLibraryPermissionsAsync();
    let result = await MediaPicker.launchImageLibraryAsync({
      mediaTypes: MediaPicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      //   allowsEditing: true,
      //   aspect: [4, 3],
      //   quality: 1,
    });
    if (!result.canceled) {
      let {
        uri: image,
        width: imageWidth,
        height: imageHeight,
      } = result.assets[0];
      // if (!imageHeight || !imageWidth) {
      //   const { width, height } = await getSize(result.assets[0].uri);
      //   imageWidth = width;
      //   imageHeight = height;
      // }
      dispatch({
        type: "IMAGE",
        payload: {
          image,
          imageRatio: imageWidth / imageHeight,
          imageWidth,
          imageHeight,
        },
      });
    }
  };

  return (
    <TouchableOpacity
      style={[
        {
          elevation: state.shadow * 40,
          borderRadius: state.radius * 50 * scale,
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.7,
          shadowRadius: state.shadow * 40,
          // width: "100%",
          // backgroundColor: "red",
        },
        ...Platform.select({
          web: (() => {
            const style = {};
            if (state.imageWidth > state.imageHeight) {
              style.width = "-webkit-fill-available";
            } else if (state.imageHeight && state.imageWidth) {
              style.height = "-webkit-fill-available";
            }
            return [style];
          })(),
          android: [],
        }),
      ]}
      onPress={pickImage}
    >
      {state.image ? (
        <Image
          source={{
            uri: state.image,
          }}
          style={{
            width: "100%",
            height: "100%",
            aspectRatio: state.imageRatio,
            borderRadius: state.radius * 50 * scale,
            // margin: -10
          }}
          resizeMode="contain"
        />
      ) : (
        <Picker onPress={pickImage} />
      )}
    </TouchableOpacity>
  );
}
