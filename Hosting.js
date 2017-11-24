import React from 'react';
import {ScrollView, Button, Picker, StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal'; //Need to npm install react-native-modal --save
import { StackNavigator } from 'react-navigation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


export default class Hosting extends React.Component {
    constructor(props){
        super(props);
        this.state =
        {
            isACVisible: true,
            isInputVisible: false,
            eventName: "",
            category: "",
            description:"",
            time:""
        };
    }
    _showModal = () => this.setState({ isACVisible: true});
    _hideModal = () => this.setState({ isModalVisible: false});

    _onCreate = () =>{
        info = [this.state.eventName, this.state.description, this.state.time];
        for(i=0; i<info.length; i++){
            console.log(info[i]);
        }
    };



    render() {

        return (
            <View style={styles.container}>

                {/*<Button
                    style={{height: 50}}
                    onPress={this._showModal}
                    title="Host"
                    color = "black"
                />*/}
                <Modal isVisible={this.state.isACVisible} backdropOpacity={0} style={styles.bottomModal}
                       animationIn ="slideInUp">
                    <View style={styles.modalContentContainer}>

                        <GooglePlacesAutocomplete
                            placeholder='Where?'
                            minLength={2} // minimum length of text to search
                            autoFocus={false}
                            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                            listViewDisplayed='auto'    // true/false/undefined
                            fetchDetails={true}
                            renderDescription={row => row.description} // custom description render
                            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                                console.log(data, details);
                                this.setState({isInputVisible: true});
                            }}

                            getDefaultValue={() => ''}

                            query={{
                                // available options: https://developers.google.com/places/web-service/autocomplete
                                key: 'AIzaSyAvWx1p36lAqWnIBsOMHJeW1MKF_98uYE8',
                                language: 'en', // language of the results
                                types: 'establishment' // default: 'geocode'
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
                            nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
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
                                    onPress={() => this.setState({isACVisible: false, isInputVisible:false})}
                                    title="Cancel"
                                    color = "black"/>

                            }

                        />
                    </View>


                    <Modal isVisible={this.state.isInputVisible} backdropOpacity={0} style={styles.bottomModal}
                           animationIn ="slideInUp">
                        <View style={styles.modalContentContainer}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Text style={styles.header}>Create your event</Text>
                                <Button
                                    onPress={() => this.setState({isInputVisible: false, isACVisible: false})}
                                    title="Cancel"
                                    color = "black"
                                />
                            </View>

                            <View style = {styles.firstRow}>
                                <TextInput style={styles.name}
                                           placeholder = "Name of Event"
                                           returnKeyType = 'send'
                                           onEndEditing ={(text) => this.setState({eventName: text})}
                                />
                            </View>

                            <View style={styles.secondRow}>
                                <TextInput style={styles.categories}
                                           placeholder = "Category"
                                           returnKeyType = 'send'
                                           onChangeText ={(text) => this.setState({text})}
                                />
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
                                    <Picker.Item label="In 1 Hour" value="1" />
                                    <Picker.Item label="In 2 Hours" value="2" />
                                    <Picker.Item label="In 3 Hours" value="3" />
                                    <Picker.Item label="In 4 Hours" value="4" />
                                    <Picker.Item label="In 5 Hours" value="5" />
                                </Picker>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
                                <Button onPress= {this._onCreate()} title="Create" style={styles.create}/>
                            </View>
                        </View>
                    </Modal>

                </Modal>


            </View>
        );
    }
}

/*
export class Autocomplete extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            address: "",
            isModalVisible: false
        }
    }

    render(){
        return(
            <View style={styles.container}>

                    <Button
                        style={{padding:20}}
                        onPress={() => this.setState({ isModalVisible: true})}
                        title="Host"
                        color = "black"
                    />

                <Modal isVisible={this.state.isModalVisible} backdropOpacity={0} style={styles.bottomModal}
                       animationIn ="slideInUp">
                    <View style={styles.modalContentContainer}>

                        <GooglePlacesAutocomplete
                            placeholder='Where?'
                            minLength={2} // minimum length of text to search
                            autoFocus={false}
                            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                            listViewDisplayed='auto'    // true/false/undefined
                            fetchDetails={true}
                            renderDescription={row => row.description} // custom description render
                            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                                console.log(data, details);
                                this.props.navigation.navigate('Hosting')
                            }}

                            getDefaultValue={() => ''}

                            query={{
                                // available options: https://developers.google.com/places/web-service/autocomplete
                                key: 'AIzaSyAvWx1p36lAqWnIBsOMHJeW1MKF_98uYE8',
                                language: 'en', // language of the results
                                types: 'establishment' // default: 'geocode'
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
                                powered:{
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
                            nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
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


                            /!*renderLeftButton={()  => <Icon class="fa fa-search" aria-hidden="true"></Icon>}*!/
                            renderRightButton={() =>
                                    <Button
                                    style={{marginTop: 200}}
                                    onPress={() => this.setState({isModalVisible: false})}
                                    title="Cancel"
                                    color = "black"/>

                            }

                        />
                    </View>

                 </Modal>
            </View>
        );
    }

}
*/


/*const ModalStack = StackNavigator({
    Home: {
        screen: Hosting
    },
    Hosting: {
        screen: Autocomplete
    },
});

export default class App extends React.Component {
    render() {
        return <ModalStack/>;
    }
}*/


const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#fff",
        alignItems: "center"

    },
    header: {
        fontSize: 30,
        color: "black",
        fontWeight: "bold",
        padding: 12
    },

    firstRow:{
        flexDirection: "row",
        backgroundColor: "#99baef"
    },
    secondRow:{
        flexDirection: "row",
        backgroundColor: "#8defea"
    },
    thirdRow:{
        flexDirection: "row",
        backgroundColor: "#9effcb"
    },
    fourthRow:{
        flexDirection: "row",
        backgroundColor: "#d2f4d7"

    },
    create:{
        backgroundColor: "#9effcb",
        padding: 5,
        borderColor: "#9effcb",
    },
    categories:{
        flex:1,
        textAlign: 'center',
        padding:7,
        margin: 5
    },
    name: {
        flex: 1,
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
    },

    modalContentContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        height: 345,
        backgroundColor: "white",
        width: Dimensions.get('window').width,
        margin: 0,
    }



});


