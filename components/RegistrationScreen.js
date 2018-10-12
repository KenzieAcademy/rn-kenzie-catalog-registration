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

import PickerSelect from "react-native-picker-select";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class RegistrationScreen extends React.Component {
  static navigationOptions = {
    title: "Register"
  };
  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.formStyle}
        resetScrollToCoords={{ x: 0, y: 0 }}
      >
        <Text style={styles.labelStyle}>First Name</Text>
        <TextInput placeholder="John" style={styles.textInputStyle} />
        <Text style={styles.labelStyle}>Last Name</Text>
        <TextInput placeholder="Doe" style={styles.textInputStyle} />
        <Text style={styles.labelStyle}>Email</Text>
        <TextInput
          placeholder="john@email.com"
          keyboardType="email-address"
          style={styles.textInputStyle}
        />
        <Text style={styles.labelStyle}>Password</Text>
        <TextInput
          placeholder="password"
          style={styles.textInputStyle}
          secureTextEntry
        />
        <Text style={styles.labelStyle}>Phone</Text>
        <TextInput
          placeholder="481-516-2342"
          keyboardType="number-pad"
          style={styles.textInputStyle}
        />
        <Text style={styles.labelStyle}>Role</Text>
        <PickerSelect
          items={[
            {
              label: "Student",
              value: 1
            },
            {
              label: "Instructor",
              value: 2
            },
            {
              label: "Studio Developer",
              value: 3
            },
            {
              label: "Operations / Recruitment",
              value: 4
            },
            {
              label: "Our Fearless Leader - Chok",
              value: 5
            }
          ]}
          onValueChange={() => {}}
          style={{ ...pickerSelectStyles }}
        />

        <Button
          title="Submit"
          onPress={() => this.props.navigation.navigate("Profile")}
        />

        {/* TODO: possible image upload */}
      </KeyboardAwareScrollView>
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    color: "black"
  }
});
