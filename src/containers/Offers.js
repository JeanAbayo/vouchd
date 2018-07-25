import React, { Component } from 'react';
import { View, StatusBar, Text, ScrollView } from 'react-native';
import { styles } from '../styles';

const Offer = () => (
  <Text>Ok</Text>
);
export default class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.contentContainer}>
        <StatusBar hidden={true} />
        <View>
          <ScrollView>
            <View>
              <Offer />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
