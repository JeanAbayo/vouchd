import React, { Component } from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import * as FBSDK from 'react-native-fbsdk';
import { styles } from '../styles';
const { LoginButton, AccessToken } = FBSDK;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View>
          <LoginButton
            publishPermissions={['publish_actions']}
            onLoginFinished={(error, result) => {
              if (error) {
                alert('login has error: ' + result.error);
              } else if (result.isCancelled) {
                alert('login is cancelled.');
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  alert(data.accessToken.toString());
                });
              }
            }}
            onLogoutFinished={() => alert('logout.')}
          />
        </View>
      </View>
    );
  }
}
