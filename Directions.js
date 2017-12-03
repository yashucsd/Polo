import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import getDirections from 'react-native-google-maps-directions'; //npm install --save react-native-google-maps-directions

const BORDER_RADIUS = 10;

export default class Directions extends React.Component{
  //Will get location coords from JSON object later
  activity_location = {
  //Geisel
    latitude: 32.881,
    longitude: -117.237,
  }

  //getDirections takes a data object containing source, destination, and params.
  handleGetDirections = (dest_latitude,dest_longitude) => {
    const data = {
      destination: {
        latitude: dest_latitude,
        longitude: dest_longitude
      },
      params: [
        {
          key: "dirflg",
          value: "w"
        }
      ]
    }
    getDirections(data)
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.handleGetDirections(this.activity_location.latitude,
                                                this.activity_location.longitude)}
      >
        <Text style={styles.text}>Get Directions</Text>
      </TouchableOpacity>


    )
  }
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
   },
   button: {
     backgroundColor: '#058EFA',
     borderRadius: BORDER_RADIUS,
     height: 40,
     width: 165,
     alignItems: 'center',
   },
   text: {
     color: '#FFFFFF',
     paddingTop: 10,
   },
   roundedButton: {
     borderRadius: BORDER_RADIUS,
   }
})