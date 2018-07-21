import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Animation from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import anim from '../assets/anim/logo-anim.json';
import { styles, splashGradient } from '../styles';
import * as FBSDK from 'react-native-fbsdk';

const { AccessToken } = FBSDK;
export default class Splash extends Component {
  componentDidMount() {
    this.animation.play();
    // setTimeout(() => {
    //   Actions.login();
    // }, 970);
    AccessToken.getCurrentAccessToken()
      .then(data => {
        // alert(data.accessToken.toString());
        if (data) {
          Actions.home();
        }
        else{
          Actions.login();
        }
      })
      .catch(error => Actions.login());
  }
  render() {
    return (
      <LinearGradient colors={splashGradient} style={styles.splash}>
        <StatusBar hidden={true} />
        <View style={styles.splashContent}>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 180,
              height: 180
            }}
            loop={true}
            source={anim}
          />
          <Text style={styles.appName}>Voucha</Text>
        </View>
      </LinearGradient>
    );
  }
}
