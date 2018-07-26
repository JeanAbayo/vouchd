import firebase from 'react-native-firebase';
import { ADDING_SHOP, ADDED_SHOP, ADD_SHOP_ERROR } from './Constants';
import store from '../config/ConfigureStore';

export const addShop = (data) => {
  return (dispatch) => {
    dispatch({ type: ADDING_SHOP });
    const { name, location } = data;
    var newShopKey = firebase
      .database()
      .ref()
      .child('shops')
      .push().key;
    return firebase
      .storage()
      .ref('shops/' + newShopKey)
      .then(() => {
        var shop_uid = store.getState().user.uuid;
        var offerData = {
          name: name,
          location: location,
        };
        var updates = {};
        updates['/shops/' + newShopKey] = offerData;
        updates['/shop-offers/' + shop_uid + '/' + newShopKey] = offerData;
        firebase
          .database()
          .ref()
          .update(updates)
          .then((result) => {
            dispatch({ type: ADDED_SHOP });
            alert('Offer published successfully');
          })
          .catch((error) => {
            dispatch({ type: ADD_SHOP_ERROR });
            console.log(error);
          });
      })
      .catch((err) => {
        alert('Something went wrong');
        console.log(err);
      });
  };
};
