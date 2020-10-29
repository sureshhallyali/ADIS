import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput, 
    Image
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class Cows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    image: "",
                    name: "Akash",
                    Eid: "",
                    breed: "",
                    age: ""
                },
                {
                    id: 2,
                    image: "",
                    name: "Vishwa",
                    Eid: "",
                    breed: "",
                    age: ""
                },
                {
                    id: 3,
                    image: "",
                    name: "Suraj",
                    Eid: "",
                    breed: "",
                    age: ""
                },
                {
                    id: 4,
                    image: "",
                    name: "Gangadhar",
                    Eid: "",
                    breed: "",
                    age: ""
                },
                {
                    id: 5,
                    image: "",
                    name: "Suresh",
                    Eid: "",
                    breed: "",
                    age: ""
                },
                {
                    id: 6,
                    image: "",
                    name: "Janaki",
                    Eid: "",
                    breed: "",
                    age: ""
                },
                {
                    id: 7,
                    image: "",
                    name: "Jethalal",
                    Eid: "",
                    breed: "",
                    age: ""
                },
                {
                    id: 8,
                    image: "",
                    name: "Popatlal",
                    Eid: "",
                    breed: "",
                    age: ""
                }
            ]
        }
        
    }
    render() {
        return (
            <FlatList
                style={Styles.root}
                data={this.state.data}
                extraData={this.state}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={Styles.separator} />
                    )
                }}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={(item) => {
                    const Cow = item.item;
                    let mainContentStyle;
                    if (Cow.attachment) {
                        mainContentStyle = Styles.mainContent;
                    }
                    return (
                        <View style={Styles.container}>
                            <View style={Styles.thumbnail}>

                            </View>
                            <View style={Styles.details}>
                                <Text>EId: {Cow.Eid}</Text>
                                <View style={Styles.row}>
                                    <Text>Name: {Cow.name}</Text>
                                    <Text>Breed: {Cow.name}</Text>
                                </View>
                                <View style={Styles.row}>
                                    <Text>Age: {Cow.name}</Text>
                                    <Text>Breed: {Cow.name}</Text>
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
        );
    }
}

export default class CowDetails extends Component {
    render() {
        return (
            <View>
                {/* search box */}
                <View style={Styles.searchWrapper}>
                    <View style={Styles.iconWrapper}>
                        <FontAwesome5 name={'search'} size={15} />
                    </View>
                    <TextInput
                        placeholder='search'
                        style={Styles.searchInput} />
                </View>
                <Cows />
            </View>
            
            
        );
        
    }
    
}

const Styles = StyleSheet.create({
    root: {
        backgroundColor: '#f4f4f4'
    },
    container: {
        padding: 20,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        alignItems: 'flex-start',
        marginTop: 20
    },
    searchWrapper: {
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 10
    },
    iconWrapper: {
        width: 50,
        height: 42,
        backgroundColor: '#ffffff',
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 21,
        borderBottomLeftRadius: 21
    },
    searchInput: {
        width: 350,
        height: 42,
        backgroundColor: '#ffffff',
        borderTopRightRadius: 21,
        borderBottomRightRadius: 21

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }


});    