import React from "react";
import {
  Slider,
  Switch,
  TouchableHighlight,
  Dimensions,
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView
} from "react-native";
import renderIf from "./renderIf.js";
import preferences from "./db_actions/preferences_actions";

emoji = require("node-emoji");
checkmark = "./resources/checkmark.svg";
//preferences send to db
emojisArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //length 9
col1 = [emoji.get("basketball"), emoji.get("books"), emoji.get("hamburger")];

col2 = [
  emoji.get("snow_capped_mountain"),
  emoji.get("shopping_bags"),
  emoji.get("snowflake")
];

col3 = [emoji.get("video_game"), emoji.get("tada"), emoji.get("weight_lifter")];

const { width, height } = Dimensions.get("window");

export default class UserPreference extends React.Component {
  constructor() {
    super();
    this.state = {
      allNotifications: false,
      popularActivities: false,
      radius: 0,
      emoji1: false,
      emoji2: false,
      emoji3: false,
      emoji4: false,
      emoji5: false,
      emoji6: false,
      emoji7: false,
      emoji8: false,
      emoji9: false
    };
  }

  savePreferences() {
    //update all preferences of user to db
    this.props.navigation.navigate("MapScreen");
  }
  flipEmoji(num) {
    switch (num) {
      case 1:
        this.setState({ emoji1: !this.state.emoji1 });
        break;
      case 2:
        this.setState({ emoji2: !this.state.emoji2 });
        break;
      case 3:
        this.setState({ emoji3: !this.state.emoji3 });
        break;
      case 4:
        this.setState({ emoji4: !this.state.emoji4 });
        break;
      case 5:
        this.setState({ emoji5: !this.state.emoji5 });
        break;
      case 6:
        this.setState({ emoji6: !this.state.emoji6 });
        break;
      case 7:
        this.setState({ emoji7: !this.state.emoji7 });
        break;
      case 8:
        this.setState({ emoji8: !this.state.emoji8 });
        break;
      case 9:
        this.setState({ emoji9: !this.state.emoji9 });
        break;
    }

    emojisArr[num - 1] = !emojisArr[num - 1];
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>User Preferences</Text>
          <Text style={styles.subheading}>Notifications</Text>
          <View style={styles.sectionBox}>
            <View style={styles.notificationListItem}>
              <Text style={styles.textFontB}>All Notifications</Text>
              <Switch
                style={styles.switch}
                onValueChange={value => this.setState({ allNotifications: value })}
                value={this.state.allNotifications}
              />
            </View>
            <View style={styles.border} />
            <View style={styles.notificationListItem}>
              <Text style={styles.textFontB}>Popular Activities</Text>
              <Switch
                style={styles.switch}
                onValueChange={value => this.setState({ popularActivities: value })}
                value={this.state.popularActivities}
                disabled={!this.state.allNotifications}
              />
            </View>
            <View style={styles.border} />
            <View style={styles.notificationListItem}>
              <Text style={styles.textFontB}>Activity Radius</Text>
              <Text style={styles.textFontC}>{this.state.radius} miles</Text>
            </View>
            <View style={{ marginBottom: 25 }}>
              <Slider
                style={styles.slider}
                step={1}
                minimumValue={0}
                maximumValue={50}
                value={this.state.radius}
                disabled={!this.state.allNotifications}
                onValueChange={val => this.setState({ radius: val })}
              />
            </View>
          </View>

          <View style={{ margin: 15, paddingTop: 35 }}>
            <Text style={{fontWeight: "bold", fontSize: 22, color: "black", marginBottom: 10,}}>
              Categories
            </Text>
            <Text style={styles.textFont}>
              Choose the categories of activities you want{"\n"}
              to see on the map and be notified about
            </Text>
          </View>

          <View style={{ backgroundColor: "white", justifyContent: "space-between", paddingBottom: 30, marginBottom: 30}}>
            
            <View style={styles.categoryRow}>

              <View style={styles.categoryButton}>
                <Text style={styles.checkbox}>
                  {renderIf(this.state.emoji1)(<Image style={styles.checkboxImg} source={require("./pictures/checkmark.png")} />)}
                </Text>
                <TouchableHighlight onPress={() => this.flipEmoji(1)} underlayColor={"transparent"}>
                  <Text style={styles.categoryEmoji}>{emoji.get("basketball")}</Text>
                </TouchableHighlight>
              </View>

              <View style={styles.categoryButton}>
                <Text style={styles.checkbox}>
                  {renderIf(this.state.emoji2)(<Image style={styles.checkboxImg} source={require("./pictures/checkmark.png")} />)}
                </Text>
                <TouchableHighlight onPress={() => this.flipEmoji(2)} underlayColor={"transparent"}>
                  <Text style={styles.categoryEmoji}>{emoji.get("books")}</Text>
                </TouchableHighlight>
              </View>

              <View style={styles.categoryButton}>
                <Text style={styles.checkbox}>
                  {renderIf(this.state.emoji3)(<Image style={styles.checkboxImg} source={require("./pictures/checkmark.png")} />)}
                </Text>
                <TouchableHighlight onPress={() => this.flipEmoji(3)} underlayColor={"transparent"}>
                  <Text style={styles.categoryEmoji}>{emoji.get("hamburger")}</Text>
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.categoryRow}>

              <View style={styles.categoryButton}>
                <Text style={styles.checkbox}>
                  {renderIf(this.state.emoji4)(<Image style={styles.checkboxImg} source={require("./pictures/checkmark.png")} />)}
                </Text>
                <TouchableHighlight onPress={() => this.flipEmoji(4)} underlayColor={"transparent"}>
                  <Text style={styles.categoryEmoji}>{emoji.get("snow_capped_mountain")}</Text>
                </TouchableHighlight>
              </View>

              <View style={styles.categoryButton}>
                <Text style={styles.checkbox}>
                  {renderIf(this.state.emoji5)(<Image style={styles.checkboxImg} source={require("./pictures/checkmark.png")} />)}
                </Text>
                <TouchableHighlight onPress={() => this.flipEmoji(5)} underlayColor={"transparent"}>
                  <Text style={styles.categoryEmoji}>{emoji.get("shopping_bags")}</Text>
                </TouchableHighlight>
              </View>

              <View style={styles.categoryButton}>
                <Text style={styles.checkbox}>
                  {renderIf(this.state.emoji6)(<Image style={styles.checkboxImg} source={require("./pictures/checkmark.png")} />)}
                </Text>
                <TouchableHighlight onPress={() => this.flipEmoji(6)} underlayColor={"transparent"}>
                  <Text style={styles.categoryEmoji}>{emoji.get("snowflake")}</Text>
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.categoryRow}>

              <View style={styles.categoryButton}>
                <Text style={styles.checkbox}>
                  {renderIf(this.state.emoji7)(<Image style={styles.checkboxImg} source={require("./pictures/checkmark.png")} />)}
                </Text>
                <TouchableHighlight onPress={() => this.flipEmoji(7)} underlayColor={"transparent"}>
                  <Text style={styles.categoryEmoji}>{emoji.get("video_game")}</Text>
                </TouchableHighlight>
              </View>

              <View style={styles.categoryButton}>
                <Text style={styles.checkbox}>
                  {renderIf(this.state.emoji8)(<Image style={styles.checkboxImg} source={require("./pictures/checkmark.png")} />)}
                </Text>
                <TouchableHighlight onPress={() => this.flipEmoji(8)} underlayColor={"transparent"}>
                  <Text style={styles.categoryEmoji}>{emoji.get("tada")}</Text>
                </TouchableHighlight>
              </View>

              <View style={styles.categoryButton}>
                <Text style={styles.checkbox}>
                  {renderIf(this.state.emoji9)(<Image style={styles.checkboxImg} source={require("./pictures/checkmark.png")} />)}
                </Text>
                <TouchableHighlight onPress={() => this.flipEmoji(9)} underlayColor={"transparent"}>
                  <Text style={styles.categoryEmoji}>{emoji.get("weight_lifter")}</Text>
                </TouchableHighlight>
              </View>
            </View>

          </View>

          <View style={styles.signOut}>
            <Button
              onPress={() => this.props.navigation.navigate("LogInScreen")}
              title="Sign Out"
              color="red"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

// props.checkboxState = this.state.emoji1
// props.categoryId = 1
// props.categoryEmoji = "basketball"


function CategoryButton(props) {
  return (
    <View style={styles.categoryButton}>
      <Text style={styles.checkbox}>
        {renderIf(props.checkboxState)(<Image style={styles.checkboxImg} source={require("./pictures/checkmark.png")} />)}
      </Text>
      <TouchableHighlight onPress={() => this.flipEmoji(props.categoryId)} underlayColor={"transparent"}>
        <Text style={styles.categoryEmoji}>{emoji.get(props.categoryEmoji)}</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    paddingLeft: 15,
    fontWeight: "bold",
    marginBottom: 50,
    marginTop: 25,
  },
  subheading: {
    fontWeight: "bold",
    fontSize: 22,
    color: "black",
    marginBottom: 10,
    paddingLeft: 15,
  },
  switch: {
    marginTop: 22,
    marginRight: 10
  },
  slider: {
     width: width * 0.8,
     alignSelf: "center" 
  },
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7FF"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  input: {
    flex: 1,
    fontSize: 25
  },
  categoryEmoji: {
    fontSize: Math.round(height / 25),
    marginTop: 25,
  },
  checkbox: {
    position: "absolute",
    right: 0,
    backgroundColor: "transparent",
  },
  checkboxImg: {
    height: 27,
    width: 27,
  },
  categoryEmojiRow: {
    flex: 2,
    flexDirection: "row"
  },
  categoryEmojiRowSmall: {
    flex: 1,
    flexDirection: "row"
  },
  textFont: {
    fontSize: 16,
    color: "black"
  },
  textFontB: {
    fontSize: 20,
    color: "black",
    margin: 25,
    height: 25
  },
  textFontC: {
    fontSize: 20,
    color: "#939393",
    height: 50,
    paddingTop: 25,
    paddingRight: 15
  },
  notificationListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  border: {
    borderBottomColor: "#E2E2E2",
    borderStyle: "solid",
    borderBottomWidth: 1,
    alignSelf: "flex-end",
    width: width * 0.95
  },

  signOut: {
    backgroundColor: "white",
    padding: 5,
    marginBottom: 50,
  },

  categoryButton: {
    backgroundColor: "#333",
    borderColor: "black",
    height: 84,
    width: 84,
    borderRadius: 42,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },

  sectionBox: {
    backgroundColor: "white",
    justifyContent: "space-between"
  },

  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30
  }
});

