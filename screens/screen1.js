import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class Screen1 extends Component {
    show = () => {
        this.props.navigation.navigate('S2');
    }
    render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
            <Text>screen1</Text>
            <Button title="show" onPress={this.show}></Button>
      </View>
    );
  }
}
