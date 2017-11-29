import React, { Component } from 'react';
import { AppRegistry, Button, Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
var {height, width} = Dimensions.get('window');
import MapView from 'react-native-maps';
import Modal from 'react-native-modal';
import {StackNavigator} from "react-navigation";


export default class mapScreen extends React.Component {

  constructor(){
    super();
    this.state = {
      visibleModal: null,
    }
  }

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderImage = (image, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Image 
          source = {image}
          style = {styles.image}
        />
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Insert Activity Creation</Text>
      {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
    </View>
  );

  render() {

    return(

      //basic map code
      <View style={styles.container}>

        <MapView style={styles.map} initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>
        </MapView>

        <View style ={{position: 'absolute', flexDirection: 'row', top: -75}}>

          {this._renderImage(image = require('./pictures/realplus.png'), () => this.setState({ visibleModal: 1 }))}
          {this._renderImage(image = require('./pictures/realprofile.png'), () => this.props.navigation.navigate('profileScreen'))}
          
        </View>

          <Modal isVisible={this.state.visibleModal === 1}>{this._renderModalContent()}</Modal>

        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: -1,
  },
  button: {
    padding: 12,
    margin: 85,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  image:{
    height: 50,
    width: 50,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
