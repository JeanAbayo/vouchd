import React, { Component } from 'react';
import { View, StatusBar, Dimensions, Text } from 'react-native';
import { styles } from '../styles';
export default class AddOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: ['Pineaple', 'Orange', 'Avocado', 'Banana'],
      viewport: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View>
          <Text>Add offer</Text>
        </View>
      </View>
    );
  }
}
