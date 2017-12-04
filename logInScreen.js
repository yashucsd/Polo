import React from 'react';
import {KeyboardAvoidingView, Dimensions, Button, StyleSheet, Text, View, TextInput, Image} from 'react-native';
import renderIf from './renderIf';
import useraction from './db_actions/users_actions';
import preferences from "./db_actions/preferences_actions.js";


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
      status:false,
      email: "Email",
      password: "Password"
    }
  }

  checkInfo(){
    useraction.checkEmail(this.state.email).then(data=>{
      if(data){
        useraction.getUser(this.state.email).then(user=>{
          if(this.state.password == user.password){
            this.props.navigation.navigate("MapScreen");
          }
        });
      }
      this.setState({status:!data});
    });
    
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
	     onChangeText ={(event) => this.setState({email:event})}
	  />

	  <TextInput style = {{flex: 1, fontSize: 25}}
	     placeholder = "Password"
	     onChangeText ={(event) => this.setState({password:event})}
       text = {this.state.password}
	  />
	  <Text style = {{flex: 1, height: Math.round(height*.05)}}></Text>
	</KeyboardAvoidingView>

	<View style = {styles.buttons}>
	  <Button
  	    onPress={()=> this.checkInfo()}
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
	  
	  <View style = {{flexDirection: 'row'}}>
	    <Image
	       style = {{width: 40, height: 40}}
	       source = {require('./resources/fb.png')}
	    />
	    <Button
	      style = {{height: 40}}
  	      onPress={contFb}
  	      title="Continue with Facebook"
  	      color="#3b5998"
	    />
	  </View>
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

contFb = () =>{
  //search device for fb account
  //db function to check if acc exists for fb info
 
  //if there's a matching account log in the user
  //else send user to sign up screen w/ inputed values from fb info
}

