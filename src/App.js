import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import store from './config/ConfigureStore';
import Splash from './containers/Splash';
import Home from './containers/Home';

const RouterWithRedux = connect()(Router);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene
              key="splash"
              component={Splash}
              title="Hello"
              hideNavBar={true}
            />
            <Scene
              key="login"
              component={Home}
              title="Login"
              hideNavBar={true}
            />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}
