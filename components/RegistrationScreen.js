import React from "react";
import { View, TextInput, Text, StyleSheet, Button } from "react-native";
import PickerSelect from "react-native-picker-select";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";

import Input from "./Input";

export default class RegistrationScreen extends React.Component {
  static navigationOptions = {
    title: "Register"
  };

  render() {
    const RegistrationSchema = Yup.object().shape({
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(3)
        .required(),
      phone: Yup.string().required(),
      role: Yup.string("").required()
    });

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
          validationSchema={RegistrationSchema}
          onSubmit={values => {
            console.log(JSON.stringify(values));
            this.props.navigation.navigate("Profile", values);
          }}
        >
          {({
            handleSubmit,
            values,
            setFieldValue,
            setFieldTouched,
            errors,
            touched,
            isValid
          }) => (
            <React.Fragment>
              <Input
                name="firstName"
                label="First Name"
                value={values.firstName}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                placeholder="John"
                error={touched.firstName && errors.firstName}
              />
              <Input
                name="lastName"
                label="Last Name"
                value={values.lastName}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                placeholder="Doe"
                error={touched.lastName && errors.lastName}
              />
              <Input
                name="email"
                label="Email"
                value={values.email}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                placeholder="john@email.com"
                error={touched.email && errors.email}
                keyboardType="email-address"
              />
              <Input
                name="password"
                label="Password"
                value={values.password}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                placeholder="password"
                error={touched.password && errors.password}
                secureTextEntry
              />
              <Input
                name="phone"
                label="Phone"
                value={values.phone}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                placeholder="481-516-2342"
                error={touched.phone && errors.phone}
                keyboardType="number-pad"
              />
              <Text style={styles.labelStyle}>Role</Text>
              <PickerSelect
                name="role"
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
                placeholder={{ label: "Select a role...", value: "" }}
                onValueChange={value => setFieldValue("role", value)}
                onDonePress={() => setFieldTouched("role")}
                style={{ ...pickerSelectStyles }}
              />

              {touched.role ? (
                <Text style={styles.errorStyle}>{errors.role}</Text>
              ) : null}

              <Button disabled={false} title="Submit" onPress={handleSubmit} />
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
  errorStyle: {
    color: "red"
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
