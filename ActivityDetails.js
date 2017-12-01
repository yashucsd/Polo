import React, { Component } from 'react';
import { AppRegistry, Button, Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import Modal from 'react-native-modal'; //Need to npm install react-native-modal --save
import Icon from 'react-native-vector-icons/FontAwesome'; //Need to npm install react-native-elements --save
import { StackNavigator } from 'react-navigation';
import Directions from './Directions.js';

var MOCKED_EVENT_DATA = [
    {title: 'Soccer', startTime: '12:00', description: 'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Get ready... Start!'},
];

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isModalVisible: true
    }
  }
  joinActivity(){
  //starts flow for joining activity
  }

  _showModal = () => this.setState({ isModalVisible: true})
  _hideModal = () => this.setState({ isModalVisible: false})
  
  switchView(){
    
    this.setState({isModalVisible: !this.state.isModalVisible})
  }

  render() {
    var event = MOCKED_EVENT_DATA[0];
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      {/*<Button
            onPress={this._showModal}
            title="Activity Details"
            color = "black"
        />*/}
        <Modal isVisible={this.state.isModalVisible} backdropOpacity={0} style={styles.bottomModal}>
          <View style={styles.modalContentContainer}>
            <View style={styles.row}>
              <Text style={styles.titleText}>Emoji</Text>
              <Text>     </Text>
              <Text style={styles.titleText}>{event.title}</Text>
              <Text>     </Text>
              <Image
                source={{uri: 'https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2017/08/110129_0773b2_-_h_2017.jpg'}}
                style={{width:30, height:30, borderRadius:30/2}}
              />
              <Image
                source={{uri: 'http://cdn.skim.gs/image/upload/c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_940/c_scale,w_640/v1463693334/Cydney-Gillon-cast-survivor-kaoh-rong-season-32-cbs_hn1y3n.jpg'}}
                style={{width:30, height:30, borderRadius:30/2}}
              />
              <Image
                source={{uri: 'http://wwwimage1.cbsstatic.com/base/files/cast/surv33_cast_hannahshapiro.jpg'}}
                style={{width:30, height:30, borderRadius:30/2}}
              />
              <Image
                source={{uri: 'http://wwwimage2.cbsstatic.com/base/files/cast/surv28_cast_sarah.jpg'}}
                style={{width:30, height:30, borderRadius:30/2}}
              />

            </View>
            <View style={styles.row}>
              <Text style={styles.miniText}>Start time:{event.startTime}</Text>
            </View>
            <View style={styles.row}>
              <Directions/>
              <Button
	      	onPress = {() => this.joinActivity()}
                title="Join Activity"
                color="purple"
              />
            </View>
            <Text style={styles.descriptionText}>{event.description}</Text>
            <View style={styles.row}>
              <Icon
                name='share'
                size={30}
                color='skyblue'
                onPress={() => navigate('Share')}
              />
              <Text style={{flex: 1}}>    </Text>
              <Button
                title="Close"
                color="black"
                onPress={this._hideModal}
              />
              <Text style={{flex: 1}}>    </Text>
              <Icon
                name='flag'
                size={30}
                color='skyblue'
                onPress={() => navigate('Flag')}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

class FlagScreen extends React.Component {
  render() {
    return (
      <View style={styles.extras}>
        <Button
          title="Report Event"
          color="red"
        />
      </View>
    );
  }
}

class ShareScreen extends React.Component {
  render() {
    return (
      <View style={styles.extras}>
        <Button
          title="Share Event"
          color="pink"
        />
      </View>
    );
  }
}

const ReportApp = StackNavigator({
  Home: { screen: HomeScreen },
  Flag: { screen: FlagScreen },
  Share: { screen: ShareScreen },
});

export default class ActivityDetails extends React.Component {
  render() {
    return <ReportApp />;
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
    justifyContent: 'space-between',
  },
  extras:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  bottomButtons:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText:{
    fontSize: 24,
    padding: 0,
    margin: 0,
  },
  descriptionText:{
    fontSize: 14,
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
 
