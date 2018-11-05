import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from 'react-navigation'

import ItemDetail from '../src/components/ItemDetail'

const navigation = new createStackNavigator({
    ItemDetail: { screen: ItemDetail, }
},
  {
      headerMode:'none'
  }
)

export default navigation;