import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Text,
  Dimensions,
  ImageBackground
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { styles } from '../styles';
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
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: ['Pineaple', 'Orange', 'Avocado', 'Banana'],
      viewport: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
      }
    };
  }
  renderCarouselItem = ({ item, data }) => {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{ width: this.state.viewport.width, height: 300 }}
          resizeMethod="resize"
          source={getImage(item.img)}
        >
          <View
            style={{
              backgroundColor: 'hsla(350, 51%, 66%, 0.69)',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}
          >
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,0.5)',
                padding: 15,
                marginBottom: 20,
                alignItems: 'center'
              }}
            >
              <Text>{item.text}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View>
          <Carousel
            //ref={(c) => { this._carousel = c; }}
            data={[
              { img: 2, text: 'Care about who you left growing' },
              { img: 3, text: 'Care about your loved ones' },
              { img: 4, text: 'Share ❤️ with them' }
            ]}
            renderItem={this.renderCarouselItem}
            sliderWidth={this.state.viewport.width}
            itemWidth={this.state.viewport.width}
            autoplay
            autoplayInterval={5000}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
          />
        </View>
      </View>
    );
  }
}
