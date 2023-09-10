import { Slider } from "@miblanchard/react-native-slider";
import React from "react";
import { View } from "react-native";
import { viewportWidth } from "../constants";
import { useGlobalContext } from "../GlobalContext";

const Padding = () => {
  const [state, dispatch] = useGlobalContext();
  const onPaddingChange = (padding) => {
    dispatch({
      type: "PADDING",
      payload: { padding },
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
      <Slider minimumValue={0.05} value={state.padding} onValueChange={onPaddingChange} />
    </View>
  );
};

export default Padding;
