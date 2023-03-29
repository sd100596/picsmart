import { StyleSheet } from "react-native";
import React from "react";
import { ImageViewer } from "react-native-image-zoom-viewer";

const images = [
  {
    url: "https://fastly.picsum.photos/id/603/1280/1920.jpg?hmac=6eM4qpWLl6vSVSXLHBjFGLbRLbsE1AenC6fzxADPy60",
    props: {},
  },
];

export default function ImageModal() {
  return (
    <ImageViewer
      style={styles.container}
      imageUrls={images}
      renderIndicator={() => null}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
