import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Dimensions,
  Button
} from 'react-native';
import { LoginManager } from 'react-native-fbsdk';
import { styles } from '../styles';

export default class Home extends Component {
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
  logout = () => {
    LoginManager.logOut();
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View>
          <Button title="Logout" onPress={()=>this.logout()}/>
        </View>
      </View>
    );
  }
}
