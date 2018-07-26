import React, { Component } from 'react';
import { View, StatusBar, Image, Text, ScrollView } from 'react-native';
import firebase from 'react-native-firebase';
import { styles, colors } from '../styles';
import uuid from 'uuid/v4';

const Offer = props => (
  <View
    style={{
      flexDirection: 'row',
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: '#fff',
      borderRadius: 4
    }}
  >
    <View>
      <Image
        style={{ width: 100, height: 100, borderRadius: 4 }}
        source={{
          uri: props.offer.image
        }}
      />
    </View>
    <View style={{ paddingLeft: 10 }}>
      <View>
        <Text style={{ fontSize: 20 }}>{props.offer.title}</Text>
        <Text style={{ color: '#555' }}>{props.offer.description}</Text>
      </View>
      <View>
        <Text style={{ color: colors.primary }}>
          {props.offer.offer}
        </Text>
      </View>
    </View>
  </View>
);
export default class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const db = firebase.database().ref();
    const offersRef = db.child('offers');
    // offersRef.orderFunction().queryFunction();
    // const offers = offersRef.orderByKey().limitToFirst(10);

    offersRef.orderByKey().once('value', snapshot => {
      const offers = [];
      snapshot.forEach(childSnapshot => {
        offers.push({
          ...childSnapshot.val()
        });
      });
      console.log(offers);
      this.setState({ offers: offers });
    });
  }
  render() {
    return (
      <View
        style={[styles.contentContainer, { backgroundColor: colors.primary }]}
      >
        <StatusBar hidden={true} />
        <View>
          <ScrollView style={{marginBottom:100}}>
            <View>
              {this.state.offers && (
                <View>
                  {this.state.offers.map(offer => (
                    <Offer offer={offer} key={uuid()} />
                  ))}
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
