import firebase from 'react-native-firebase';
import { ADDING_OFFER, ADDED_OFFER, ADD_OFFER_ERROR } from './Constants';
import store from '../config/ConfigureStore';

export const addOffer = data => {
  return dispatch => {
    dispatch({ type: ADDING_OFFER });
    const { title, description, offer, image } = data;
    return firebase
      .storage()
      .ref('img')
      .putFile(image)
      .then(uploadedFile => {
        var newOfferKey = firebase
          .database()
          .ref()
          .child('offers')
          .push().key;
        var shop_uid = store.getState().user.uuid;
        var offerData = {
          title: title,
          description: description,
          offer: offer,
          image: uploadedFile.downloadURL,
          shop: shop_uid
        };
        var updates = {};
        updates['/offers/' + newOfferKey] = offerData;
        updates['/shop-offers/' + shop_uid + '/' + newOfferKey] = offerData;
        firebase
          .database()
          .ref()
          .update(updates)
          .then(result => {
            dispatch({ type: ADDED_OFFER });
            alert('Offer published successfully');
          })
          .catch(error => {
            dispatch({ type: ADD_OFFER_ERROR });
            console.log(error);
          });
      })
      .catch(err => {
        alert('Something went wrong');
        console.log(err);
      });
  };
};
