import React, { Component } from 'react';
import { View, StatusBar, Dimensions, Text, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import * as fixtures from '../fixtures';
import { styles } from '../styles';
import mapStyle from '../styles/map.json';
const slides = {
  slide1: require('../assets/images/slides/1.jpg'),
  slide2: require('../assets/images/slides/2.jpg'),
  slide3: require('../assets/images/slides/3.jpg'),
  slide4: require('../assets/images/slides/4.jpg'),
  slide5: require('../assets/images/slides/5.jpg'),
  slide6: require('../assets/images/slides/6.jpg'),
  slide7: require('../assets/images/slides/7.jpg')
};
function getImage(number) {
  return slides['slide' + number];
}
function regionFrom(lat, lon, distance) {
  distance = distance / 2;
  const circumference = 40075;
  const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
  const angularDistance = distance / circumference;

  const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
  const longitudeDelta = Math.abs(
    Math.atan2(
      Math.sin(angularDistance) * Math.cos(lat),
      Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)
    )
  );

  return {
    latitude: lat,
    longitude: lon,
    latitudeDelta,
    longitudeDelta
  };
}
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
      }
    };
  }
  renderCarouselItem = ({ item, data }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 5,
          backgroundColor: '#007a87',
          borderRadius: 5,
          marginRight: 10
        }}
      >
        <StatusBar translucent={true} />
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5
            }}
            // resizeMethod="resize"
            source={getImage(item.img)}
          />
        </View>
        <View
          style={{
            paddingLeft: 5,
            height: 100,
            flex: 1
          }}
        >
          <Text style={styles.homeDiscountShop}>{item.shop}</Text>
          <Text style={styles.homeDiscountDescription}>{item.description}</Text>
          <View style={styles.homeDiscountTimeLeft}>
            <View style={{ flex: 2 }}>
              <Text style={styles.white}>{item.timeLeft}</Text>
            </View>
            <View style={styles.homeDiscountAmount}>
              <Text style={styles.white}>
                <Icon name="md-arrow-round-down" /> {item.discount}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const loc = regionFrom(1.2185, 36.8869, 10000);
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={false}
          backgroundColor="rgba(0,0,0,0.1)"
          barStyle="light-content"
        />
        <View style={styles.mapContainer}>
          <View style={styles.mapCarousel}>
            <Carousel
              //ref={(c) => { this._carousel = c; }}
              data={fixtures.shops}
              renderItem={this.renderCarouselItem}
              sliderWidth={this.state.viewport.width}
              itemWidth={this.state.viewport.width - 80}
              autoplay
              autoplayInterval={5000}
              inactiveSlideOpacity={1}
              inactiveSlideScale={1}
              style={{ backgroundColor: 'red' }}
            />
          </View>
          <MapView
            provider={PROVIDER_GOOGLE}
            // mapType="standard"
            customMapStyle={mapStyle}
            style={styles.homeMap}
            loadingEnabled={true}
            showsUserLocation={true}
            initialRegion={{
              latitude: 1.2185,
              longitude: 36.8869,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
        </View>
      </View>
    );
  }
}
