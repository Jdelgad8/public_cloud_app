import ApolloClient from 'apollo-boost';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
//components
import DrawerNavigator from './src/components/navigation/DrawerNavigation';

const client = new ApolloClient({
  uri: 'https://b6c9741d.ngrok.io/graphql'
});

export default class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <DrawerNavigator />
      </ApolloProvider>
    );
  }
}

