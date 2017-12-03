import React, { Component } from "react";
import {
  Alert,
  AppRegistry,
  Button,
  Clipboard,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import Modal from "react-native-modal"; //Need to npm install react-native-modal --save
import Icon from "react-native-vector-icons/Feather"; //Need to npm install react-native-elements --save
import Share, { ShareSheet } from "react-native-share"; //Need to npm install react-native-share --save
import Directions from "./Directions.js";

var MOCKED_EVENT_DATA = [
  {
    title: "Soccer",
    emoji: "Emoji",
    startTime: "12:00",
    description:
      "The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Get ready... Start!"
  }
];

export default class ActivityDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  _showModal = () => this.setState({ isModalVisible: true });
  _hideModal = () => this.setState({ isModalVisible: false });

  render() {
    var event = MOCKED_EVENT_DATA[0];
    let shareOptions = {
      title: "Lil Pump-Gucci Gang",
      message: "Look at what I'm doing on Polo!",
      url: "https://www.youtube.com/watch?v=4LfJnj66HVQ",
      subject: "Share Link"
    };
    var reportFlag = false;

    return (
      <View style={styles.container}>
        <Button
          onPress={this._showModal}
          title="Activity Details"
          color="black"
        />
        <Modal
          isVisible={this.state.isModalVisible}
          backdropOpacity={0}
          style={styles.bottomModal}
        >
          <View style={styles.modalContentContainer}>
            <View style={styles.row}>
              <Text style={styles.titleText}>{event.emoji}</Text>
              <Text> </Text>
              <Text style={styles.titleText}>{event.title}</Text>
              <Text> </Text>
              <Image
                source={{
                  uri:
                    "https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2017/08/110129_0773b2_-_h_2017.jpg"
                }}
                style={{ width: 30, height: 30, borderRadius: 30 / 2 }}
              />
              <Image
                source={{
                  uri:
                    "http://cdn.skim.gs/image/upload/c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_940/c_scale,w_640/v1463693334/Cydney-Gillon-cast-survivor-kaoh-rong-season-32-cbs_hn1y3n.jpg"
                }}
                style={{ width: 30, height: 30, borderRadius: 30 / 2 }}
              />
              <Image
                source={{
                  uri:
                    "http://wwwimage1.cbsstatic.com/base/files/cast/surv33_cast_hannahshapiro.jpg"
                }}
                style={{ width: 30, height: 30, borderRadius: 30 / 2 }}
              />
              <Image
                source={{
                  uri:
                    "http://wwwimage2.cbsstatic.com/base/files/cast/surv28_cast_sarah.jpg"
                }}
                style={{ width: 30, height: 30, borderRadius: 30 / 2 }}
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.miniText}>Start time:{event.startTime}</Text>
            </View>
            <View style={styles.row}>
              <Directions />
              <Button title="Join Activity" color="purple" />
            </View>
            <Text style={styles.descriptionText}>{event.description}</Text>
            <View style={styles.row}>
              <Icon
                name="upload"
                size={30}
                color="#5ac8fa"
                onPress={() => {
                  Share.open(shareOptions);
                }}
              />
              <Text style={{ flex: 1 }}> </Text>
              <Button title="Close" color="black" onPress={this._hideModal} />
              <Text style={{ flex: 1 }}> </Text>
              <Icon
                name="flag"
                size={30}
                color="black"
                onPress={() => {
                  if (!reportFlag) {
                    Alert.alert(
                      "Report Event",
                      "Are you sure you would like to report this event?",
                      [
                        {
                          text: "Flag this Activity",
                          onPress: () => {
                            reportFlag = true;
                            Alert.alert(
                              "Event Reported",
                              "Your report has been submitted.",
                              [{ text: "OK" }],
                              { cancelable: false }
                            );
                          }
                        },
                        { text: "Cancel" }
                      ],
                      { cancelable: false }
                    );
                  } else {
                    Alert.alert(
                      "Event Reported",
                      "Your report has been submitted.",
                      [{ text: "OK" }],
                      { cancelable: false }
                    );
                  }
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  extras: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  bottomButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  titleText: {
    fontSize: 24,
    padding: 0,
    margin: 0
  },
  descriptionText: {
    fontSize: 14,
    padding: 6,
    margin: 0
  },
  miniText: {
    fontSize: 12,
    padding: 0,
    margin: 0
  },
  bottomModal: {
    justifyContent: "flex-end",
    padding: 0,
    margin: 0
  },
  modalContentContainer: {
    alignSelf: "center",
    alignItems: "center",
    height: 200,
    width: Dimensions.get("window").width,
    backgroundColor: "white",
    margin: 0
  }
});
