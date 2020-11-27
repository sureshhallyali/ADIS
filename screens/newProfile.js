import React,{ Component} from 'react';
import {Text, View,Image, ScrollView,StyleSheet, touchableHeightLight, TochableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage'

class Profile extends Component{

  constructor(props){  
    super(props);  
} 
 state = {
    UserPhone: "",
    UserName:"",
    UserAadhar:"",
    UserRegion:"",
    UserPincode:"",
    UserState:"",
    UserCows:"",
    UserData:"",
    UserEid:"",
  }

    _loadInitialState=async()=>{
        var name = await AsyncStorage.getItem('name');
        var aadhar = await AsyncStorage.getItem('aadhar');
        var phone = await AsyncStorage.getItem('phone');
        var state = await AsyncStorage.getItem('state');
        var region = await AsyncStorage.getItem('region');
        var pincode = await AsyncStorage.getItem('pincode');
        
        this.setState({UserEid:await AsyncStorage.getItem('electronicId')})
        this.setState({Username:name})
        this.setState({UserAadhar:aadhar})
        this.setState({UserPhone:phone})
        this.setState({UserState:state})
        this.setState({UserRegion:region})
        this.setState({UserPincode:pincode})

        console.log(aadhar,phone)
      }
        render(){
            return(
                <View style={styles.container}>
                    <ScrollView>
                        <View style={styles.profileImage}></View> 
                        <View>
                            {/* <Icon name="account-circle" size={150 } style={{color: 'blue', marginTop:-85, padding:10,}}  /> */}
                            <Image source={require('../images/no-profile-picture.jpg')}  style={{ width:140,height:140,borderRadius: 150, marginTop:-70, padding:10, marginLeft:15}}/>
                        </View>
                        <View style={{alignItems:'center'}}>
                                    <Text style={{color:"#000",fontWeight:'bold',fontSize:25}}>Prasad Desai</Text>
                                    <Text style={{color:"grey",fontSize:15}}>25, Male</Text>
                        </View>
                        <View style={styles.profileDetails}>
                                  <Icon size={30} name={'account-settings'}/> 
                                  <Text>Moble No. 8884515968</Text>
                        </View>
                          <View style={styles.profileDetails}>
                                  <Icon size={30} name={'account-settings'}/> 
                                  <Text>Adhar No. 8884515968</Text>
                        </View>
                          <View style={styles.profileDetails}>
                                  <Icon size={30} name={'account-settings'}/> 
                                  <Text>Moble No. 8884515968</Text>
                        </View>
                    </ScrollView>
                </View>
            );
        }
}

export default Profile;

const styles = StyleSheet.create({  
    container: {
         backgroundColor:'#dddd',
         flex: 1,
    },
    profileImage:{
        backgroundColor:'#000',
        height:150
    },
    profileDetails:{
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:"#fff",
        width:'90%',
        padding:20,
        borderRadius:10,
        shadowOpacity:80,
        elevation:15,
        marginTop:20
    },
})
