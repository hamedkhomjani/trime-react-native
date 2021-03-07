import React from 'react'
import { Text, FlatList } from 'react-native'
import styled from 'styled-components/native'
import Container from '../components/Container'
import IconButton from '../components/IconButton'
import HeaderLogo from '../components/HeaderLogo'
import Skip from '../components/Skip'
import ThinButton from '../components/ThinButton'
import Avatar from '../SVGs/avatar'
const data = require('../data.json')

const AvatarWrapper = styled.View`
  width: 100px;
  height: 100px;
  background: ${data.colors.grey};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`

const prefs = [
  { label: 'Weight-loss', color: '#9684A1' },
  { label: 'Cardio', color: '#FFCAB1' },
  { label: 'Beginner', color: '#FFB6C1' },
  { label: 'Vegan', color: '#64A485' },
  { label: 'Gym', color: '#CFC7FF' },
  { label: 'Tennis', color: '#F79375' },
  { label: 'Running', color: '#5F84CB' }
]

export default function PreferencesScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <Text
      style={{
        backgroundColor: item.color,
        width: '150px',
        fontFamily: 'JosefinSans_300Light',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        textAlign: 'center',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }}
    >
      {item.label}
    </Text>
  )

  return (
    <Container>
      <HeaderLogo />
      <Skip navigation={navigation} />
      <Text
        style={{
          fontFamily: 'JosefinSans_300Light',
          fontSize: 15,
          marginTop: 20
        }}
      >
        4 / 6
      </Text>
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>
      <Text
        style={{
          fontFamily: 'JosefinSans_300Light',
          fontSize: 20,
          marginTop: 20
        }}
      >
        HI SUSANNE!
      </Text>
      <Text
        style={{
          fontFamily: 'JosefinSans_300Light',
          fontSize: 20,
          marginTop: 20
        }}
      >
        Here are your preferences.
      </Text>
      <FlatList
        data={prefs}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.label}
      />
      <ThinButton
        label='CONTINUE'
        navigation={navigation}
        navigateTo={'Preferences'}
      />
    </Container>
  )
}
