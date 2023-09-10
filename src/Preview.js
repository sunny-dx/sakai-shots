import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { viewportHeight, viewportWidth } from "../constants";
import { Canvas, Circle, Group } from "@shopify/react-native-skia";
import { useGlobalContext, usePreviewRef } from "../GlobalContext";
import { LinearGradient } from "expo-linear-gradient";
import ImagePicker from "./ImagePicker";
import * as MediaPicker from "expo-image-picker";

const HelloWorld = () => {
  const size = 256;
  const r = size * 0.33;
  return (
    <Canvas style={{ flex: 1 }}>
      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={size - r} cy={r} r={r} color="magenta" />
        <Circle cx={size / 2} cy={size - r} r={r} color="yellow" />
      </Group>
    </Canvas>
  );
};

const Preview = ({ scale, exportable }) => {
  const [state, dispatch] = useGlobalContext();
  const previewRef = usePreviewRef();
  return (
    <View
      style={{
        height: viewportHeight * scale - 200,
        // backgroundColor: "red",
        width: viewportWidth * scale,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <View
        style={{
          borderRadius: 10,
          overflow: "hidden",
          borderWidth: 2,
          borderColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <View
          style={{
            width: viewportWidth * scale - 30,
            minHeight: 100,
            backgroundColor: "grey",
            aspectRatio: state.aspectRatio,
            padding: state.padding * 50 * scale,
            alignItems: "center",
            justifyContent: "center",
          }}
          {...(exportable ? { ref: previewRef } : {})}
        >
          <state.background width={viewportWidth * scale} />
          <ImagePicker scale={scale} />
        </View>
      </View>
      {/* <ImageMenu /> */}
    </View>
  );
};

export default Preview;
