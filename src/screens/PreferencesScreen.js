import React from 'react'
import { Text, FlatList } from 'react-native'
import styled from 'styled-components/native'
import Container from '../components/Container'
import IconButton from '../components/IconButton'
import HeaderLogo from '../components/HeaderLogo'
import Skip from '../components/Skip'
import ThinButton from '../components/ThinButton'
import Avatar from '../SVGs/avatar'
import OverlayButton from '../components/OverlayButton'
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
  {
    label: 'Weight-loss',
    color: '#9684A1',
    text:
      'You want to lose weight, way to go! Did you know that losing weight alters brain activity? For example, after following a weight loss program for 6 months, women scored better on memory tests. '
  },
  {
    label: 'Cardio',
    color: '#FFCAB1',
    text:
      'You want to lose weight, way to go! Did you know that losing weight alters brain activity? For example, after following a weight loss program for 6 months, women scored better on memory tests. '
  },
  {
    label: 'Beginner',
    color: '#FFB6C1',
    text:
      'You want to lose weight, way to go! Did you know that losing weight alters brain activity? For example, after following a weight loss program for 6 months, women scored better on memory tests. '
  },
  {
    label: 'Vegan',
    color: '#64A485',
    text:
      'You want to lose weight, way to go! Did you know that losing weight alters brain activity? For example, after following a weight loss program for 6 months, women scored better on memory tests. '
  },
  {
    label: 'Gym',
    color: '#CFC7FF',
    text:
      'You want to lose weight, way to go! Did you know that losing weight alters brain activity? For example, after following a weight loss program for 6 months, women scored better on memory tests. '
  },
  {
    label: 'Tennis',
    color: '#F79375',
    text:
      'You want to lose weight, way to go! Did you know that losing weight alters brain activity? For example, after following a weight loss program for 6 months, women scored better on memory tests. '
  },
  {
    label: 'Running',
    color: '#5F84CB',
    text:
      'You want to lose weight, way to go! Did you know that losing weight alters brain activity? For example, after following a weight loss program for 6 months, women scored better on memory tests. '
  }
]

export default function PreferencesScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <OverlayButton
      ModalComponent={Modal}
      label={item.label}
      color={item.color}
    />
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
