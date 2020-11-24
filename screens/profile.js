import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default class SignUpForm extends Component {
  render() {
    return (    
        <View style={Styles.container}>
            <ScrollView>
                {/* profile status and photo */}
                <View style={Styles.profileTop}>
                    <View style={Styles.wrapper}>
                        <Image
                            style={Styles.img}
                            source={require("../assets/images/w.jpeg")}
                        />
                        <Text style={Styles.userName} >Alex Hells</Text>
                    </View>
                </View>

                <View style={Styles.details}>
                    <Text>PUT all data here</Text>
                    <TouchableOpacity style={Styles.logoutnbtn}>
                        <Text style={{color:"#f4f4f4", fontWeight: "600", fontSize: 16}}>Log out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
  }
}


{/* Stylings */ }
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f4",
    },
    profileTop: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#CF7500",
        width: "100%",
        height: 280,
        padding: 50,
    },
    wrapper: {
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100/2
    },
    userName: {
        fontSize: 20,
        fontWeight: "800",
        marginTop: 12,
        color: "#f4f4f4"
    },
  
    details: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },
    logoutnbtn: {
        marginTop: 20,
        backgroundColor: "#1A1C20",
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 4
    }

  
  
});