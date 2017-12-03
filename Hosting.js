import React from 'react';
import {Keyboard, TouchableHighlight,ScrollView, Button, Picker, StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal'; //Need to npm install react-native-modal --save
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import ModalSelector from 'react-native-modal-selector';
import emoji from 'node-emoji';

const {width, height} = Dimensions.get('window');

var NON_SPACING_MARK = String.fromCharCode(65039); // 65039 - '️' - 0xFE0F;
var nonSpacingRegex = new RegExp(NON_SPACING_MARK, 'g')


const reactStringReplace = require('react-string-replace')

export default class Hosting extends React.Component {
    constructor(props){
        super(props);
        this.state =
        {
            isACVisible: true,
            isInputVisible: false,
            address: "",
            longitude: -1,
            latitude: -1,
            emoji: "",
            eventName: "",
            category: "",
            categoryDescription: "",
            description:"",
            time:""

        };
    }

    render() {
        let index = 0;
        const data = [
            { key: index++, section: true, label: "Categories" },
            { key: index++, label: "Sports " + emoji.get("basketball"), value: "basketball"},
            { key: index++, label: "Study " + emoji.get("books"),  value: "books"},
            { key: index++, label: "Food " + emoji.get("hamburger"), value: "hamburger" },
            { key: index++, label: "Hiking " + emoji.get("snow_capped_mountain"), value: "snow_capped_mountain" },
            { key: index++, label: "Shopping " + emoji.get("shopping_bags"), value: "shopping_bags" },
            { key: index++, label: "Chill " + emoji.get("snowflake"), value: "snowflake" },
            { key: index++, label: "Gaming " + emoji.get("video_game"), value: "video_game" },
            { key: index++, label: "Party " + emoji.get("tada"), value: "tada"},
            { key: index++, label: "Gym " + emoji.get("weight_lifter"), value: "weight_lifter"},
        ];

        return (
            <View style={styles.container}>

                <Modal isVisible={this.state.isACVisible} backdropOpacity={0} style={styles.bottomModal}
                       animationIn ="slideInUp" animationOut = "slideOutLeft" avoidKeyboard={true}>
                    <View style={styles.modalContentContainer}>

                        <GooglePlacesAutocomplete
                            placeholder='Where?'
                            minLength={2} // minimum length of text to search
                            autoFocus={false}
                            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                            listViewDisplayed='auto'    // true/false/undefined
                            fetchDetails={true}
                            renderDescription={(row) => row.description || row.vicinity} // custom description render
                            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                                this.setState({latitude: details.geometry.location.lat,
                                               longtitude: details.geometry.location.lng,
                                               address: data.description,
                                               isInputVisible: true});
                            }}

                            getDefaultValue={() => ''}

                            query={{
                                // available options: https://developers.google.com/places/web-service/autocomplete
                                key: 'AIzaSyAvWx1p36lAqWnIBsOMHJeW1MKF_98uYE8',
                                language: 'en', // language of the results
                                types: 'establishment', // default: 'geocode'
                                radius: 200000
                            }}

                            styles={{
                                textInputContainer: {
                                    flexDirection: "row",
                                    width: '100%',
                                    alignItems:"center",
                                    backgroundColor: "#f9f7f7"
                                },
                                container:{

                                    backgroundColor: "#f9f7f7"

                                },
                                poweredContainer:{
                                    backgroundColor: "#f9f7f7",
                                    width: 0,
                                    height: 0

                                },
                                description: {
                                    fontWeight: 'bold'
                                },
                                predefinedPlacesDescription: {
                                    color: '#1faadb'
                                }
                            }}

                            currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                            currentLocationLabel="Current location"
                            nearbyPlacesAPI={'None'} // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                            GoogleReverseGeocodingQuery={{
                                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                            }}
                            GooglePlacesSearchQuery={{
                                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                                rankby: 'distance',
                                types: 'food'
                            }}

                            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

                            debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.


                            /*renderLeftButton={()  => <Icon class="fa fa-search" aria-hidden="true"></Icon>}*/
                            renderRightButton={() =>
                                <Button
                                    style={{marginTop: 200}}
                                    onPress={() => this.setState({isACVisible: false})}
                                    title="Cancel"
                                    color = "black"/>

                            }

                        />
                    </View>


                    <Modal isVisible={this.state.isInputVisible} avoidKeyboard={true} backdropOpacity={0} style={styles.bottomModal}
                           animationIn ="slideInRight" animationOut = "slideOutDown">
                        <View style={styles.modalContentContainer}>
                            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                                <Text style={styles.header}>Create your event</Text>
                                <Button
                                    style={{paddingLeft: 40}}

                                    onPress = {()=>{
                                        this.setState({isInputVisible:false});
                                        setTimeout(() => {
                                            this.setState({isACVisible: false})},20)
                                    }}
                                    title="Cancel"
                                    color = "black"
                                />
                            </View>

                            <TouchableHighlight
                                onPress={() => this.setState({isInputVisible:false})}
                                activeOpacity= {0.2}
                                underlayColor= "#a5acb7"
                                style={{
                                    alignItems: 'center',
                                    backgroundColor: '#DDDDDD',
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    borderRadius: 1,
                                    borderColor: "black"
                            }}>
                                <Text numberOfLines={1}>
                                    {this.state.address}
                                </Text>
                            </TouchableHighlight>




                            <View style = {styles.firstRow}>
                                <TextInput style={styles.name}
                                           placeholder = "Name of Event"
                                           returnKeyType = 'done'
                                           onEndEditing ={(text) => this.setState({eventName: text})}
                                />
                                <TextInput style= {{flex: 1, backgroundColor: "#f4f8f4", textAlign: "center"}}
                                           placeholder = "emoji"
                                           returnKeyType = 'done'
                                           onEndEditing = {(text) => {
                                               str = reactStringReplace(text, nonSpacingRegex, (match, i) => (
                                                   <span key={i} style={{ color: 'red' }}>{match}</span>
                                               ));
                                               this.setState({emoji: str})
                                           }}
                                />
                            </View>

                            <View style={styles.secondRow}>


                                <ModalSelector
                                    overlayStyle={{flex: 1, padding: '5%', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)' }}
                                    style={styles.categories}
                                    data={data}
                                    initValue="Categories!"
                                    supportedOrientations={['portrait']}
                                    onChange={(option)=>{ this.setState({categories: option.value, categoryDescription: option.label})}}>

                                    <TextInput
                                        style={{textAlign: "center"}}
                                        editable={false}
                                        placeholder="Which kind of event is this?"
                                        value={this.state.categoryDescription} />
                                </ModalSelector>

                            </View>

                            <View style={styles.thirdRow}>
                                <TextInput style={styles.description}
                                           placeholder = "Event Description"
                                           returnKeyType = 'send'
                                           onChangeText ={(text) => this.setState({description: text})}
                                />
                            </View>

                            <View style={styles.fourthRow}>
                                <Picker
                                    style = {styles.picker}
                                    itemStyle = {styles.item}
                                    selectedValue={this.state.time}
                                    onValueChange={(itemValue, itemIndex) => this.setState({time: itemValue})}
                                    mode = 'dropdown'>
                                    <Picker.Item label="Now" value = "0"/>
                                    <Picker.Item label="In 1 Hour" value="1" />
                                    <Picker.Item label="In 2 Hours" value="2" />
                                    <Picker.Item label="In 3 Hours" value="3" />
                                    <Picker.Item label="In 4 Hours" value="4" />
                                    <Picker.Item label="In 5 Hours" value="5" />
                                </Picker>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"flex-end"}}>

                                <Button onPress = {()=>{
                                    this.setState({isInputVisible:false});
                                    setTimeout(() => {
                                    this.setState({isACVisible: false})},20)
                                }} title="Create" style={styles.create}/>
                            </View>
                        </View>
                    </Modal>
                </Modal>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    header: {
        fontSize: 22,
        flex: 1,
        color: "black",
        fontWeight: "bold",
        padding: 12
    },

    firstRow:{
        flexDirection: "row",
        backgroundColor: "#fbfffb"
    },
    secondRow:{
        flexDirection: "row",
        backgroundColor: "#fbfffb"
    },
    thirdRow:{
        flexDirection: "row",
        backgroundColor: "#fbfffb"
    },
    fourthRow:{
        flexDirection: "row",
        backgroundColor: "#fbfffb"

    },
    create:{
        backgroundColor: "#fbfffb",
        padding: 6,
        borderColor: "#fbfffb",
    },
    categories:{
        flex:1,
        padding:7,
        margin: 5
    },
    name: {
        flex: 4,
        textAlign: 'center',
        padding: 7,
        margin: 5
    },
    description:{
        textAlign: 'center',
        flex: 1,
        padding: 7,
        margin: 5
    },
    picker: {
        flex: 1,
        width: 100
    },
    item:{
        height: 100,
        fontSize: 19,
        borderColor: "#ffffff"
    },
    bottomModal:{
        justifyContent: 'flex-end',
        padding: 0,
        margin: 0,
        height: Dimensions.get('window').height * .5,
        width: Dimensions.get('window').width
    },

    modalContentContainer: {
        height: Dimensions.get('window').height * .55,
        width: Dimensions.get('window').width,
        backgroundColor: 'white'
    }



});


