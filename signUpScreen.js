import React from 'react';
import {KeyboardAvoidingView, Dimensions, Button, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import renderIf from './renderIf.js';
import useraction from './useractions.js';

//-1 represents empty values
name = -1;
phoneNum = -1;
email = -1;
password = -1;

//vars for testing
dbphoneNum = 123
dbemail = 123

//for sizing
const {width, height} = Dimensions.get('window');

export default class SignUp extends React.Component {
  
  constructor(){
    super();
    this.state ={
      status:false
    }
  }
  /*
	checkEmail: checkEmail,
	checkPhone: checkPhone,
	addUser: addUser,
	getUser: getUser
  */
  checkInfo(){
    x = useraction.checkEmail(email)
    y = useraction.checkPhone(phoneNum)

    error = x || y

    //prompt incorrect email or password accordingly
    this.setState({status: error});
  
    console.log("used email? " + x)
    console.log("used phone? " + y)


    //log in successful, open the map
    if(!error){
      //create new account for the user
      useraction.addUser(name, email, phoneNum, password)
      this.props.navigation.navigate('SignUpCompleteScreen')
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style = {{height: Math.round(height*.025)}}></Text>	
	<Image 
	   style = {{width: 165, height: 108}} 
	   source = {require('./resources/polo_logo.png')}
	/>
	
	
	<View style = {{flex: 1}}>
          {renderIf(this.state.status)(<Text style = {{height: 20, color: 'red', fontSize: 15}}>Email or Phone # already in use.</Text>)}
	</View>
	
	<KeyboardAvoidingView style = {{flex: 5, width: Math.round(width*.6)}} behavior = "height">	
	  <TextInput style = {styles.input}
	     placeholder = "Name"
	     onEndEditing ={(event) => name = event.nativeEvent.text}
	  />

	  <TextInput style = {styles.input}
	     placeholder = "Email"
	     onEndEditing ={(event) => email = event.nativeEvent.text}
	  />

	  <TextInput style = {styles.input}
	     placeholder = "Phone #"
	     onEndEditing ={(event) => phoneNum = event.nativeEvent.text}
	  />
	  <TextInput style = {styles.input}
	     placeholder = "Password"
	     onEndEditing ={(event) => password = event.nativeEvent.text}
	  />
	  <Text style = {{flex: 1}}></Text>
	</KeyboardAvoidingView>

	<View style = {styles.buttons}>
	  <Button
  	    onPress={() => this.checkInfo()}
  	    title="Continue Sign Up"
  	    color="#000"
	  />
	</View>

	<Text style = {{flex: 2}}> </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input: {
    flex: 1,
    fontSize: 25
  },
});

