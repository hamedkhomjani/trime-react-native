import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import Container from '../components/Container'
import ThickButton from '../components/ThickButton'
import HeaderLogo from '../components/HeaderLogo'

const QuestionWrapper = styled.View`
  flex: 5;
  justify-content: center;
  align-items: center;
  width: 100%;
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
