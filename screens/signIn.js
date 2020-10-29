import React, {Component, StatusBar} from 'react';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default class SignIn extends Component {
    show = () => {
        this.props.navigation.navigate('Home');
    }
    showSignUp = () => {
        this.props.navigation.navigate('SignUp');
    }
    render() {
        return (
            <View style={Styles.Container}>
      
                {/* Brand logo */}
                <View Style={Styles.brandPlacer}>
                    <Image
                        source={require('../assets/images/brandLogo.png')}
                        style={Styles.tinylogo}
                    />
                </View>
      
                {/* Mobile number entry field */}
                <View style={Styles.MobNumWrapper}>
                    <View style={Styles.iconWrapper}>
                        <FontAwesome5 name={'user-alt'} size={15} color={'#A5A5A5'} />
                    </View>
                    <TextInput placeholder="Mobile Number" style={Styles.mobNumField} />
                </View>

                {/* Password number entry field */}
                <View style={Styles.PasswordWrapper}>
                    <View style={Styles.iconWrapper}>
                        <FontAwesome5 name={'lock'} size={15} color={'#A5A5A5'} />
                    </View>
                    <TextInput secureTextEntry={true} placeholder="Password" style={Styles.mobNumField} />
                </View>

                {/* forgot password link */}
                <Text style={{ color: '#f4f4f4', fontFamily: 'Segoe UI', fontSize: 16, fontWeight: '400', }}>forgot password?</Text>
      

                {/* sign in butten */}
                <TouchableOpacity onPress={this.show}>
                    <View style={Styles.signInBtn}>
                        <Text style={{ color: '#f4f4f4', fontFamily: 'Segoe UI', fontSize: 18, fontWeight: '400', }}>Sign In</Text>
                    </View>
                </TouchableOpacity>

                {/* or text */}
                <Text style={{ color: '#f4f4f4', marginTop: 10, fontFamily: 'Segoe UI', fontSize: 20, fontWeight: '600' }}>or</Text>

                {/* sign up butten */}
                <TouchableOpacity onPress={this.showSignUp}>
                <View style={Styles.signUpBtn}>
                    <Text style={{ color: '#1a1c20', fontFamily: 'Segoe UI', fontSize: 18, fontWeight: '400', }}>Sign Up</Text>
                    </View>
                    </TouchableOpacity>

            </View>
        );
    }
}




const Styles = StyleSheet.create ({
  Container: {
    flex: 1,
    backgroundColor: "#cf7500",
    justifyContent: "center",
    alignItems: "center",
  },


  tinylogo: {
    height: 100,
    width: 80,
    marginTop: 50,
  },

  MobNumWrapper: {
    flexDirection: "row",
    marginTop: 30,
  },

  PasswordWrapper: {
    flexDirection: "row",
    marginTop: 30,
  },

  iconWrapper: {
    height: 41,
    width: 40,
    borderBottomLeftRadius: 21,
    borderTopLeftRadius: 21,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: "center",
  },
  mobNumField: {
    width: 240,
    height: 41,
    borderBottomRightRadius: 21,
    borderTopRightRadius: 21,
    backgroundColor: '#f4f4f4',
  },
  passwordField: {
    width: 240,
    height: 41,
    borderBottomRightRadius: 21,
    borderTopRightRadius: 21,
    backgroundColor: '#f4f4f4',
  },

  signInBtn: {
    marginTop: 45,
    width: 133,
    height: 42,
    borderRadius: 46,
    backgroundColor: '#1a1c20',
    justifyContent: "center",
    alignItems: "center",
  },

  signUpBtn: {
    marginTop: 10,
    width: 133,
    height: 42,
    borderRadius: 46,
    backgroundColor: '#f0a500',
    justifyContent: "center",
    alignItems: "center",
  },

});


