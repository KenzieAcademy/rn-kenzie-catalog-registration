import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

export default ({ children }) => {
  return (
    <ImageBackground
      source={require("../assets/ka.png")}
      style={styles.backgroundContainer}
      imageStyle={styles.backgroundImage}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  }
});
