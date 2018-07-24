import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { styles } from '../styles';
export default class SavedOffers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View>
          <Text>Saved offers</Text>
        </View>
      </View>
    );
  }
}
