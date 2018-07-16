import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import Animation from 'lottie-react-native';
import anim from '../assets/anim/lottie.json';
import { styles, splashGradient } from '../styles';
import LinearGradient from 'react-native-linear-gradient';

export default class Splash extends Component {
  componentDidMount() {
    this.animation.play();
    //   setTimeout(() => {
    //     Actions.login();
    //   }, 5000);
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
