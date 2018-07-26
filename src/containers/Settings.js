import React, { Component } from 'react';
import { View, StatusBar, Text, Button } from 'react-native';
import { LoginManager } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';
import { styles } from '../styles';
import firebase from 'react-native-firebase';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(
        function() {
          LoginManager.logOut();
          Actions.login({ type: 'reset' });
        },
        function(error) {
          console.error('Something went wrong');
        }
      );
  };

  componentDidMount(){
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
      } else {
        console.log("Logged in");
      }
    });
  }

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
