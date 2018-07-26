import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import TabBar from './TabBar';

export { TabBar };

export const Input = props => (
  <View
    style={{
      flexDirection: 'row',
      margin: 10,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: colors.primary
    }}
  >
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Icon name={props.icon} size={18} color={colors.primary} />
    </View>
    <View style={{ flex: 9 }}>
      <TextInput {...props} style={{ height: 40 }} />
    </View>
  </View>
);
export const Btn = props => (
  <TouchableOpacity
    style={{
      flexDirection: 'row',
      margin: 10,
      marginLeft: 30,
      marginRight: 30,
      marginTop: 50,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: colors.primary,
      backgroundColor: colors.primary
    }}
    onPress={() => props.action()}
  >
    <View
      style={{
        flex: 1,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text style={{ color: '#fff' }}> Publish promo </Text>
    </View>
  </TouchableOpacity>
);
export const PickDate = props => (
  <View
    style={{
      flexDirection: 'row',
      margin: 10,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: colors.primary,
      height: 40
    }}
  >
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Icon name="ios-calendar-outline" size={18} color={colors.primary} />
    </View>
    <View style={{ flex: 4, justifyContent: 'center' }}>
      <Text>{props.startLabel}</Text>
    </View>
    <View
      style={{
        flex: 4,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 30
      }}
    >
      <Text>{props.endLabel}</Text>
    </View>
  </View>
);

PickDate.propTypes = {
  endLabel: PropTypes.string,
  startLabel: PropTypes.string
};
Btn.propTypes = {
  endLabel: PropTypes.string,
  icon: PropTypes.string,
  action: PropTypes.func,
};
Input.propTypes = {
  endLabel: PropTypes.string,
  icon: PropTypes.string
};
