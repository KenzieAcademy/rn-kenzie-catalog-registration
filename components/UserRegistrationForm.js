import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import Background from "./Background";

export default class UserRegistrationForm extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.formStyle} behavior="padding">
        <ScrollView>
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

          {/* TODO: add picker for Date of Birth here */}
          {/* TODO: possible additional picker */}
          {/* TODO: possible image upload */}
        </ScrollView>
      </KeyboardAvoidingView>
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
