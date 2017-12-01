import React, { Component } from 'react';
import { Image, TouchableOpacity, TouchableHighlight, Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Modal from 'react-native-modal';
import {StackNavigator} from "react-navigation"
import emoji from 'node-emoji';
import markersData from './markers.js';
import Hosting from './Hosting.js';
import renderIf from './renderIf';


const {width, height} = Dimensions.get('window');
circleSize = Math.round(width/7)
var markers2 = JSON.parse(markersData.test);

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      region: {
        latitude: 32.8804,
        longitude: -117.2375,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
      },
      
      markers:[
        {
          latlng: {latitude: 32.8804, longitude: -117.2375},
          title: "Geisel Library", description: "Come study!", image: "books"
        },
        {
          latlng: {latitude: 32.884, longitude: -117.2381},
          title: "RIMAC", description: "Playing basketball", image: "basketball"
        },
        {
          latlng: {latitude: 32.8801, longitude: -117.2340},
          title: "Warren Dorms", description: "Playing video games", image: "video_game"
        }, 
        {
          latlng: {latitude: 32.8803, longitude: -117.241},
          title: "Marshall College", description: "Walking my dog!", image: "dog"
        }, 
      ] // end of markers
    }; // end of this.state
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  activityCreation(){
    /* after first activity creation, will need to tap twice
     * to create more activities, b/c when activityModule closes itself
     * the map doesn't if that happens or not
     */
    //start flow for creating an activity
    this.setState({status: !this.state.status});
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
  )

  render() {
    return (
      <View style={styles.container}>
        {renderIf(this.state.status)(<Hosting/>)}
        {/* Setting attributes for the MapView */}
	      <MapView style={styles.map}
          mapType="standard"
          showsUserLocation={true}
          showsCompass={true}
          showsPointsOfInterest={true}
          showsMyLocationButton={true}
          toolbarEnabled={true}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >
		
        {/* Information for each marker is used to create them 
            (Child of MapView) */}
        {this.state.markers.map((marker, i) => (
          <MapView.Marker
            key={i}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}>

            {/* This is a custom view to show an emoji and its BG 
                (Child of MapView.Marker) */}
            <View style={styles.markerBG}>
              <Text style={styles.markerEmoji}>{emoji.get(marker.image)}</Text>
            </View>

          </MapView.Marker>
        ))}

        </MapView>
	
       {/*<View style ={{position: 'absolute', flexDirection: 'row', top: -75}}>
          {this._renderImage(image = require('./pictures/realplus.png'), () => this.setState({ visibleModal: 1 }))}
          {this._renderImage(image = require('./pictures/realprofile.png'), () => this.props.navigation.navigate('UserPreferenceScreen'))}
        </View>

        <Modal isVisible={this.state.visibleModal === 1}>{this._renderModalContent()}</Modal>*/}
	  <View style = {{flex: 1, position: 'absolute'}}></View>

	  <View style = {{flexDirection: 'row', position: 'absolute'}}>
	    <TouchableOpacity style = {styles.circle} onPress={() => this.activityCreation()}>
	      <Text>+</Text>
	    </TouchableOpacity>
	    
	    <Text style = {{width: Math.floor(width*.71)}}> </Text>

	    <TouchableOpacity style = {styles.circle}
      	      onPress={() => this.props.navigation.navigate('UserPreferenceScreen')}>

	      <Image 
	        style = {styles.circleImage} 
	        source = {require('./pictures/realprofile.png')}
	      />
	    </TouchableOpacity>

	  </View>

	  <View style = {{flex: 5}}></View>
  	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
  },
  header: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: -1,
  },
  markerBG: {
    backgroundColor: 'rgba(52, 52, 52, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    height: 60,
    width: 60, 
    padding: 5,
    borderRadius: 30,
  },
  markerEmoji: {
    fontSize: 30,
    color: 'black'
  },
  circle:{
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    width:circleSize,
    height:circleSize,
    borderRadius:circleSize,
    borderColor: 'white',
    backgroundColor: '#fff' 
  },
  circleImage:{
    borderWidth:1,
    width:circleSize,
    height:circleSize,
    borderRadius:circleSize,
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
