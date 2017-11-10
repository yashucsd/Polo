import React from 'react';
import {StyleSheet, Text, Button, Alert, TextInput, View} from 'react-native';
import ToggleButton from 'react-toggle-button';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: 'Useless Placeholder'};
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Polo by MARCO</Text>
          <Text>Revolutionizing</Text>
          <TextInput
              style={{ width: 300, borderColor: 'gray', backgroundColor: 'steelblue'}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
          />
          <ToggleButton 
          <Button
              style ={{}}
              onPress={() => { Alert.alert('You tapped the button!')}}
              title="Press Me"
          />
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
