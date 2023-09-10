import html2canvas from "html2canvas";
import DomToImage from "dom-to-image";

const getQuality = (quality, aspectRatio) => {
  switch (quality) {
    case "high":
      return 1;
    case "medium":
      return 0.7;
  }
};

async function onShare(previewRef, quality) {
  try {
    const fileName = `Pretty-Shots-${Date.now()}.jpg`;
    console.log(previewRef.current);
    const canvas = await html2canvas(previewRef.current, {
      scale: 1,
      //   dpi: 400,
    });
    const imageBase64 = canvas.toDataURL("image/jpeg", getQuality(quality));
    console.log(imageBase64);
    const blob = await (await fetch(imageBase64)).blob();
    // const blob = await DomToImage.toBlob(previewRef.current);
    const file = new File([blob], fileName, { type: blob.type });
    await navigator.share({
      //   title: "Hello",
      //   text: "Check out this image!",
      files: [file],
    });
  } catch (err) {
    console.trace(err);
  }
}
export default onShare;
