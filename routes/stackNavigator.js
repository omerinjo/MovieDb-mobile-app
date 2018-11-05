import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'

import TabNavigator from './tabNavigator'
import StackNavigatorHeader from './stackNavigatorHeader'
import Header from '../src/containers/header/Header'

const navigation = new createStackNavigator({
    TabNavigator: {
        screen: TabNavigator,
        navigationOptions :({ navigation, params }) =>( {
            header: <Header option={navigation.state.routes[navigation.state.index]} />
        })
    },
    StackNavigatorHeader: { screen: StackNavigatorHeader }
},
)

export default navigation;