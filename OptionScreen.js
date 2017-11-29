import React, {Component} from 'react';
import {StyleSheet, Text, View, Switch, TextInput, Button} from 'react-native';


export default class OptionScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notificationsOn: true,
            radiusText: '1',
            radius: 1,
            sports: false,
            study: false,
            food: false,
            hike: false,
            shop: false,
            chill: false,
            game: false,
            party: false,
            gym: false,
            minRange: 1,
            maxRange: 10,
        }
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
                    <Button style = {styles.buttonSize}
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



                    {/* <FlatList
                        data={[
                            {key: '😒'},
                            {key: '💕'},
                            {key: '🎶'},
                            {key: '🎂'},
                            {key: 'John'},
                            {key: 'Jillian'},
                            {key: 'Jimmy'},
                            {key: 'Julie'},
                        ]}
                        renderItem={({item}) => <Text style={{fontSize: 24}}>{item.key}</Text>}


                    /> */}
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
    }
});
