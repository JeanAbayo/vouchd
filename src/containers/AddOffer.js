import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import Calendar from 'react-native-calendar-select';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colors } from '../styles';
import { Input, Btn, PickDate } from '../components';
import { calendarCustomI18n, calendarColor, pickerOptions } from '../Utils';

class AddOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      title: '',
      description: '',
      image: null,
      offer: ''
    };
  }
  openCalendar() {
    this.calendar && this.calendar.open();
  }
  confirmDate = date => {
    const startMoment = date.startMoment.format('ddd, M YYYY');
    const endMoment = date.endMoment.format('ddd, M YYYY');
    this.setState({ startMoment, endMoment });
  };
  pickImage = () => {
    ImagePicker.showImagePicker(pickerOptions, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        let source = { uri: response.uri };
        this.setState({
          promoPic: source
        });
      }
    });
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.contentContainer}>
          <StatusBar hidden={true} />
          <View>
            <View style={{ alignItems: 'center', padding: 15 }}>
              <Text style={{ color: '#222' }}>
                Add an offer available in your shop
              </Text>
            </View>
            <Input
              icon="ios-pricetag"
              onChangeText={title => this.setState({ title })}
              placeholder="Offer name or title"
            />
            <Input
              icon="ios-pricetag"
              onChangeText={description => this.setState({ description })}
              placeholder="Promo description"
            />
            <Input
              icon="ios-pricetag"
              onChangeText={offer => this.setState({ offer })}
              placeholder="Offer for ex: 20%"
            />
            <TouchableOpacity onPress={() => this.openCalendar()}>
              <View>
                <PickDate
                  startLabel={this.state.startMoment || 'Start date'}
                  endLabel={this.state.endMoment || 'End date'}
                />
              </View>
            </TouchableOpacity>
            <Calendar
              i18n="en"
              ref={calendar => {
                this.calendar = calendar;
              }}
              customI18n={calendarCustomI18n}
              color={calendarColor}
              format="YYYYMMDD"
              minDate="20180726"
              maxDate="20190726"
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onConfirm={this.confirmDate}
            />
            <View>
              {this.state.promoPic ? (
                <TouchableOpacity
                  onPress={() => this.pickImage()}
                  style={styles.imgBlockPicker}
                >
                  <Image
                    source={this.state.promoPic}
                    style={{ height: 200, width: 200 }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => this.pickImage()}
                  style={styles.imgPicker}
                >
                  <View style={styles.imgPickerBtn}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                      <Icon name="md-image" size={18} color={colors.primary} />
                    </View>
                    <View style={{ flex: 9, justifyContent: 'center' }}>
                      <Text>Add offer image</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              <Btn />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOffer);
