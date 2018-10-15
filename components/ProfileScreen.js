import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Profile extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };
  componentDidMount() {
    console.log(JSON.stringify(this.props.navigation.state.params));
  }
  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      role
    } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Text>{firstName}</Text>
        <Text>{lastName}</Text>
        <Text>{email}</Text>
        <Text>{password}</Text>
        <Text>{phone}</Text>
        <Text>{role}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
