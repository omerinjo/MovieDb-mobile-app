import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { createTabNavigator } from 'react-navigation'

import Movies from '../src/containers/movies/Movies'
import TvShow from '../src/containers/tvShow/TvShow'

const navigation = new createTabNavigator({
    Movies: { screen: Movies },
    "Tv Show": { screen: TvShow },
},
{
    tabBarOptions:{
        style: {
            backgroundColor: '#171F33' // TabBar background
        }
    }
}
)

export default navigation;