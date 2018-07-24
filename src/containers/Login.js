import React, { Component } from 'react';
import { View, ImageBackground, TouchableHighlight, Text } from 'react-native';
import { _ } from 'lodash';
import Icon from 'react-native-vector-icons/Ionicons';
import * as FBSDK from 'react-native-fbsdk';
import { styles } from '../styles';
import { Actions } from 'react-native-router-flux';
const { LoginManager } = FBSDK;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleFacebookLogin() {
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login with your Facebook account!');
        } else {
          if (
            _.includes(result.grantedPermissions, 'email') &&
            _.includes(result.grantedPermissions, 'public_profile')
          ) {
            Actions.account({ type: 'reset' });
          } else {
            alert(
              'Please let us know, By granting access to your facebook profile'
            );
          }
        }
      },
      function(error) {
        console.log('Login fail with error: ' + error);
      }
    );
  }
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/splash-photo.jpg')}
        style={styles.loginContainer}
      >
        <View>
          <View>
            <TouchableHighlight
              onPress={this.handleFacebookLogin}
              underlayColor="rgba(0,0,0,0)"
            >
              <View style={styles.fbLoginBtn}>
                <Text style={styles.fbLoginBtnText}>
                  <Icon name="logo-facebook" size={20} />
                  {'   '}
                  Login with facebook{' '}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
