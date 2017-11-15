import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LogIn} from './logInScreen.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LogIn/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  }
});
