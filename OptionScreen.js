import React, {Component} from 'react';
import {TouchableHighlight, Dimensions, StyleSheet, Text, View, Switch, TextInput, Button} from 'react-native';

//preferences send to db
emoji = require('node-emoji')
emojis = [0,0,0,0,0,0,0,0,0] //length 9
const {width, height} = Dimensions.get('window');

export default class OptionScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notificationsOn: true,
            radiusText: '1',
            radius: 1,
            emoji1: false,
            emoji2: false,
            emoji3: false,
            emoji4: false,
            emoji5: false,
            emoji6: false,
            emoji7: false,
            emoji8: false,
            emoji9: false,
            minRange: 1,
            maxRange: 10,
        }
    }

    flipEmoji(num) {
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
            <View>

                {/* Changes whether or not notifications are active */}
                <View style = {styles.container}>
                    <Text style = {styles.header}>Notifications Toggle</Text>
                    <Switch onValueChange={(value) =>
                        this.setState({falseSwitchIsOn: value})} value={this.state.falseSwitchIsOn}
                    />
                </View>

                {/*Changes the radius where events are captured and sent to phone as notifications*/}
                <View style = {styles.container}>
                    <Text style = {styles.header}>Notification Radius</Text>
                    <TextInput style={{height: 100, borderColor: 'gray', borderWidth: 1, fontSize: 20, alignItems: 'center',}}
                               keyboardType = 'numeric'
                               onChangeText = {(text)=>
                                   this.setState({radius: parseInt(text), radiusText: text})}
                               value = {this.state.radiusText}
                    />
                </View>

                {/*Modify active categories shown on map*/}
                <View style = {styles.grid}>
                    {/* <Button style = {styles.buttonSize}
                            title= {"Sports: " + this.state.sports.toString()}
                            onPress={() => {
                                this.setState({sports: !this.state.sports}) }} />
                    <Button title= {"Study: " + this.state.study.toString()}
                            onPress={() =>
                                this.setState({study: !this.state.study})} />
                    <Button title= {"Food: " + this.state.food.toString()}
                            onPress={() =>
                                this.setState({food: !this.state.food})} />
                    <Button title= {"Hike: " + this.state.hike.toString()}
                            onPress={() =>
                                this.setState({hike: !this.state.hike})} />
                    <Button title= {"Shop: " + this.state.shop.toString()}
                            onPress={() =>
                                this.setState({shop: !this.state.shop})} />
                    <Button title= {"Chill: " + this.state.chill.toString()}
                            onPress={() =>
                                this.setState({chill: !this.state.chill})} />
                    <Button title= {"Game: " + this.state.game.toString()}
                            onPress={() =>
                                this.setState({game: !this.state.game})} />
                    <Button title= {"Party: " + this.state.party.toString()}
                            onPress={() =>
                                this.setState({party: !this.state.party})} />
                    <Button title= {"Gym: " + this.state.gym.toString()}
                            onPress={() =>
                                this.setState({gym: !this.state.gym})} />
                            */}
                </View>

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

              </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d3d3d3',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    grid: {
        //display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //alignItems: 'center',
        flexWrap: 'wrap',
        padding: '5%',

    },
    buttonSize: {
        height: 100,
        width: 200,
    },
    header: {
        fontSize: 32,
        color: 'black',
        fontWeight: 'bold',
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
