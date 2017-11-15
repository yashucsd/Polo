import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
 
//-1 represents empty values
name = -1;
phoneNum = -1;
email = -1;
password = -1;
export default class ActivityDetails extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Activity Title</Text>
   	<Text style={styles.header}>Activity Category</Text>
	<Text style={styles.header}>Activity Time</Text>
	<Text style={styles.header}>Activity Details</Text>
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
