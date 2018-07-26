import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { styles, colors } from '../styles';
import { Input } from '../components';
import { addShop } from '../actions/ShopActions';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Modal,
  TouchableHighlight,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

class CreateForm extends Component {
  state = {};
  setModalVisible = (visible) => {
    this.props.setModalVisible(visible);
  };

  addShop = () => {
    const data = {
      name: this.state.title,
      location: this.state.description,
    };
    this.props.addShop(data);
  };
  render() {
    const { modalVisible } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}
      >
        <View>
          <View>
            <ScrollView>
              <View style={styles.contentContainer}>
                <StatusBar hidden={true} />
                <View>
                  <View
                    style={{
                      alignItems: 'center',
                      padding: 15,
                      flex: 1,
                      flexDirection: 'row',
                    }}
                  >
                    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                      <TouchableHighlight
                        onPress={() => {
                          this.setModalVisible(!modalVisible);
                        }}
                        style={{
                          justifyContent: 'flex-start',
                          backgroundColor: '#F5FCFF',
                        }}
                      >
                        <Icon
                          name="ios-close-circle-outline"
                          size={18}
                          color={colors.primary}
                        />
                      </TouchableHighlight>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center' }}>
                      <Text style={{ color: '#222' }}>Create A new Shop</Text>
                    </View>
                  </View>
                  <Input
                    icon="ios-pricetag"
                    onChangeText={(title) => this.setState({ title })}
                    placeholder="Shop name"
                  />
                  <Input
                    icon="ios-compass"
                    onChangeText={(description) =>
                      this.setState({ description })
                    }
                    placeholder="Location or Neighborhood"
                  />
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
                      backgroundColor: colors.primary,
                    }}
                    onPress={() => this.addShop}
                  >
                    <View
                      style={{
                        flex: 1,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Text style={{ color: '#fff' }}> Create Shop </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  addShop: data => dispatch(addShop(data))
});
CreateForm.propTypes = {
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
  addShop: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateForm);
