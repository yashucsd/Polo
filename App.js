import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import MapView from 'react-native-maps';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth =  Dimensions.get('window').width;

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude:       0,
        longitude:      0,
        latitudeDelta:  0,
        longitudeDelta: 0,
      },
    };
  }

  componentDidMount() {
    this.watch = navigator.geolocation.watchPosition((position) => {
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
      this.onRegionChange(region, region.latitude, region.longitude);
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watch);
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      region: region,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange.bind(this)}
          showUserLocation={true}
          followsUserLocation={true}
        />
        <Text style={styles.header}>Polo by MARCO</Text>
        <Text>{ activityList[1].title }</Text>
        <View>
          <FlatList
            data={ activityList }
            renderItem={({ item }) => (
              <View>
                <Text>{item.emoji}</Text>
                <Text>{item.title}</Text>
                <Text>{
                  new Date(Date.now() - 
                  Number(item.time))
                  // (new Date(Date.now() - Number(item.time))).getMonth()
                }</Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

class ActivityListElement extends Component {
  render() {
    return (
      <View style={styles.activityListElement}>
        {/*<Text>{this.props.data}</Text>*/}
        {/*<Text>Yash {this.props.data}</Text>*/}
        <Text>{this.props.data.key}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  map: {
    height: deviceHeight,
    width: deviceWidth,
  },
  activityListElement: {
    // color: '#000',
  }
});

const activityList = [
  {
    emoji: '🏓',
    title: 'Ping Pong',
    time: 1510854138,
  },
  {
    emoji: '🥐',
    'title': 'Breakfast',
    time: 1510854138,
  },
  {
    emoji: '🏓',
    title: 'Ping Pong',
    time: 1510854138,
  },
];