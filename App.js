import React, {Component} from 'react';
import {StyleSheet, Text, View, Switch, TextInput, FlatList} from 'react-native';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notificationsOn: true,
            radiusText: '1',
            radius: 1,
            list: ['Sports','Study', 'Food', 'Hike',
                   'Shop', 'Chill', 'Game', 'Party', 'Gym'],

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
                <View style = {styles.container}>
                    <FlatList
                        data={[
                            {key: 'Devin'},
                            {key: 'Jackson'},
                            {key: 'James'},
                            {key: 'Joel'},
                            {key: 'John'},
                            {key: 'Jillian'},
                            {key: 'Jimmy'},
                            {key: 'Julie'},
                        ]}
                        renderItem={({item}) => <Text style={{fontSize: 24}}>{item.key}</Text>}
                    />
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
    header: {
        fontSize: 32,
        color: 'black',
        fontWeight: 'bold',
    }
});
