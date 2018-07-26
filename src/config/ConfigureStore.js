import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const configureStore = () => {
  // create store...
  // const store = createStore(
  //   reducers,
  const redux_env = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  //   applyMiddleware(thunk)
  // );
  const store = createStore(reducers, redux_env , applyMiddleware(thunk));
  return store;
};

export default configureStore();
