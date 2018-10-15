import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Button,
  Alert
} from "react-native";
import PickerSelect from "react-native-picker-select";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";

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
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phone: "",
            role: ""
          }}
          onSubmit={values => {
            console.log(JSON.stringify(values));
            this.props.navigation.navigate("Profile", values);
          }}
        >
          {({ handleChange, handleSubmit, values, setFieldValue }) => (
            <React.Fragment>
              <Text style={styles.labelStyle}>First Name</Text>
              <TextInput
                value={values.firstName}
                onChangeText={handleChange("firstName")}
                placeholder="John"
                style={styles.textInputStyle}
              />
              <Text style={styles.labelStyle}>Last Name</Text>
              <TextInput
                value={values.lastName}
                onChangeText={handleChange("lastName")}
                placeholder="Doe"
                style={styles.textInputStyle}
              />
              <Text style={styles.labelStyle}>Email</Text>
              <TextInput
                value={values.email}
                onChangeText={handleChange("email")}
                placeholder="john@email.com"
                keyboardType="email-address"
                style={styles.textInputStyle}
              />
              <Text style={styles.labelStyle}>Password</Text>
              <TextInput
                value={values.password}
                onChangeText={handleChange("password")}
                placeholder="password"
                style={styles.textInputStyle}
                secureTextEntry
              />
              <Text style={styles.labelStyle}>Phone</Text>
              <TextInput
                value={values.phone}
                onChangeText={handleChange("phone")}
                placeholder="481-516-2342"
                keyboardType="number-pad"
                style={styles.textInputStyle}
              />
              <Text style={styles.labelStyle}>Role</Text>
              <PickerSelect
                value={values.role}
                items={[
                  {
                    label: "Student",
                    value: "Student"
                  },
                  {
                    label: "Instructor",
                    value: "Instructor"
                  },
                  {
                    label: "Studio Developer",
                    value: "Studio Developer"
                  },
                  {
                    label: "Operations / Recruitment",
                    value: "Operations / Recruitment"
                  },
                  {
                    label: "Our Fearless Leader - Chok",
                    value: "Our Fearless Leader - Chok"
                  }
                ]}
                onValueChange={value => setFieldValue("role", value)}
                style={{ ...pickerSelectStyles }}
              />

              <Button title="Submit" onPress={handleSubmit} />

              {/* TODO: possible image upload */}
            </React.Fragment>
          )}
        </Formik>
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
