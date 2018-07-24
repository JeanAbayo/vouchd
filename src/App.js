import React, { Component } from 'react';
import { Router, Scene, Modal, Tabs } from 'react-native-router-flux';
// import { ApolloClient } from 'apollo-client';
// import { ApolloProvider } from 'react-apollo';
import Splash from './containers/Splash';
import Login from './containers/Login';
import Home from './containers/Home';
import Offers from './containers/Offers';
import Settings from './containers/Settings';
import { TabBar } from './components';
import AddOffer from './containers/AddOffer';
import SavedOffers from './containers/SavedOffers';
import Shops from './containers/Shops';
// const client = new ApolloClient();

export default class App extends Component {
  render() {
    return (
      // <ApolloProvider client={client}>
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
            component={Login}
            title="Login"
            hideNavBar={true}
          />
          <Tabs key="account" tabBarComponent={TabBar}>
            <Scene key="home" component={Home} title="Home" hideNavBar={true} />
            <Scene
              key="offers"
              component={Offers}
              title="Offers"
              hideNavBar={true}
            />
            <Scene
              key="shops"
              component={Shops}
              title="Shops"
              hideNavBar={false}
            />
            <Scene
              key="addOffer"
              component={AddOffer}
              title="Add Offer"
              hideNavBar={false}
            />
            <Scene
              key="savedOffers"
              component={SavedOffers}
              title="Starred offers"
              hideNavBar={false}
            />
            <Scene
              key="settings"
              component={Settings}
              title="Settings"
              hideNavBar={false}
            />
          </Tabs>
        </Modal>
      </Router>
      // </ApolloProvider>
    );
  }
}
