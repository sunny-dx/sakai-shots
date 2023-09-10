import { LinearGradient } from "expo-linear-gradient";
import { viewportWidth } from "../../constants";
import { useGlobalContext } from "../../GlobalContext";

const Gradient1 = ({ editor, width }) => {
  const [state, dispatch] = useGlobalContext();

  return (
    <LinearGradient
      colors={["#D16BA5", "#86A8E7", "#5FFBF1"]}
      style={{
        width: editor ? "100%" : width,
        aspectRatio: editor ? 1 : state.aspectRatio,
        position: "absolute",
        top: 0,
      }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    />
  );
};

const Gradient2 = ({ editor, width }) => {
  const [state, dispatch] = useGlobalContext();

  return (
    <LinearGradient
      colors={["#cb2d3e", "#ef473a"]}
      style={{
        width: editor ? "100%" : width,
        aspectRatio: editor ? 1 : state.aspectRatio,
        position: "absolute",
        top: 0,
      }}
    />
  );
};

const Gradient3 = ({ editor, width }) => {
  const [state, dispatch] = useGlobalContext();

  return (
    <LinearGradient
      colors={["#DB17F9", "#1869FF", "#5FFBF1"]}
      style={{
        width: editor ? "100%" : width,
        aspectRatio: editor ? 1 : state.aspectRatio,
        position: "absolute",
        top: 0,
      }}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    />
  );
};

const Gradient4 = ({ editor, width }) => {
  const [state, dispatch] = useGlobalContext();

  return (
    <LinearGradient
      colors={["#4158D0", "#C850C0", "#FFCC70"]}
      style={{
        width: editor ? "100%" : width,
        aspectRatio: editor ? 1 : state.aspectRatio,
        position: "absolute",
        top: 0,
      }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    />
  );
};
const Gradient5 = ({ editor, width }) => {
  const [state, dispatch] = useGlobalContext();

  return (
    <LinearGradient
      colors={["#85FFBD", "#FFFB7D"]}
      style={{
        width: editor ? "100%" : width,
        aspectRatio: editor ? 1 : state.aspectRatio,
        position: "absolute",
        top: 0,
      }}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    />
  );
};
const Gradient6 = ({ editor, width }) => {
  const [state, dispatch] = useGlobalContext();

  return (
    <LinearGradient
      colors={["#8EC5FC", "#E0C3FC"]}
      style={{
        width: editor ? "100%" : width,
        aspectRatio: editor ? 1 : state.aspectRatio,
        position: "absolute",
        top: 0,
      }}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    />
  );
};

export default [
  Gradient1,
  Gradient2,
  Gradient3,
  Gradient4,
  Gradient5,
  Gradient6,
];
