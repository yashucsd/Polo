import React, {Component} from 'react';
import {StyleSheet, Text, View, Switch, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';
import OptionScreen from './OptionScreen.js';

const navigator = StackNavigator({

    Options: {
        screen: OptionScreen,
        navigationOptions: {
            headerTitle: 'Option Screen',
        },
    }
});

export default navigator;