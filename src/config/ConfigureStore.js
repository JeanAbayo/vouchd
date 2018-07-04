import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const configureStore = () => {
  // create store...
  const middleware = [thunk];
  const store = compose(applyMiddleware(...middleware))(createStore)(reducers);
  return store;
};
const store = configureStore();
export default store;
