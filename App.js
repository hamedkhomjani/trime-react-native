import React from 'react'
import {
  createAppContainer,
  createStackNavigator
} from '@react-navigation/native'

import StartScreen from './src/screens/StartScreen'
import BiodataScreen from './src/screens/BiodataScreen'
import LearnMoreScreen from './src/screens/LearnMoreScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import WhatScreen from './src/screens/WhatScreen'
import WhoScreen from './src/screens/WhoScreen'

const navigator = createStackNavigator(
  {
    Start: StartScreen,
    Biodata: BiodataScreen,
    LearnMore: LearnMoreScreen,
    Register: RegisterScreen,
    What: WhatScreen,
    Who: WhoScreen
  },
  {
    initialRouteName: 'Start',
    defaultNavigationOptions: { title: 'Trime' }
  }
)

export default createAppContainer(navigator)
