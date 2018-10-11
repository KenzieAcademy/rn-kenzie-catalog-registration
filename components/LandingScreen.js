import React from "react";
import { Image, Text, View, StyleSheet, Button } from "react-native";

export default class LandingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Kenzie Catalog</Text>
        <Image source={require("../assets/ka-teal.png")} style={styles.image} />
        <Button title="Register" onPress={() => {}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  welcome: {
    fontSize: 20
  },
  image: {
    width: 200,
    height: 200
    // resizeMode: "cover"
  }
});
