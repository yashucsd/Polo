import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogIn from './logInScreen.js';
import SignUp from './signUpScreen.js';
import SignUpComplete from './signUpCompleteScreen.js';
import Map from './Map.js';
import UserPreference from './userPreferenceScreen.js';

const RootNavigator = StackNavigator({
  
  MapScreen:{
    screen: Map,
    navigationOptions: { header: null },
  },
  LogInScreen: {
    screen: LogIn,
  },

  SignUpScreen: {
    screen: SignUp,
  },

  SignUpCompleteScreen: {
    screen: SignUpComplete,
  },

  UserPreferenceScreen: {
    screen: UserPreference,
  },
});

export default RootNavigator;
