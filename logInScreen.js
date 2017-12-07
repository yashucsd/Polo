import React from 'react';
import {ScrollView, Dimensions, Button, StyleSheet, Text, View, TextInput, Image} from 'react-native';
import renderIf from './renderIf';
import useraction from './db_actions/users_actions';


//-1 represents empty values
name = -1;
phoneNum = -1;

logInEmail = -1
const {width, height} = Dimensions.get('window');
 
export default class LogIn extends React.Component {
  constructor(props){
    super(props);
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
      logInEmail = this.state.email
      this.setState({status:!data});
    });
  }
 
  render() {
    return (  
      <ScrollView
        style={{backgroundColor: 'white'}}
        contentContainerStyle={{alignItems: 'center'}}
      >
        <View style={{paddingTop: 120}}>
          <Image
            style = {{width: 165, height: 108}}
            source = {require('./resources/polo_logo.png')}
          />
        </View>
        <View style = {{flex: 1}}>
          <Text style = {{flex: 1}}></Text>
            {renderIf(this.state.status)(<Text style = {{height: 20, color: 'red', fontSize: 15}}>Incorrect Phone # or Password</Text>)}
  	      <Text style = {{flex: 1}}></Text>
   	    </View>
          
	    <TextInput style={styles.input}
	      placeholder = "Email"
	      onChangeText ={(event) => this.setState({email:event})}
	    />

	    <TextInput style={styles.input}
	      placeholder = "Password"
	      onChangeText ={(event) => this.setState({password:event})}
          secureTextEntry = {true}
          text = {this.state.password}
	    />
	    <Text style = {{flex: 1, height: Math.round(height*.05)}}></Text>

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
	      </View>
	    </View>
      </ScrollView>
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
  input: {
    fontSize: 25,
    width: 200
  }
});

export {logInEmail}
