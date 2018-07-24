import React, { Component } from 'react';
import { View, StatusBar, Text, Button } from 'react-native';
import { LoginManager } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';
import { styles } from '../styles';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = () => {
    LoginManager.logOut();
    Actions.login({type: 'reset'});
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View>
          <Text>Settings</Text>
          <Button
            title="Logout"
            onPress={() => this.logout({ type: 'reset' })}
          />
        </View>
      </View>
    );
  }
}
