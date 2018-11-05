/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,NetInfo } from 'react-native';
import { Provider } from 'react-redux';

import AppNavigation from './routes/stackNavigator'
import store from './store/store'

export default class App extends Component {
  state={
    isConnected: false
  }

  componentDidMount() {
    NetInfo.isConnected.fetch().done((isConnected) => { 
      if(!isConnected) {
       this.setState({
         isConnected: true
       })
      }
    })
  }
  render() {
    return (
      <Provider store={store}  >
        <View style={styles.container}>
         { !this.state.isConnected ? <AppNavigation /> : alert("nema neta")}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
