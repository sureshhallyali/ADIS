import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput, 
    Image
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class Cows extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    image: "https://us.123rf.com/450wm/photographerriju/photographerriju1805/photographerriju180500046/102164539-a-indian-baby-cow.jpg?ver=6",
                    name: "Akash",
                    Eid: "123akash",
                    breed: "xyz",
                    age: "2",
                    sex: "F"
                },
                {
                    id: 2,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7uPExREabQRj1mgQW9zkgOP59Vlem1l-HWQ&usqp=CAU",
                    name: "Vishwa",
                    Eid: "456vishwa",
                    breed: "abc",
                    age: "10",
                    sex: "F"
                },
                {
                    id: 3,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRo0MfWN3m3Lf-ILb9QdIDTBXKp3LDtH0jfpg&usqp=CAU",
                    name: "Suraj",
                    Eid: "676suraj",
                    breed: "yzx",
                    age: "23",
                    sex: "F"
                },
                {
                    id: 4,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR59UyWNHe3dq7qYDd9OxxRXnkdju7QSm4AQA&usqp=CAU",
                    name: "Gangadhar",
                    Eid: "782ganga",
                    breed: "jcb",
                    age: "10",
                    sex: "F"
                },
                {
                    id: 5,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwGEDyJASDBTcT2GMkqr_0PZh2WyWy3cfe0Q&usqp=CAU",
                    name: "Suresh",
                    Eid: "881suresh",
                    breed: "abc",
                    age: "4",
                    sex: "F"
                },
                {
                    id: 6,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7uPExREabQRj1mgQW9zkgOP59Vlem1l-HWQ&usqp=CAU",
                    name: "Janaki",
                    Eid: "671jana",
                    breed: "gir",
                    age: "13",
                    sex: "F"
                },
                {
                    id: 7,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRo0MfWN3m3Lf-ILb9QdIDTBXKp3LDtH0jfpg&usqp=CAU",
                    name: "Jethalal",
                    Eid: "578jetha",
                    breed: "xyz",
                    age: "14",
                    sex: "F"
                },
                {
                    id: 8,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR59UyWNHe3dq7qYDd9OxxRXnkdju7QSm4AQA&usqp=CAU",
                    name: "Popatlal",
                    Eid: "676popat",
                    breed: "xyz",
                    age: "8",
                    sex: "F"
                }
            ]
        }
        
    }

    
    
    render() {
        return (
            <FlatList
                showsVerticalScrollIndicator ={false}
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
                                <Image style={Styles.thumbnailImg} source={{uri:Cow.image}} />
                            </View>
                            <View style={Styles.details}>
                                <Text style={Styles.eId}>{Cow.Eid}</Text>
                                <View style={Styles.row}>
                                    <Text style={Styles.info}><Text style={Styles.bold}>Name:</Text> {Cow.name}</Text>
                                    <Text style={Styles.info}><Text style={Styles.bold}>Breed:</Text> {Cow.breed}</Text>
                                </View>
                                <TouchableOpacity onPress={this.show} >
                                    <View style={Styles.viewBtn} >
                                        <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: "600"}}>View Details</Text>
                                    </View>
                                </TouchableOpacity>
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
                        <FontAwesome5 name={'search'} size={15} color={'#525252'} />
                    </View>
                    <TextInput
                        placeholder='search'
                        style={Styles.searchInput} />
                </View>
                <SafeAreaView>
                    <Cows />
                    </SafeAreaView>
            </View>
            
            
        );
        
    }
    
}

const Styles = StyleSheet.create({
    root: {
        backgroundColor: '#f4f4f4'
    },
    container: {
        padding: 15,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        alignItems: 'flex-start',
        marginTop: 10,
    },
    searchWrapper: {
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 10,
        height: 55,
        backgroundColor: '#f4f4f4'
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
        width: 300,
        height: 42,
        backgroundColor: '#ffffff',
        borderTopRightRadius: 21,
        borderBottomRightRadius: 21
    },
    row: {
        flexDirection: 'row',
        width: 300,
        marginTop: 10
    },
    thumbnailImg: {
        width: 95,
        height: 95,
        borderRadius: 16
    },
    thumbnail: {
        flex: 2
    },
    details: {
        flex: 4,
        width: 100
    },
    info: {
        width: 120,
        fontSize: 13,
    },
    viewBtn: {
        flex: 1,
        backgroundColor: '#F0A500',
        padding: 8,
        borderRadius: 4,
        marginTop: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    bold: {
        fontWeight: "bold",
        fontSize: 14,
        color: '#525252'
    },
    eId: {
        color: '#CF7500',
        fontSize: 16
    }


});    