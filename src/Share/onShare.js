import { captureRef } from "react-native-view-shot";
import Sharing from "react-native-share";

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
const onShare = async (previewRef, quality, aspectRatio) => {
  try {
    const { width, height } = getQualityResolution(quality, aspectRatio);
    const uri = await captureRef(previewRef, {
      fileName: `Creative-Shots-${Date.now()}`,
      width,
      height,
    });
    await Sharing.open({ url: uri });
  } catch (err) {}
};
export default onShare;
