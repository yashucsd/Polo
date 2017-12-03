import React from 'react';
import {KeyboardAvoidingView, Dimensions, Button, StyleSheet, Text, View, TextInput, Image} from 'react-native';
import renderIf from './renderIf';
import useraction from './db_actions/users_actions.js';

//-1 represents empty values
name = -1;
phoneNum = -1;
email = -1;
password = -1;

//for testing
dbemail = 123;
dbpassword = 123;

//for sizing
const {width, height} = Dimensions.get('window');

export default class LogIn extends React.Component {
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
    temp = useraction.checkEmail(email)

    x = false
    //email exists
    if(!temp){
      console.log("email doesn't exist")
    }
    else{
      user = useraction.getUser(email)
      
      console.log("user email " + user.email)
      console.log("user pw " + user.password)
      
      x = (user.password == password)  
    }
      console.log("email entered " + email)
      console.log("pw entered " + password) 
    
    //prompt incorrect email or password accordingly
    this.setState({status: !x});

    //log in successful, open the map
    if(x){
      this.props.navigation.navigate('MapScreen')
    }
  }

  render() {
    return (   
      <View style = {styles.container}>
        <Text style = {{flex: 1}}></Text>
	
	<Image 
	   style = {{width: 165, height: 108}} 
	   source = {require('./resources/polo_logo.png')}
	/>
	
	<View style = {{flex: 1}}>
	  <Text style = {{flex: 1}}></Text>
          {renderIf(this.state.status)(<Text style = {{height: 20, color: 'red', fontSize: 15}}>Incorrect Phone # or Password</Text>)}
	  <Text style = {{flex: 1}}></Text>
   	</View>
          
	<KeyboardAvoidingView style = {{flex: 2, width: Math.round(width*.66)}} behavior="height">	
	  <TextInput style = {{flex:1, fontSize: 25}}
	     placeholder = "Email"
	     onEndEditing ={(event) => email = event.nativeEvent.text}
	  />

	  <TextInput style = {{flex: 1, fontSize: 25}}
	     placeholder = "Password"
	     onEndEditing ={(event) => password = event.nativeEvent.text}
	  />
	  <Text style = {{flex: 1, height: Math.round(height*.05)}}></Text>
	</KeyboardAvoidingView>

	<View style = {styles.buttons}>
	  <Button
  	    onPress={()=>this.checkInfo()}
  	    title="Log In"
  	    color="#000"
	  />

	  <Text style = {{width: Math.floor(width*.2)}}> </Text>

	  <Button
      	    onPress={() => this.props.navigation.navigate('SignUpScreen')}
  	    title="Sign Up"
  	    color="#000"
	  />
	</View>

	<View style = {{flex: 3}}>
	  <Text style = {{height: Math.round(height*.085)}}></Text>
	</View>

      </View>
      
 )}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});


