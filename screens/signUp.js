import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native';

export default class SignUpForm extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <ScrollView>
        <KeyboardAvoidingView>
        {/**Sign up form */}
        <View style={Styles.formContainer}>
        <Text style={{ fontSize: 16, color: '#f4f4f4' }} >Personal Details</Text>
          <TextInput placeholder='Full Name*' style={Styles.inputs} />
          <TextInput keyboardType='phone-pad' placeholder='Mobile Number*' style={Styles.inputs} />
          <TextInput keyboardType='phone-pad' placeholder='12 digit Adhar Number*' style={Styles.inputs} />

          {/**Address */}
          <Text style={{ fontSize: 16, color: '#f4f4f4' }} >Address</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput keyboardType='phone-pad' placeholder='PIN code*' style={Styles.addressInputs} />
            <TextInput placeholder='Region*' style={Styles.addressInputs} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TextInput placeholder='Taluka' style={Styles.addressInputs} />
            <TextInput placeholder='Dist' style={Styles.addressInputs} />
            </View>
          <View style={{ flexDirection: 'row' }}>
            <TextInput placeholder='State' style={Styles.addressInputs} />
          </View>

          {/** Set password*/}
          <Text style={{ fontSize: 16, color: '#f4f4f4' }} >Set password</Text>
          <TextInput style={Styles.inputs} placeholder='Password' secureTextEntry={true} />
          <TextInput style={Styles.inputs} placeholder='Re-enter Password' secureTextEntry={true} />
          <TouchableOpacity>
            <View style={Styles.signUpBtn}>
              <Text>Register</Text>
            </View>
            </TouchableOpacity>
            
          </View>
          {/**End of signupform */}
          </KeyboardAvoidingView>
          </ScrollView>

      </View>
    );
  }
}


{/* Stylings */ }
const Styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#CF7500',
  },
  navbar: {
    height: 50,
    backgroundColor: '#1A1C20',
    justifyContent: "center",
  },
  brandLogo: {
    height: 40,
    width: 120,
    position: "absolute",
    right: 20,
  },
  breadCrumb: {
    position: "absolute",
    left: 40,
  },
  back: {
    height: 10,
    width: 10,
    backgroundColor: '#ffffff',
    position: "absolute",
    left: 20,
  },
  signUpText: {
    fontSize: 20,
    color: '#f4f4f4',
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: 20,
  },

  inputs: {
    borderBottomColor: '#f4f4f480',
    borderBottomWidth: 1,
    color: '#f4f4f4',
    fontSize: 16,
    marginBottom: 18,
    width: 320,
  },
  addressInputs: {
    borderBottomColor: '#f4f4f480',
    borderBottomWidth: 1,
    width: 150,
    marginRight: 20,
    marginBottom: 20,
  },
  signUpBtn: {
    backgroundColor: '#F0A500',
    height: 42,
    marginBottom: 30,
    width: 133,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    color: '#1A1C20',
  }

});