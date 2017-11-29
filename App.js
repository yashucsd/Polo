import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Map from './Map.js';
import profileScreen from './profileScreen.js';

const navigationContainer = StackNavigator({

  Map: {
  	screen: Map,
  	navigationOptions:{
  		title: 'Map',
  	},
  },

  profileScreen: {
  	screen: profileScreen,
  	navigationOptions:{
  		title: 'Profile Screen',
  	},
  },

});

export default navigationContainer;
