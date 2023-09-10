import { Slider } from "@miblanchard/react-native-slider";
import React from "react";
import { View } from "react-native";
import { viewportWidth } from "../constants";
import { useGlobalContext } from "../GlobalContext";

const Shadow = () => {
  const [state, dispatch] = useGlobalContext();
  const onShadowChange = (shadow) => {
    dispatch({
      type: "SHADOW",
      payload: { shadow },
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
      <Slider value={state.shadow} onValueChange={onShadowChange} />
    </View>
  );
};

export default Shadow;
