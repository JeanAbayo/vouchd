import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { styles } from '../styles';

const Tab = props => (
  <TouchableOpacity
    onPress={() => props.action()}
    style={styles.menuTab}
    activeOpacity={0.9}
  >
    <Icon name={props.icon} size={30} color="#EEEEEE" />
  </TouchableOpacity>
);
const CenterTab = props => (
  <TouchableOpacity
    style={styles.centerTabMenu}
    onPress={() => props.action()}
    activeOpacity={0.9}
  >
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.centerTabMenuBtn}
      colors={['#019b94', '#017d88']}
    >
      <Icon name="plus" size={30} color="#EEE" />
    </LinearGradient>
  </TouchableOpacity>
);
const TabBar = () => (
  <View style={styles.tabBar}>
    <Tab icon="fire" action={() => Actions.offers()} />
    <Tab icon="wallet" action={() => Actions.shops()} />
    <CenterTab action={() => Actions.addOffer()} />
    <Tab icon="star" action={() => Actions.savedOffers()} />
    <Tab icon="settings" action={() => Actions.settings()} />
  </View>
);
Tab.propTypes = {
  icon: PropTypes.string,
  action: PropTypes.func
};
CenterTab.propTypes = {
  action: PropTypes.func
};
export default TabBar;
