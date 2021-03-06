import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { LoginManager } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from 'react-native-firebase';
import PropTypes from 'prop-types';
import CreateForm from '../components/CreateShop';
import { styles } from '../styles';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
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
        },
      );
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  triggerCreateShopModal = () => {
    Alert.alert('You tapped the button!');
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
      } else {
        console.log('Logged in');
      }
    });
  }

  render() {
    const { user } = this.props;
    return (
      <View style={styles.contentContainer}>
        <StatusBar hidden={true} />
        <View>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                flex: 8,
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingTop: 20,
                paddingLeft: 15,
                paddingBottom: 5,
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(0,0,0,0.1)',
              }}
            >
              <View style={{ flex: 1 }}>
                <Image
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                  source={{ uri: user.photo }}
                />
              </View>
              <View style={{ flex: 5, paddingTop: 20, alignItems: 'center' }}>
                <Text>{user.name}</Text>
              </View>
            </View>
            <View
              style={{
                flex: 2,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(0,0,0,0.1)',
              }}
            >
              <TouchableOpacity onPress={() => this.logout()}>
                <View>
                  <Text>
                    <Icon name="ios-power" size={40} />
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: 150,
              height: 50,
              backgroundColor: 'powderblue',
              position: 'absolute',
              bottom: 100,
            }}
          >
            <CreateForm modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible} />

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true);
              }}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text>Create Shop</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  // gotUser: data => dispatch(gotUser(data))
});

Settings.propTypes = {
  user: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
