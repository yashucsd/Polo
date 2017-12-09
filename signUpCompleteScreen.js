import React from 'react';
import { TouchableHighlight, Dimensions, Button, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import renderIf from './renderIf.js';
import {expEmail} from './signUpScreen.js';
import preferences from './db_actions/preferences_actions.js';

//preferences send to db
emoji = require('node-emoji') //length 9

const {width, height} = Dimensions.get('window');

//I don't think this looks good
//<Text style = {{fontSize: 40, fontWeight: 'bold', color: 'black'}}> Sign Up </Text>	
export default class SignUpComplete extends React.Component {
  
  constructor(){
    super();
    this.state ={
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
  completeSignUp(){
    //store arry of bools emojis in db
    //complete profile 
    var emojis = [this.state.emoji1, this.state.emoji2,this.state.emoji3,this.state.emoji4,this.state.emoji5,
    			this.state.emoji6,this.state.emoji7,this.state.emoji8,this.state.emoji9]
    preferences.createPreferences(expEmail, emojis).then(val=>{
    	this.props.navigation.navigate('MapScreen');
    });
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
	<Text></Text>
	
	<Text style = {{fontSize: 30, fontWeight: 'bold', color: 'black'}}> Categories</Text>
	<Text style = {{fontSize: 15, color: 'black'}}> Choose the categories of activities you want</Text>
	<Text style = {{fontSize: 15, color: 'black'}}> to see on the map and be notified about </Text>

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

	  <Text></Text>
	</View>

	<View style = {styles.buttons}>
	  <Button style = {{color: 'blue'}}
  	    onPress={() => this.completeSignUp()}
  	    title="Complete Sign Up"
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
    fontSize: Math.round(height/20),
    color: 'green',
  },
  emoteSmall: {
    flex: 1,
    fontSize: Math.round(height/25),
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
});
