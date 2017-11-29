import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hosting from './Hosting.js';
import {Autocomplete} from "./Hosting";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Hosting/>
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
