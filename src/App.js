import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Scene, Modal } from 'react-native-router-flux';
import Splash from './containers/Splash';
import Home from './containers/Home';

const client = new ApolloClient();

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Modal key="root" hideNavBar>
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
          </Modal>
        </Router>
      </ApolloProvider>
    );
  }
}
