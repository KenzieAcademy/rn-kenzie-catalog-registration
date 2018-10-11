import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UserRegistrationForm from "./components/UserRegistrationForm";
import LandingScreen from "./components/LandingScreen";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <UserRegistrationForm /> */}
        <LandingScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#00356B",
    justifyContent: "center",
    alignItems: "center"
  }
});
