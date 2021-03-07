import React from 'react'
import { View, Text, Button, Styles } from 'react-native'
import styled from 'styled-components/native'
const data = require('../data.json')
import ThickButton from '../components/ThickButton'
import HeaderLogo from '../components/HeaderLogo'

const Container = styled.View`
  flex: 1;
  background: ${data.colors.green};
  justify-content: center;
  align-items: center;
`

const QuestionWrapper = styled.View`
  flex: 5;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: JosefinSans_400Regular;
`

const ButtonWrapper = styled.View`
  flex: 9;
  width: 100%;
  align-items: center;
`

export default function WhatScreen({ navigation }) {
  return (
    <Container>
      <HeaderLogo />
      <QuestionWrapper>
        <Text
          style={{
            fontFamily: 'JosefinSans_400Regular',
            fontSize: 20
          }}
        >
          WHAT ARE YOU?
        </Text>
      </QuestionWrapper>
      <ButtonWrapper>
        <ThickButton
          navigateTo='Who'
          label='TRAINEE'
          navigation={navigation}
        ></ThickButton>
        <ThickButton
          navigateTo='What'
          label='TRAINER'
          navigation={navigation}
        ></ThickButton>
      </ButtonWrapper>
      <Text
        style={{ flex: 1, fontFamily: 'JosefinSans_300Light', fontSize: 20 }}
        onPress={() => navigation.navigate('Start')}
      >
        BACK
      </Text>
    </Container>
  )
}
