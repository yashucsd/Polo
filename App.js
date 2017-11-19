import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import Modal from 'react-native-modal'; //Need to npm install react-native-modal --save
import { Icon } from 'react-native-elements'; //Need to npm install react-native-elements --save

var MOCKED_EVENT_DATA = [
    {title: 'Soccer', startTime: '12:00', description: 'Kick some balls'},
];

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false
    }
  }

  _showModal = () => this.setState({ isModalVisible: true})
  _hideModal = () => this.setState({ isModalVisible: false})

  render() {
    var event = MOCKED_EVENT_DATA[0];
    return (
      <View style={styles.container}>
        <Button
            onPress={this._showModal}
            title="Activity Details"
            color = "black"
        />
        <Modal isVisible={this.state.isModalVisible} backdropOpacity={0} style={styles.bottomModal}>
          <View style={styles.modalContentContainer}>
            <View style={styles.row}>
              <Text style={styles.titleText}>Emoji</Text>
              <Text>     </Text>
              <Text style={styles.titleText}>{event.title}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.miniText}>Start time:{event.startTime}</Text>
            </View>
            <View style={styles.row}>
              <Button
                title="Get Directions"
                color="blue"
              />
              <Button
                title="Join Activity"
                color="purple"
               />
            </View>
            <Text style={styles.titleText}>{event.description}</Text>
            <View style={styles.row}>
              <Icon
                raised
                name='flag'
                color='#517fa4'
              />
            </View>
            <Button
              title="Close"
              color="black"
              onPress={this._hideModal}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleText:{
    fontSize: 24,
    padding: 0,
    margin: 0,
  },
  miniText:{
    fontSize: 12,
    padding: 0,
    margin: 0,
  },
  bottomModal:{
    justifyContent: 'flex-end',
    padding: 0,
    margin: 0,
  },
  modalContentContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    height: 200,
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    margin: 0,
  },

});
 
