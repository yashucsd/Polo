import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 13.761,
        longitude: 100.2,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      },
      markers:[
        {
          latlng: {latitude: 13.76, longitude: 100.2},
          title: "Victory Monument", description: "A large monument"
        },
        {
          latlng: {latitude: 13.763681, longitude: 100.2},
          title: "Second Marker", description: "Pin number 2s"
        },
        {
          latlng: {latitude: 13.763681, longitude: 100.2},
          title: "Third Marker", description: "Pin number 3 same as 2"
        }, 
        {
          latlng: {latitude: 13.764081, longitude: 100.2005},
          title: "Fourth Marker", description: "This is the fourth pin"
        }, 
      ]
    };
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          mapType="standard"
          
          /*showsUserLocation={true}
          //followsUserLocation{true} 
          showsCompass={false}
          showsPointsOfInterest={false}*/
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >
        {this.state.markers.map((marker, i) => (
          <MapView.Marker
            key={i}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))}
          
        </MapView>
        <View style={styles.container}>
          <Text style={styles.header}>
            Latitude: {this.state.region.latitude}{'\n'}
            Longitude: {this.state.region.longitude}{'\n'}
            LatitudeDelta: {this.state.region.latitudeDelta}{'\n'}
            LongitudeDelta: {this.state.region.longitudeDelta}
          </Text>
        </View>
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
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  map: {
    width: Dimensions.get('window').width,
    height: 400,
  }
});
