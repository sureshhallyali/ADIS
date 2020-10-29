import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default class SignUpForm extends Component {
    show = () => {
        this.props.navigation.navigate('CowDetails');
    }
  render() {
    return (
      <View style={Styles.container}>
        <ScrollView>
          {/*Menu list */}
          <View style={Styles.menu}>
          <View style={Styles.menuList}>
            <TouchableOpacity style={Styles.menuItem}>
              {/* icon for menu item */}
              <View>
                <Icon name={'cow'} size={60} color={'#f4f4f4'}/>
              </View>
              {/*Lable for menu item */}
              <Text style={Styles.menuText}>Cow Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.show} style={Styles.menuItem}>
              {/* icon for menu item */}
              <View>
              <FontAwesome5 name={'list-alt'} size={60} color={'#f4f4f4'}/>
              </View>
              {/*Lable for menu item */}
              <Text style={Styles.menuText}>Cow Details</Text>
            </TouchableOpacity>
          </View>

          <View style={Styles.menuList}>
            <TouchableOpacity style={Styles.menuItem}>
              {/* icon for menu item */}
              <View>
                <FontAwesome5 name={'opencart'} size={60} color={'#f4f4f4'}/>
              </View>
              {/*Lable for menu item */}
              <Text style={Styles.menuText}>desistores.in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.menuItem}>
              {/* icon for menu item */}
              <View>
              <FontAwesome5 name={'stethoscope'} size={60} color={'#f4f4f4'}/>
              </View>
              {/*Lable for menu item */}
              <Text style={Styles.menuText}>Insurance</Text>
            </TouchableOpacity>
          </View>

          <View style={Styles.menuList}>
            <TouchableOpacity onPress = {this.show} style={Styles.menuItem}>
              {/* icon for menu item */}
              <View>
              <FontAwesome5 name={'paw'} size={60} color={'#f4f4f4'}/>
              </View>
              {/*Lable for menu item */}
              <Text style={Styles.menuText}>Breeding</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.menuItem}>
              {/* icon for menu item */}
              <View>
              <FontAwesome5 name={'sign-out-alt'} size={60} color={'#f4f4f4'}/>
              </View>
              {/*Lable for menu item */}
              <Text style={Styles.menuText}>Log out</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: '#f4f4f4',
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
    left: 20,
  },
  signUpText: {
    fontSize: 20,
    color: '#f4f4f4',
  },
  menu: {
    marginTop: 40,
  },
  menuList: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
  },
  menuItem: {
    height: 140,
    width: 140,
    backgroundColor: '#F0A500',
    margin: 20,
    borderRadius: 160 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    fontSize: 16,
    color: '#f4f4f4',
    fontWeight:  '600',
  }
  
});