import { Dimensions } from "react-native";

const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get("window");

const EditorHeight = viewportHeight * 0.3;

export { EditorHeight, viewportHeight, viewportWidth };
