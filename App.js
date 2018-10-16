import React from "react";
import { createStackNavigator } from "react-navigation";

import RegistrationForm from "./components/RegistrationScreen";
import LandingScreen from "./components/LandingScreen";
import ProfileScreen from "./components/ProfileScreen";

const RootStack = createStackNavigator(
  {
    Home: LandingScreen,
    Register: RegistrationForm,
    Profile: ProfileScreen
  },
  { initialRouteName: "Home" }
);

export default () => <RootStack />;
