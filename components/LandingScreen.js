import React from "react";
import { Image, Text, View, StyleSheet, Button } from "react-native";

export default class LandingScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Kenzie Catalog</Text>
        <Image source={require("../assets/ka-teal.png")} style={styles.image} />
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate("Register")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  welcome: {
    fontSize: 20
  },
  image: {
    width: 200,
    height: 200
  }
});
