import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

export default class Input extends React.Component {
  _handleChange = value => {
    this.props.onChange(this.props.name, value);
  };
  _handleTouch = () => {
    this.props.onTouch(this.props.name);
  };

  render() {
    const { label, error, placeholder, ...rest } = this.props;
    const { labelStyle, textInputStyle, errorStyle } = styles;
    return (
      <View>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          style={textInputStyle}
          onChangeText={this._handleChange}
          onBlur={this._handleTouch}
          placeholder={placeholder}
          {...rest}
        />
        {error && <Text style={errorStyle}>{error}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  },
  errorStyle: {
    color: "red"
  }
});
