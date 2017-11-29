import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import getDirections from 'react-native-google-maps-directions'; //npm install --save react-native-google-maps-directions

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
      <Button
        title="Get Directions"
        color="blue"
        onPress={() => this.handleGetDirections(this.activity_location.latitude,
                                                this.activity_location.longitude)}
      />
    )
  }
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
   },
})