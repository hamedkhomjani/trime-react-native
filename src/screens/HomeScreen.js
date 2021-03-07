import React from 'react'
import { StyleSheet, ScrollView, Text, View, TextInput } from 'react-native'
import styled from 'styled-components/native'
const data = require('../data.json')

import Icon from '../components/Icon'
import TrimeBold from '../SVGs/trimeBold'

const Container = styled.View`
  flex: 1;
  background: ${data.colors.green};
`
const Header = styled.View`
  height: 120px;
  padding-top: 70px;
  padding-bottom: 10px;
  border-bottom-width: ${StyleSheet.hairlineWidth};
`
const IconWrapper = styled.View`
  position: absolute;
  right: 25px;
  top: 70px;
`

const GeneralInfo = styled.View``
const MyInfo = styled.View``

export default function HomeScreen() {
  return (
    <Container>
      <Header>
        <TrimeBold />
        <IconWrapper>
          <Icon name='Bell' height='25' width='25' />
        </IconWrapper>
      </Header>
      <GeneralInfo></GeneralInfo>
      <MyInfo></MyInfo>
    </Container>
  )
}
