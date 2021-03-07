import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  useFonts,
  JosefinSans_300Light,
  JosefinSans_400Regular
} from '@expo-google-fonts/josefin-sans'

import StartScreen from './src/screens/StartScreen'
import BiodataScreen from './src/screens/BiodataScreen'
import LearnMoreScreen from './src/screens/LearnMoreScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import WhatScreen from './src/screens/WhatScreen'
import WhoScreen from './src/screens/WhoScreen'

const Stack = createStackNavigator()

function App() {
  let [fontsLoaded] = useFonts({
    JosefinSans_300Light,
    JosefinSans_400Regular
  })

  if (!fontsLoaded) {
    return <Text> App is loading</Text>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='What' component={WhatScreen} />
        <Stack.Screen name='Start' component={StartScreen} />
        <Stack.Screen name='Biodata' component={BiodataScreen} />
        <Stack.Screen name='LearnMore' component={LearnMoreScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Who' component={WhoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
