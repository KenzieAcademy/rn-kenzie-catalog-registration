import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Button
} from "react-native";

export default class RegistrationScreen extends React.Component {
  static navigationOptions = {
    title: "Register"
  };
  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView style={styles.formStyle} behavior="padding">
          <Text style={styles.labelStyle}>First Name</Text>
          <TextInput placeholder="John" style={styles.textInputStyle} />
          <Text style={styles.labelStyle}>Last Name</Text>
          <TextInput placeholder="Doe" style={styles.textInputStyle} />
          <Text style={styles.labelStyle}>Email</Text>
          <TextInput
            placeholder="john@email.com"
            style={styles.textInputStyle}
          />
          <Text style={styles.labelStyle}>Password</Text>
          <TextInput
            placeholder="password"
            style={styles.textInputStyle}
            secureTextEntry
          />
          <Button
            title="Submit"
            onPress={() => this.props.navigation.navigate("Profile")}
          />
          {/* View is here to add some additional between keyboard and final input */}
          <View style={{ height: 60 }} />

          {/* TODO: add picker for Date of Birth here */}
          {/* TODO: possible additional picker */}
          {/* TODO: possible image upload */}
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  formStyle: {
    backgroundColor: "#fafafa",
    margin: 20,
    padding: 20,
    borderRadius: 5
  },
  labelStyle: {
    marginTop: 10
  },
  textInputStyle: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    padding: 5
  }
});
