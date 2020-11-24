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
          <View style={Styles.menuList}>
            <View style={Styles.row}>
              <View>
                <TouchableOpacity style={Styles.menuItem}>
                  <Icon
                    name={'format-list-bulleted'}
                    color="#f4f4f4"
                    size={60}
                  />
                </TouchableOpacity>
                <Text style={Styles.menuText}>My Cows</Text>
              </View>
              <View>
                <TouchableOpacity style={Styles.menuItem}>
                  <Icon
                    name={'cow'}
                    color="#f4f4f4"
                    size={60}
                  />
                </TouchableOpacity>
                <Text style={Styles.menuText}>Register Cow</Text>
              </View>
            </View>
            <View style={Styles.row}>
              <View>
                <TouchableOpacity style={Styles.menuItem}>
                  <Icon
                    name={'fingerprint'}
                    color="#f4f4f4"
                    size={60}
                  />
                </TouchableOpacity>
                <Text style={Styles.menuText}>Cow Recognition</Text>
              </View>
              <View>
                <TouchableOpacity style={Styles.menuItem}>
                  <Icon
                    name={'store-outline'}
                    color="#f4f4f4"
                    size={60}
                  />
                </TouchableOpacity>
                <Text style={Styles.menuText}>Desistores.in</Text>
              </View>
            </View>
            <View style={Styles.row}>
              <View>
                <TouchableOpacity style={Styles.menuItem}>
                  <Icon
                    name={'storefront-outline'}
                    color="#f4f4f4"
                    size={60}
                  />
                </TouchableOpacity>
                <Text style={Styles.menuText}>Cow Store</Text>
              </View>
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
  menuList: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row"
  },
  menuItem: {
    height: 100,
    width: 100,
    backgroundColor: '#F0A500',
    margin: 35,
    marginBottom: 8,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    fontSize: 16,
    fontWeight: '800',
    alignSelf: "center",
    color: "#1a1c20"
  }
  
});