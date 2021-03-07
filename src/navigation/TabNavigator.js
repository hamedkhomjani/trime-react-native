import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/HomeScreen'
import PowerUp from '../screens/PowerUpScreen'
import Messages from '../screens/MessagesScreen'
import Profile from '../screens/ProfileScreen'
import Icon from '../components/Icon'

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName='Home'
        tabBarOptions={{
          activeTintColor: '#9684A1',
          inactiveTintColor: 'black',
          style: {
            paddingBottom: 150,
            backgroundColor: '#A7CDBD',
            borderTopColor: 'black',
            borderTopWidth: StyleSheet.hairlineWidth,
            height: 120,
            justifyContent: 'center'
          },
          tabStyle: {
            height: 100,
            paddingTop: 0
          },
          labelStyle: {
            padding: 0,
            margin: 0,
            fontFamily: 'JosefinSans_300Light',
            fontSize: 16
          }
        }}
      >
        <Tab.Screen
          name='Home'
          options={{
            tabBarIcon: ({ color }) => (
              <Icon
                name='Dumbells'
                height='40'
                width='40'
                viewBox='0 0 28 23'
                fill={color}
              />
            )
          }}
          component={Home}
        />
        <Tab.Screen
          name='PowerUp'
          component={PowerUp}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon
                name='RunningMan'
                height='40'
                width='40'
                viewBox='0 0 30 24'
                fill={color}
              />
            )
          }}
        />
        <Tab.Screen
          name='Messages'
          component={Messages}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon
                name='Messages'
                height='40'
                width='40'
                viewBox='0 0 23 23'
                fill={color}
              />
            )
          }}
        />
        <Tab.Screen
          name='Profile'
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon
                name='Head'
                height='40'
                width='40'
                viewBox='0 0 19 24'
                fill={color}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
