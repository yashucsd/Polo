import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

//-1 represents empty values
name = -1;
phoneNum = -1;
email = -1;
password = -1;

export default class LogIn extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text></Text>
        <Text style={styles.header}>Polo</Text>
	
	<TextInput placeholder = "Enter Email"
	   onEndEditing ={(event) => email = event.nativeEvent.text}
	/>

	<TextInput placeholder = "Enter Password"
	   onEndEditing ={(event) => password = event.nativeEvent.text}
	/>

	<View style = {styles.buttons}>
	  <Button
  	    onPress={checkInfo}
  	    title="Log In"
  	    color="#841584"
	  />

	  <Button
  	    onPress={checkInfo}
  	    title="Log In w/ Facebook"
  	    color="#841584"
	  />
	</View>

	<View style = {{flex: 2}}>
	  <Button
  	    onPress={checkInfo}
  	    title="Sign Up"
  	    color="#841584"
	  />
	</View>

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
    flex: 2,
    fontSize: 80,
    color: 'black',
    fontWeight: 'bold',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row'
  }
});

checkInfo = () =>{
  x = undefined;
  //x = check for email and password in database
  
  //log in successful
  if(x){
    //open map
  }
  //log in failed
  else{
    //prompt incorrect email or password
  }
}
