import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
class Recognisation extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <ScrollView
          contentContainerStyle={
            {
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: "center"
            }}
            showsVerticalScrollIndicator ={false}
        >
                {/* QR scanner */}
                    <Text style={Styles.label}>Barcode Scan</Text>
        <View style={Styles.qrScannerWrapper}>
            <View style={Styles.qrWrapper}>
                <TextInput placeholder="E-ID" style={Styles.eIdField} />
                <View style={Styles.verticleLine} />
                    <View style={Styles.iconWrapper}>
                        <TouchableOpacity>
                            <Icon name={'barcode-scan'} size={25} color={'#A5A5A5'} />
                        </TouchableOpacity>
                    </View>
                <TouchableOpacity onPress={() => { alert("fetching.....") }}>
                    <View style={Styles.fetchBtn}>
                        <Text style={{ color: '#f4f4f4', fontWeight: '400', fontSize: 16 }}>Submit</Text>
                    </View>
                </TouchableOpacity>
             </View>
                </View>
                <View style={Styles.maindivider} />
            {/* Image uploding */}
        <Text style={Styles.label}>Upload image</Text>     
                <View style={Styles.imageContainer}>
                <TouchableOpacity>
                    <Image
                        style={Styles.img}
                        source={require('../assets/images/default-placeholder.png')}
                    />
                </TouchableOpacity>
            </View>
        <TouchableOpacity>
          <View style={Styles.fetchBtn}>
            <Text style={{ color: '#f4f4f4', fontWeight: '400', fontSize: 16 }}>Submit</Text>
          </View>
          </TouchableOpacity>
          </ScrollView>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f4f4f4'
  },
  header: {
    height: 50,
    width:  800,
    backgroundColor: '#1A1C20',
  },
  imageContainer: {
    width: 250,
    height: 250,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    height: 200,
    width: 200
  },
  label: {
    fontSize: 20,
      fontWeight: '400',
  },
qrScannerWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  input: {
    width: 180,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#757373'
  },
  qrWrapper: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
  },
    iconWrapper: {
        height: 41,
        width: 60,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderColor: '#B3B3B3',
        justifyContent: 'center',
        alignItems: "center",
  },
    eIdField: {
        width: 160,
        height: 41,
        borderColor: '#B3B3B3',
        borderWidth: 1,
        borderRightWidth: 0,
        //borderBottomLeftRadius: 10,
        //borderTopLeftRadius: 10,
      },
  fetchBtn: {
    width: 80,
    height: 42,
    borderRadius: 8,
    backgroundColor: '#1a1c20',
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10
    },
verticleLine: {
    height: 30,
    borderRightWidth: 1,
    borderColor: 'gray'     
    },
    divider: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
        
    },
    hr: { 
        width: 50,
        height: 2,
        backgroundColor: '#f0a500',
        marginLeft: 10,
        marginRight: 10
    },
    maindivider: {
        height: 2,
        backgroundColor: '#f0a500',
        width: 320,
        marginTop: 50,
        marginBottom: 30
    }

});

export default Recognisation;