import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { styles } from '../styles';
import LinearGradient from 'react-native-linear-gradient';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.login();
    }, 5000);
  }
  render() {
    return (
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container}
      >
        <StatusBar hidden={true} />
        <View>
          <Text style={{ fontSize: 43, color: '#fff' }}>Vouch D</Text>
        </View>
      </LinearGradient>
    );
  }
}
