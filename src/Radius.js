import { Slider } from "@miblanchard/react-native-slider";
import React from "react";
import { View } from "react-native";
import { viewportWidth } from "../constants";
import { useGlobalContext } from "../GlobalContext";

const Radius = () => {
  const [state, dispatch] = useGlobalContext();
  const onRadiusChange = (radius) => {
    dispatch({
      type: "RADIUS",
      payload: { radius },
    });
  };
  return (
    <View
      style={{
        width: viewportWidth,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
      }}
    >
      {/* <Text style={styles.title}>{state.title}</Text> */}
      <Slider value={state.radius} onValueChange={onRadiusChange} />
    </View>
  );
};

export default Radius;
