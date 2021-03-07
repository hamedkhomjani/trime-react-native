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
  height: 100px;
  padding-top: 50px;
  padding-bottom: 10px;
  border-bottom-width: ${StyleSheet.hairlineWidth};
`
const IconWrapper = styled.View`
  position: absolute;
  right: 25px;
  top: 55px;
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#a7cdbd'
  },
  screenContainer: { flex: 7 },
  searchBar: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bookings: { flex: 2, borderBottomWidth: StyleSheet.hairlineWidth },
  bookingsSection: {
    flex: 1
  },
  h4: { fontFamily: 'JosefinSans_400Regular', color: '#9684A1', fontSize: 25 },
  horizontalScroll: { flex: 1 },
  horizontalScrollImage: {
    borderWidth: 2,
    width: 200,
    marginRight: 20,
    borderRadius: 10
  },
  myInfo: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 3,
    borderBottomColor: 'black'
  },
  h3: { fontFamily: 'JosefinSans_700Bold', fontSize: 30 }
})
