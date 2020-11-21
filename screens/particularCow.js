import React, { Component } from 'react';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Modal, Image, StyleSheet, Animated, ScrollView, Dimensions, Linking, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const { width } = Dimensions.get("window");

class Cows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    cowid: "7026785526-ramdaspatil-67gir5566",
                    image: "https://us.123rf.com/450wm/photographerriju/photographerriju1805/photographerriju180500046/102164539-a-indian-baby-cow.jpg?ver=6",
                    name: "Mahadevi",
                    tagNumber: 56278282,
                    breed: "gir",
                    age: "2",
                    sex: "F",
                    species: "cow",
                    insurance: "yes"
                },
                
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
                        <View>
                            <View style={Styles.divider}>
                            <View style={Styles.row}>
                                    <Text style={Styles.left}>Cow id:</Text>
                                    <Text style={{}}>{Cow.cowid}</Text>
                                </View>
                                <View style={Styles.row}>
                                    <Text style={Styles.left}>Name</Text>
                                    <Text style={Styles.right}>{Cow.name}</Text>
                                </View>
                                <View style={Styles.row}>
                                    <Text style={Styles.left}>Age</Text>
                                    <Text style={Styles.right}>{Cow.age}</Text>
                                    <Text style={Styles.left}>Insurance</Text>
                                    <Text style={Styles.right}>{Cow.insurance}</Text>
                                </View>
                                <View style={Styles.row}>
                                    <Text style={Styles.left}>Tag Number</Text>
                                    <Text style={Styles.right}>{Cow.tagNumber}</Text>
                                    <Text style={Styles.left}>Breed</Text>
                                    <Text style={Styles.right}>{Cow.breed}</Text>
                                </View>
                                <View style={Styles.rowLast}>
                                    <Text style={Styles.left}>Sex</Text>
                                    <Text style={Styles.right}>{Cow.sex}</Text>
                                    <Text style={Styles.left}>Species</Text>
                                    <Text style={Styles.right}>{Cow.species}</Text>
                                </View>
                                
                            </View> 
                        </View>    
                    );
                }}
            />
        );
    }
}

export default class Cowdetails extends Component {
    
    state = {
        active: 0,
        xbtn1: 0,
        xbtn2: 0,
        translateX: new Animated.Value(0),
        translateXMuzzleTab: new Animated.Value(width),
        translateXFeatureTab: new Animated.Value(0),
        translateY: -1000,
        modalOpen: false
            
    }

    handleSlide = type => {
        let { translateX, active, xbtn1, xbtn2, translateXMuzzleTab, translateXFeatureTab } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100,
            useNativeDriver: true
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXFeatureTab, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true
                }).start(),
                Animated.spring(translateXMuzzleTab, {
                    toValue: width,
                    duration: 100,
                    useNativeDriver: true
                }).start(),
            ])
        }
        else {
            Animated.parallel([
                Animated.spring(translateXFeatureTab, {
                    toValue: -width,
                    duration: 100,
                    useNativeDriver: true
                }).start(),
                Animated.spring(translateXMuzzleTab, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true
                }).start(),
            ])
        }
    }

    setModalVisible = (visible) => {
        this.setState({ modalOpen: visible });
      }
    render() {
        const { modalOpen } = this.state;
        let { translateY, translateXFeatureTab, xbtn1, xbtn2, translateX, active, translateXMuzzleTab } = this.state;
        return (
            <>
                <ScrollView>
            <View style={Styles.container}>
                {/* latest updated status */}
                <View style={Styles.updateStatus}>

                    <TouchableOpacity
                                style={[Styles.Btn, Styles.sell]}
                                onPress={() => {
                                    this.setModalVisible(true);
                                  }}
                        >
                        <Text style={Styles.text}>Sell</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Styles.Btn, Styles.edit]}>
                        <Text style={Styles.text}>Edit</Text>
                    </TouchableOpacity>
                        <Text style={{ color: "#fff" }}><Text style={{ fontSize: 14, fontWeight: '400', color: '#eee' }}>Last Updated: </Text> 12/10/2020</Text>
                </View>
                <Modal
                            visible={modalOpen}
                            animationType="slide"
                            transparent={true}
                        >
                            <View style={{width:"100%", height: "100%", backgroundColor: "rgba(0,0,0,0.7)"}} />
                            <View style={Styles.sellPopUp}>
                                <FontAwesome
                                    size={30}
                                    name={"times"}
                                    color="#808080"
                                    onPress={() => {
                                        this.setModalVisible(false);
                                      }}
                                />
                                <Text style={{fontSize:16, marginTop:30, marginBottom: 10}}>Enter the base price</Text>
                                <View style={{flexDirection:"row", justifyContent: "center", alignItems: "center"}}>
                                    <TextInput
                                        style={Styles.priceInput}
                                        placeholder="base price in Rs."
                                        keyboardType="number-pad"
                                    />
                                    <View style={{marginLeft: 10}}>
                                        <Button
                                            title="confirm"
                                            color="#cf7500"
                                        />
                                    </View>
                                </View>
                            </View>      
                </Modal>
                {/* details of the cow */}
                <View style={Styles.detailsHead}>
                    <Text style={Styles.detailsText}>Details</Text>
                </View>
                <Cows />
                {/* Images of the cow */}
                <View style={Styles.imageContainer}>
                    <View style={Styles.imagesHeader}>
                        <Animated.View style={{
                            position: "absolute",
                            width: "50%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            backgroundColor: "#cf7500",
                            borderRadius: 4,
                            transform: [{
                                translateX
                            }]
                        }} />
                        <TouchableOpacity
                            style={Styles.btn1}
                            onLayout={event =>
                                this.setState({
                                    xbtn1: event.nativeEvent.layout.x
                                })}
                            onPress = {() => this.setState({ active: 0 }, () => this.handleSlide(xbtn1))}
                        >
                            <Text style={{color: active === 0 ? "#f4f4f4": "#cf7500"}}>Feature Images</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Styles.btn2}
                            onLayout={event => this.setState({ xbtn2: event.nativeEvent.layout.width+1 })}
                            onPress = {() => this.setState({active: 1}, () => this.handleSlide(xbtn2))}
                        >
                            <Text style={{color: active === 1 ? "#f4f4f4": "#cf7500"}}>Muzzle Images</Text>
                        </TouchableOpacity>
                        </View>
                        
                </View>
               
                {/* feature images */}
                <SafeAreaView>
                    <Animated.View style={{
                            justifyContent: "center",
                        alignItems: "center",
                            transform: [{
                                translateX: translateXFeatureTab
                        }]
                    }}
                        onLayout= {event => this.setState({translateY: event.nativeEvent.layout.height})}
                        >
                            <Image style={Styles.img} source={require("../assets/images/cow.jpg")} />
                    
                    </Animated.View>
                        
                {/**muzzle images */}
                <Animated.View style={{
                    justifyContent: "center",
                    alignItems: "center",
                        transform: [
                            {
                                translateX: translateXMuzzleTab
                            },
                            {
                                translateY: -translateY
                            }
                    ]
                        }}>
                            <Image style={Styles.img} source={require("../assets/images/cowMuzzle.jpg")} />
                </Animated.View>
                    </SafeAreaView>
                    </View>
                    </ScrollView>
            </>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: "#f4f4f4",
    },
    updateStatus: {
        flexDirection: "row",
        backgroundColor: "#f0a500",
        padding: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#f4f4f4"
    },
    Btn: {
        height: 32,
        width: 60,
        backgroundColor: "blue",
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    sell: {
        backgroundColor: "#1a1c20",
    },
    edit: {
        backgroundColor: "#cf7500",
        marginRight: 50
    },
    detailsHead: {
        padding: 5,
        marginLeft: 15
    },
    detailsText: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#313335"
    },
    row: {
        flexDirection: "row",
        padding: 10,
        marginBottom: 4,
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: "#FCE2C0",
        marginLeft: 'auto',
        marginRight: 'auto'
        
    },
    rowLast: {
        flexDirection: "row",
        padding: 10,
        marginBottom: 10,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto'
        
    },
    left: {
        width: 90,
        color: "#808080",
        fontSize: 14,
    },
    right: {
        width: 90,
    },
    imageContainer: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
    },
    imagesHeader: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
        alignSelf: "center"
    },
    btn1: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#cf7500",
        borderRightWidth: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRadius: 4,
        paddingLeft: "10%",
        paddingRight: "10%",
        height: 36
    },
    btn2: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderRadius: 4,
        borderColor: "#cf7500",
        paddingLeft: "10%",
        paddingRight: "8%",
        height: 36,
    },
    img: {
        width: 300,
        height: 300,
        margin: 2,
        borderRadius: 4
    },
    sellPopUp: {
        width: "100%",
        height: "30%",
        backgroundColor: "#ffffff",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    priceInput: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 50
    }
    
    
});