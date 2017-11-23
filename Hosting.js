import React from 'react';
import { Button, Picker, StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal'; //Need to npm install react-native-modal --save
import { StackNavigator } from 'react-navigation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

//-1 represents empty values
export default class Hosting extends React.Component {
    constructor(props){
        super(props);
        this.state =
        {
            isModalVisible: false,
            eventName: "",
            category: "",
            description:"",
            time:""
        };
    }
    _showModal = () => this.setState({ isModalVisible: true});

    _hideModal = () => this.setState({ isModalVisible: false});



    _onCreate = () =>{
        info = [this.state.eventName, this.state.description, this.state.time];
        for(i=0; i<info.length; i++){
            console.log(info[i]);
        }
    };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Button
                    style={{height: 50}}
                    onPress={this._showModal}
                    title="Host"
                    color = "black"
                />
                {/*
                <Button
                    onPress={this._hideModal()}
                    title="Cancel"
                    color = "black"
                /> */}
                <Modal isVisible={this.state.isModalVisible} backdropOpacity={0} style={styles.bottomModal}
                        animationIn ="slideInUp">
                    <View style={styles.modalContentContainer}>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Text style={styles.header}>Create your event</Text>
                            <Button
                                onPress={() => this.setState({isModalVisible: false})}
                                title="Cancel"
                                color = "black"
                            />
                        </View>


                        {/*
                            <EmojiPicker set='emojione' />
                        <EmojiPicker onClick={this.addEmoji} />
                        <EmojiPicker title='Pick your emoji…' emoji='point_up' />
                        <EmojiPicker style={{ position: 'absolute', bottom: '20px', right: '20px' }} />
                        <EmojiPicker i18n={{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }}
                        */}
                        <View style = {styles.firstRow}>
                            <TextInput style={styles.name}
                                       placeholder = "Name of Event"
                                       returnKeyType = 'send'
                                       onEndEditing ={(text) => this.setState({eventName: text})}
                            />

                            {/*
                                <Dropdown style={styles.categories}
                                          label='Favorite Fruit'
                                          data={data}/>
                            */}


                            {/*
                                <Picker
                                style = {styles.picker}
                                selectedValue={this.state.language}
                                onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
                                mode = 'dropdown'>
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                                </Picker>
                            */}
                        </View>

                        {/*
                        <Dropdown style={styles.categories}
                                  label='Favorite Fruit'
                                  data={data}

                                  <Dropdown style={styles.when}
                                      label='In how many hours?'
                                      data={time}/>
                        />
                        */}



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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
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
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        height: 345,
        backgroundColor: "white",
        width: Dimensions.get('window').width,
        margin: 0,
    }



});


