import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Animation from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as FBSDK from 'react-native-fbsdk';
import firebase from 'react-native-firebase';
import anim from '../assets/anim/logo-anim.json';
import { styles, splashGradient } from '../styles';
import { gotUser } from '../actions/UserActions';

const { AccessToken } = FBSDK;
const loginWithFb = accessToken => {
  const credential = firebase.auth.FacebookAuthProvider.credential(accessToken);
  return firebase
    .auth()
    .signInAndRetrieveDataWithCredential(credential)
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};
class Splash extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.animation.play();
    setTimeout(() => {
      AccessToken.getCurrentAccessToken()
        .then(data => {
          if (data) {
            loginWithFb(data.accessToken)
              .then(result => {
                const user = {
                  name: result.user.displayName,
                  photo: result.user.photoURL,
                  email: result.user.email,
                  uuid: result.user.uid
                };
                this.props.gotUser(user);
              })
              .catch(error => {
                console.log(error);
              });
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

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  gotUser: data => dispatch(gotUser(data))
});
Splash.propTypes = {
  gotUser: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
