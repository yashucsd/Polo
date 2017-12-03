import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import MapView from 'react-native-maps';
import moment from 'moment';

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
        <View style={styles.list}>
          <FlatList
            data={ activityList }
            renderItem={({ item }) => (
              <View style={styles.activityListElement}>
                <Text style={styles.activityEmoji}>{item.emoji}</Text>
                <View style={styles.activityInfo}>
                  <Text style={styles.activityTitle}>{item.title}</Text>
                  <Text>{moment(item.startTime).fromNow()}</Text>
                </View>
              </View>
            )}
          />
        </View>
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
  list: {
    padding: 10,
    alignItems: "flex-start",
    flexDirection: "row",
    height: 500,
  },
  activityListElement: {
    margin: 5,
    paddingTop: 5,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  activityEmoji: {
    fontSize: 20,
  },
  activityInfo: {
    marginLeft: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    width: deviceWidth - 80,
    paddingBottom: 5,
  },
  activityTitle: {
    fontWeight: "bold",
  },
  activityTime: {
    fontSize: 9,
    fontWeight: "100",
  } 
});

const activityList = [
  {
    activityId: 19230123,
    startTime: "2017-12-03 09:30",
    categoryId: 2,
    emoji: '⛵',
    title: 'Sailing',
  },
  {
    activityId: 19230124,
    startTime: "2017-12-03 10:30",
    categoryId: 3,
    emoji: '🥐',
    title: 'Breakfast',
  },
  {
    activityId: 19230125,
    startTime: "2017-12-03 12:30",
    categoryId: 2,
    emoji: '🏓',
    title: 'Ping Pong',
  },
];