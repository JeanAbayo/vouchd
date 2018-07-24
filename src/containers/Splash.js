import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Animation from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as FBSDK from 'react-native-fbsdk';
import anim from '../assets/anim/logo-anim.json';
import { styles, splashGradient } from '../styles';

const { AccessToken } = FBSDK;
export default class Splash extends Component {
  componentDidMount() {
    this.animation.play();
    setTimeout(() => {
      AccessToken.getCurrentAccessToken()
        .then(data => {
          if (data) {
            Actions.account({ type: 'reset' });
          } else {
            Actions.login({ type: 'reset' });
          }
        })
        .catch(error => Actions.login({ type: 'reset' }));
    }, 900);
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
            style={styles.logoAnim}
            loop={true}
            source={anim}
          />
          <Text style={styles.appName}>Voucha</Text>
        </View>
      </LinearGradient>
    );
  }
}
