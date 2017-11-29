import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogIn from './logInScreen.js';
import SignUp from './signUpScreen.js';
import SignUpComplete from './signUpCompleteScreen.js';
import Map from './map.js';


const RootNavigator = StackNavigator({
  
  MapScreen: {
    screen: Map,
  },
  LogInScreen: {
    screen: LogIn,
    navigationOptions: {
      headerTitle: 'Log In',
    },
  },

  SignUpScreen: {
    screen: SignUp,
    navigationOptions: {
      headerTitle: 'Sign Up',
    },
  },

  SignUpCompleteScreen: {
    screen: SignUpComplete,
    navigationOptions: {
      headerTitle: 'Sign Up Complete',
    },
  },

  HomeScreen: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
});

export default RootNavigator;
