import React from 'react';
import {Slider, Switch, TouchableHighlight, Dimensions, Button, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import renderIf from './renderIf.js';

emoji = require('node-emoji')

//preferences send to db
emojis = [0,0,0,0,0,0,0,0,0] //length 9

const {width, height} = Dimensions.get('window');

export default class UserPreference extends React.Component {
  
  constructor(){
    super();
    this.state ={
      allNotifications:false,
      popularActivities:false,
      radius:0,
      emoji1:false,
      emoji2:false,
      emoji3:false,
      emoji4:false,
      emoji5:false,
      emoji6:false,
      emoji7:false,
      emoji8:false,
      emoji9:false,
    }
  }
  
  savePreferences(){
    //update all preferences of user to db
    this.props.navigation.navigate('MapScreen')
  }
  flipEmoji(num){
    switch(num){
      case 1:
        this.setState({emoji1: !this.state.emoji1});
	break;
      case 2:
        this.setState({emoji2: !this.state.emoji2});
	break
      case 3:
        this.setState({emoji3: !this.state.emoji3});
	break
      case 4:
        this.setState({emoji4: !this.state.emoji4});
	break
      case 5:
        this.setState({emoji5: !this.state.emoji5});
	break
      case 6:
        this.setState({emoji6: !this.state.emoji6});
	break
      case 7:
        this.setState({emoji7: !this.state.emoji7});
	break
      case 8:
        this.setState({emoji8: !this.state.emoji8});
	break
      case 9:
        this.setState({emoji9: !this.state.emoji9});
	break
    }
    emoji[num-1] = !emoji[num-1]
  }
  render() {
    return (
      <View style = {styles.container}>
	<Text></Text>	
	
	<Text style = {{fontSize: 30, fontWeight: 'bold', color: 'black'}}>User Preferences</Text>	
	<View style = {{flex: 1}}></View>

	<View style = {{flex: 4, width: width, flexDirection: 'column'}}>
	  <View style = {{flexDirection: 'row'}}>
	    <Text style = {{flex: 1}}></Text>
	    <Text style = {styles.textFontB}>All Notifications</Text>
	    <Text style = {{flex: 1}}></Text>
	    <Switch onValueChange={(value) => this.setState({allNotifications: value})} value={this.state.allNotifications}/>
	    <Text style = {{flex: 1}}></Text>
	  </View>

	  <View style = {{flexDirection: 'row'}}>
	    <Text style = {{flex: 1}}></Text>
	    <Text style = {styles.textFontB}>Popular Activities</Text>
	    <Text style = {{flex: 1}}></Text>
	    <Switch onValueChange={(value) => this.setState({popularActivities: value})} value={this.state.popularActivities}
								disabled = {!this.state.allNotifications}/>
	    <Text style = {{flex: 1}}></Text>
	  </View>

	  <View style = {{flexDirection: 'row'}}>
	    <Text style = {{flex: 1}}></Text>
	    <Text style = {styles.textFontB}>Activity Radius</Text>
	    <Text style = {{flex: 1}}></Text>
	    <Text style = {styles.textFontB}>{this.state.radius} miles</Text>
	    <Text style = {{flex: 1}}></Text>
	  </View>
	</View>
          <Slider
            style={{ width: width*.8 }}
            step={1}
            minimumValue={0}
            maximumValue={50}
            value={this.state.radius}
			disabled = {!this.state.allNotifications}
            onValueChange={val => this.setState({ radius: val })}
          />
        
	<Text style = {{fontSize: 20, fontWeight: 'bold', color: 'black'}}> Categories</Text>
	<Text style = {styles.textFont}> Choose the categories of activities you want</Text>
	<Text style = {styles.textFont}> to see on the map and be notified about </Text>

	<Text></Text>

	<View style = {{flex: 8, width: width}}>
	  <Text></Text>

	  <View style = {styles.emoteRowSmall}>
	    <Text style = {{flex: 1}}></Text>
	    <Text style = {styles.emoteSmall}>{renderIf(this.state.emoji1)(<Text>{emoji.get('heavy_check_mark')}</Text>)}</Text>
	    <Text style = {{flex: 1}}></Text>
	    <Text style = {styles.emoteSmall}>{renderIf(this.state.emoji2)(<Text>{emoji.get('heavy_check_mark')}</Text>)}</Text>
	    <Text style = {{flex: 1}}></Text>
	    <Text style = {styles.emoteSmall}>{renderIf(this.state.emoji3)(<Text>{emoji.get('heavy_check_mark')}</Text>)}</Text>
	    <Text style = {{flex: 1}}></Text>
          </View>	    
	  
	  <View style = {styles.emoteRow}>
	    <Text style = {{flex: 1}}></Text>
	    <TouchableHighlight style = {{flex: 1}} onPress = {() => this.flipEmoji(1)} underlayColor={'transparent'}>
	      <Text style = {styles.emote}>{emoji.get('basketball')}</Text>
	    </TouchableHighlight>
	    <Text style = {{flex: 1}}></Text>
	    <TouchableHighlight style = {{flex: 1}} onPress = {() => this.flipEmoji(2)} underlayColor={'transparent'}>
	      <Text style = {styles.emote}>{emoji.get('books')}</Text>
	    </TouchableHighlight>
	    <Text style = {{flex: 1}}></Text>
	    <TouchableHighlight style = {{flex: 1}} onPress = {() => this.flipEmoji(3)} underlayColor={'transparent'}>
	      <Text style = {styles.emote}>{emoji.get('hamburger')}</Text>
	    </TouchableHighlight>
	    <Text style = {{flex: 1}}></Text>
          </View>	    
	 

	  <View style = {styles.emoteRowSmall}>
	    <Text style = {{flex: 1}}></Text>
	    <Text style = {styles.emoteSmall}>{renderIf(this.state.emoji4)(<Text>{emoji.get('heavy_check_mark')}</Text>)}</Text>
	    <Text style = {{flex: 1}}></Text>
	    <Text style = {styles.emoteSmall}>{renderIf(this.state.emoji5)(<Text>{emoji.get('heavy_check_mark')}</Text>)}</Text>
	    <Text style = {{flex: 1}}></Text>
	    <Text style = {styles.emoteSmall}>{renderIf(this.state.emoji6)(<Text>{emoji.get('heavy_check_mark')}</Text>)}</Text>
	    <Text style = {{flex: 1}}></Text>
          </View>

	  <View style = {styles.emoteRow}>
	    <Text style = {{flex: 1}}></Text>
	    <TouchableHighlight style = {{flex: 1}} onPress = {() => this.flipEmoji(4)} underlayColor={'transparent'}>
	      <Text style = {styles.emote}>{emoji.get('snow_capped_mountain')}</Text>
	    </TouchableHighlight>
	    <Text style = {{flex: 1}}></Text>
	    <TouchableHighlight style = {{flex: 1}} onPress = {() => this.flipEmoji(5)} underlayColor={'transparent'}>
	      <Text style = {styles.emote}>{emoji.get('shopping_bags')}</Text>
	    </TouchableHighlight>
	    <Text style = {{flex: 1}}></Text>
	    <TouchableHighlight style = {{flex: 1}} onPress = {() => this.flipEmoji(6)} underlayColor={'transparent'}>
	      <Text style = {styles.emote}>{emoji.get('snowflake')}</Text>
	    </TouchableHighlight>
	    <Text style = {{flex: 1}}></Text>
          </View>	    
	  
	  <View style = {styles.emoteRowSmall}>
	    <Text style = {{flex: 1}}></Text>
	    <Text style = {styles.emoteSmall}>{renderIf(this.state.emoji7)(<Text>{emoji.get('heavy_check_mark')}</Text>)}</Text>
	    <Text style = {{flex: 1}}></Text>
	    <Text style = {styles.emoteSmall}>{renderIf(this.state.emoji8)(<Text>{emoji.get('heavy_check_mark')}</Text>)}</Text>
	    <Text style = {{flex: 1}}></Text>
	    <Text style = {styles.emoteSmall}>{renderIf(this.state.emoji9)(<Text>{emoji.get('heavy_check_mark')}</Text>)}</Text>
	    <Text style = {{flex: 1}}></Text>
          </View>
	  
	  <View style = {styles.emoteRow}>
	    <Text style = {{flex: 1}}></Text>
	    <TouchableHighlight style = {{flex: 1}} onPress = {() => this.flipEmoji(7)} underlayColor={'transparent'}>
	      <Text style = {styles.emote}>{emoji.get('video_game')}</Text>
	    </TouchableHighlight>
	    <Text style = {{flex: 1}}></Text>
	    <TouchableHighlight style = {{flex: 1}} onPress = {() => this.flipEmoji(8)} underlayColor={'transparent'}>
	      <Text style = {styles.emote}>{emoji.get('tada')}</Text>
	    </TouchableHighlight>
	    <Text style = {{flex: 1}}></Text>
	    <TouchableHighlight style = {{flex: 1}} onPress = {() => this.flipEmoji(9)} underlayColor={'transparent'}>
	      <Text style = {styles.emote}>{emoji.get('weight_lifter')}</Text>
	    </TouchableHighlight>
	    <Text style = {{flex: 1}}></Text>
	  </View>

	  <Text style = {{height: height*.1}}></Text>
	</View>

	<View style = {styles.buttons}>
	  <Button style = {{color: 'blue'}}
  	    onPress={() => this.savePreferences()}
  	    title="Save Preferences"
  	    color="#000"
	  />

	  <Text style = {{width: width*.2}}></Text>

	  <Button style = {{color: 'blue'}}
  	    onPress={() => this.props.navigation.navigate('LogInScreen')}
  	    title="Sign Out"
  	    color="#000"
	  />
	</View>

	<Text style = {{flex: 2}}> </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input: {
    flex: 1,
    fontSize: 25
  },
  emote: {
    flex: 1,
    fontSize: Math.round(height/25),
    color: 'green',
  },
  emoteSmall: {
    flex: 1,
    fontSize: Math.round(height/45),
    color: 'green',
  },
  emoteRow: {
    flex: 2,
    flexDirection: 'row',
  },
  emoteRowSmall: {
    flex: 1,
    flexDirection: 'row',
  },
  textFont:{
    fontSize: 15,
    color: 'black',
  },
  textFontB:{
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
});

