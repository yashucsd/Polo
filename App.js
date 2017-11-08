import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

//-1 represents empty values
name = -1;
phoneNum = -1;
email = -1;
password = -1;
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Polo by MARCO</Text>
	
	<TextInput placeholder = "Enter Name"
	   returnKeyType = 'send'
	   onEndEditing ={(event) => name = event.nativeEvent.text}
	/>

	<TextInput placeholder = "Enter Phone #"
	   returnKeyType = 'send'
	   onEndEditing ={(event) => phoneNum = event.nativeEvent.text}
	/>

	<TextInput placeholder = "Enter Email"
	   returnKeyType = 'send'
	   onEndEditing ={(event) => email = event.nativeEvent.text}
	/>
	
	<TextInput placeholder = "Enter Password"
	   returnKeyType = 'send'
	   onEndEditing ={(event) => password = event.nativeEvent.text}
	/>
	<Button
  	  onPress={printInfo}
  	  title="Sign Up"
  	  color="#841584"
  	  accessibilityLabel="Learn more about this purple button"
	/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  }
});

printInfo = () =>{
  info = [name, phoneNum, email, password];
  for(i=0; i<info.length; i++){
    console.log(info[i]);
  }
}
