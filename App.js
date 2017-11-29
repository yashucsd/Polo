import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import Modal from 'react-native-modal'; //Need to npm install react-native-modal --save
import ActivityDetails from './ActivityDetails.js';
//import ShareActivity from './ShareActivity.js';

export default class App extends React.Component {
  render() {
    return (
      <ActivityDetails/>
    );
  }
}

