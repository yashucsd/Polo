import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, Share, TouchableHighlight} from 'react-native';

export default class ShareActivity extends React.Component{
  _shareTextMessage () {
    Share.share({
      message: 'Such sharing! Much wow!'
    })
    .then(this._showResult)
    .catch(err => console.log(err))
  }

  _showResult (result) {
    console.log(result)
  }

   _shareTextWithTitle () {
     Share.share({
      message: 'This message has a title',
       title: 'Best title ever!',
       url: 'http://codingmiles.com'
     },
     {
       dialogTitle: 'This is share dialog title',
       excludedActivityTypes: [
         'com.apple.UIKit.activity.PostToTwitter',
         'com.apple.uikit.activity.mail'
       ],
       tintColor: 'green'
     })
     .then(this._showResult)
     .catch(err => console.log(err))
   }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._shareTextMessage}>
          <View style={styles.button}>
            <Text>Click to share message</Text>
          </View>
        </TouchableHighlight>
      {/*Share text with title*/}
        <TouchableHighlight onPress={this._shareTextWithTitle}>
          <View style={styles.button}>
            <Text>Click to share message, URL and title</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#76c9f8',
    padding: 10,
    margin: 10,
    borderRadius: 5
  }
});