import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Polo by MARCO</Text>
        <Text>Revolutionizing</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
	<Text>Another change at 11:39 PM </Text>
	<Text>THIS IS A CHANGE MADE AT 6:38 PM.</Text>
        <Text>The College Dropout Best Kanye Album</Text> 
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
