import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  useFonts,
  JosefinSans_300Light,
  JosefinSans_700Bold,
  JosefinSans_400Regular,
  JosefinSans_100Thin
} from '@expo-google-fonts/josefin-sans'

import TrainersScreen from './src/screens/TrainersScreen'
import PreferencesScreen from './src/screens/PreferencesScreen'
import FitnessLevelScreen from './src/screens/FitnessLevelScreen'
import BiodataScreen from './src/screens/BiodataScreen'
import StartScreen from './src/screens/StartScreen'
import LearnMoreScreen from './src/screens/LearnMoreScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import WhatScreen from './src/screens/WhatScreen'
import WhoScreen from './src/screens/WhoScreen'
import InterestsScreen from './src/screens/InterestsScreen'
import GoalScreen from './src/screens/GoalScreen'
import TabNavigator from './src/navigation/TabNavigator'
import WorkoutScreen from './src/screens/WorkoutScreen'
import MatchScreen from './src/screens/MatchScreen'

const Stack = createStackNavigator()

function App() {
  let [fontsLoaded] = useFonts({
    JosefinSans_300Light,
    JosefinSans_700Bold,
    JosefinSans_400Regular,
    JosefinSans_100Thin
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
        <Stack.Screen name='Start' component={StartScreen} />
        <Stack.Screen name='Preferences' component={PreferencesScreen} />
        <Stack.Screen name='Trainers' component={TrainersScreen} />
        <Stack.Screen name='Biodata' component={BiodataScreen} />
        <Stack.Screen name='Match' component={MatchScreen} />
        <Stack.Screen name='Goal' component={GoalScreen} />
        <Stack.Screen name='Workout' component={WorkoutScreen} />
        <Stack.Screen name='FitnessLevel' component={FitnessLevelScreen} />
        <Stack.Screen name='Interests' component={InterestsScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Who' component={WhoScreen} />
        <Stack.Screen name='What' component={WhatScreen} />
        <Stack.Screen name='LearnMore' component={LearnMoreScreen} />
        <Stack.Screen name='TabNavigator' component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
