import React from 'react';
import { Button, Platform, StyleSheet, Text, View, TextInput } from 'react-native';

var testUsersActions = require('./db_actions/test_users_actions.js')

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
        onChange ={(event) => name = event.nativeEvent.text}
      />
  
      <TextInput placeholder = "Enter Phone #"
        returnKeyType = 'send'
        onChange ={(event) => phone = event.nativeEvent.text}
      />
  
      <TextInput placeholder = "Enter Email"
        returnKeyType = 'send'
        onChange ={(event) => email = event.nativeEvent.text}
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
  testUsersActions.createTestUser(name, email, phone);
}