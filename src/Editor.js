import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { EditorHeight, viewportWidth } from "../constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useEditorRef, useGlobalContext } from "../GlobalContext";

const options = [
  {
    id: "radius",
    title: "Radius",
    icon: "rounded-corner",
  },
  {
    id: "shadow",
    title: "Shadow",
    icon: "box-shadow",
  },
  {
    id: "padding",
    title: "Padding",
    icon: "border-all-variant",
  },
  {
    id: "background",
    title: "Background",
    icon: "image-multiple",
  },
  {
    id: "ratio",
    title: "Aspect Ratio",
    icon: "aspect-ratio",
  },
  {
    id: "share",
    title: "Share",
    icon: "share-variant-outline",
  },
];

const Editors = {
  radius: Radius,
  padding: Padding,
  shadow: Shadow,
  background: Background,
  ratio: AspectRatio,
  share: Share,
};

const styles = StyleSheet.create({});

const Options = () => {
  const editorRef = useEditorRef();
  return (
    <View
      style={{
        height: 150,
        // paddingHorizontal: 20,
        justifyContent: "flex-end",
        justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "red",
      }}
    >
      <FlatList
        ref={editorRef}
        style={{
          width: viewportWidth,
        }}
        // contentContainerStyle={{
        //   width: viewportWidth,
        // }}
        horizontal
        scrollEnabled={false}
        snapToAlignment="start"
        snapToInterval={viewportWidth}
        data={options}
        renderItem={({ item }) => {
          const Editor = Editors[item.id];
          return <Editor />;
        }}
      />
    </View>
  );
};

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Radius from "./Radius";
import Padding from "./Padding";
import Background from "./Background";
import Shadow from "./Shadow";
import AspectRatio from "./AspectRatio";
import Share from "./Share/Share";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          title: "",
          headerShown: false,
        }}
        tabBar={TabComponent}
        sceneContainerStyle={{
          maxHeight: 200,
          backgroundColor: "red",
          position: "absolute",
          bottom: 0,
          width: viewportWidth,
        }}
      >
        <Tab.Screen name="Home" component={Options} options={{}} />
        <Tab.Screen name="Settings" component={Options} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const TabBar = (props) => {
  const [state, dispatch] = useGlobalContext();
  const editorRef = useEditorRef();

  return (
    <View
      style={{
        borderTopWidth: 2,
        // paddingTop: 10,
        borderTopColor: "rgba(255, 255, 255, 0.05)",
        // backgroundColor: "green",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: viewportWidth,
      }}
    >
      {options.map((item, i) => {
        return (
          <TouchableOpacity
            key={item.id}
            style={{
              alignItems: "center",
              opacity: state.activeTab === item.id ? 1 : 0.3,
            }}
            onPress={() => {
              console.log(
                "onPress",
                i,
                editorRef.current.scrollToIndex({ index: i, animated: false })
              );
              dispatch({
                type: "TAB",
                payload: {
                  tab: item.id,
                  title: item.title,
                },
              });
            }}
          >
            <MaterialCommunityIcons name={item.icon} color="white" size={25} />
            <Text
              style={{
                color: "white",
                fontSize: 12,
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Editor = () => {
  const [state, dispatch] = useGlobalContext();
  return (
    <>
      {/* <LinearGradient
        // Background Linear Gradient
        colors={["transparent", "black", "black"]}
        style={{
          width: viewportWidth,
          height: 200,
          position: "absolute",
          bottom: 0,
          zIndex: 2,
        }}
      /> */}
      {/* <MyTabs /> */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
        }}
      >
        <Options />
        <TabBar />
      </View>
      {/* <TabBar /> */}
    </>
  );
};

export default Editor;
