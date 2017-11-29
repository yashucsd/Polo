import React from 'react';
import { Button, Platform, StyleSheet, Text, View, TextInput } from 'react-native';

var testUsersActions = require('./db_actions/test_users_actions.js')

const API = Platform.OS === 'android' ? 'http://10.0.3.2.:3001' : 'http://localhost:3001';

name = -1;
email = -1;
phone = -1;
id = -1;
export default class App extends React.Component {
    
}