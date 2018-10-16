import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class Profile extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };
  componentDidMount() {
    // Used to observe values being passed to ProfileScreen
    console.log(JSON.stringify(this.props.navigation.state.params));
  }
  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      role
    } = this.props.navigation.state.params;

    // mockData can be used to speed up development (1. Switch initialRouteName to 'Profile' in App.js 2. Use variables from mockData rather than navigation.state.params)
    // const mockData = {
    //   firstName: "Sam",
    //   lastName: "Kane",
    //   email: "sam@kenzie.academy",
    //   password: "sam",
    //   phone: "4815162348",
    //   role: "Studio Developer"
    // };

    // const { firstName, lastName, email, phone, role } = mockData;

    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/placeholder.png")}
          style={styles.image}
        />
        <Text style={styles.text}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.text}>{role}</Text>
        <Text style={styles.text}>{email}</Text>
        <Text style={styles.text}>{phone}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    borderRadius: 5
  },
  text: {
    fontSize: 20,
    marginVertical: 5
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 5
  }
});
