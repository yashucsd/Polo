import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogIn from './logInScreen.js';
import SignUp from './signUpScreen.js';
import SignUpComplete from './signUpCompleteScreen.js';
import Home from './tempHomeScreen.js';


const RootNavigator = StackNavigator({
  
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
