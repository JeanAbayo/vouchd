import firebase from 'react-native-firebase';

export const writeUserData = (data) => {
  const {title, description, offer, image} = data;
  const userId = '';
  firebase
    .database()
    .ref('promos/'+userId)
    .set({
      title,
      description,
      offer,
      image
    })
    .then(result => {
      console.log(result);
      alert('Offer published successfully');
    })
    .catch(error => {
      alert('Something went wrong');
      console.log(error);
    });
};
