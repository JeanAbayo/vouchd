import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles';

export default class Splash extends Component {
  componentDidMount(){
    setTimeout(() => {
      Actions.login();
    }, 500);
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View>
          <Text style={{ fontSize: 43 }}>Vouch D</Text>
          <View style={{alignItems: 'center'}}>
            <Icon name="ios-american-football-outline" color='red' size={30}/>
          </View>
        </View>
      </View>
    );
  }
}
