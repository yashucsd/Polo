import React from 'react';
import { Button, Platform, StyleSheet, Text, View, TextInput } from 'react-native';

const API = Platform.OS === 'android' ? 'http://10.0.3.2.:3001' : 'http://localhost:3001';

name = -1;
email = -1;
phone = -1;
id = -1;
export default class App extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.header}>Polo by MARCO</Text>
   
      <TextInput placeholder = "Enter Name"
        returnKeyType = 'send'
        onChangeText ={(event) => name = event.nativeEvent.text}
      />
  
      <TextInput placeholder = "Enter Phone #"
        returnKeyType = 'send'
        onChangeText ={(event) => phone = event.nativeEvent.text}
      />
  
      <TextInput placeholder = "Enter Email"
        returnKeyType = 'send'
        onChangeText ={(event) => email = event.nativeEvent.text}
      />

      <Button
        onPress={createTestUser}
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
 
function createTestUser() {
  var user = { "name":name, "email":email, "phone":phone };

  // use fetch() to make HTTP requests to our api
  fetch('http://localhost:3001/test_users', {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
}