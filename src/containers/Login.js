import React, { Component } from 'react';
import { View, ImageBackground, TouchableHighlight, Text } from 'react-native';
import { _ } from 'lodash';
import Icon from 'react-native-vector-icons/Ionicons';
import * as FBSDK from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';
import firebase from 'react-native-firebase';
import { styles } from '../styles';

const { LoginManager, AccessToken } = FBSDK;
const loginWithFb = accessToken => {
  const credential = firebase.auth.FacebookAuthProvider.credential(accessToken);
  return firebase
    .auth()
    .signInAndRetrieveDataWithCredential(credential)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      alert('Something went wrong');
      console.log(error);
    });
};
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleFacebookLogin() {
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      result => {
        if (result.isCancelled) {
          alert('Login with your Facebook account!');
        } else {
          if (
            _.includes(result.grantedPermissions, 'email') &&
            _.includes(result.grantedPermissions, 'public_profile')
          ) {
            AccessToken.getCurrentAccessToken()
              .then(data => {
                console.log(data);
                loginWithFb(data.accessToken)
                  .then(result => {
                    console.log();
                    return Actions.account({ type: 'reset' });
                  })
                  .catch(error => {
                    console.log('Something went wrong');
                  });
              })
              .catch(() => {});
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
