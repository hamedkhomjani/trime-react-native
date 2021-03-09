import React from 'react'
import { Text, TextInput } from 'react-native'
import styled from 'styled-components/native'
import Container from '../components/Container'
import HeaderLogo from '../components/HeaderLogo'
import ThinButton from '../components/ThinButton'

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
  justify-content: flex-start;
  top: -60px;
`

const Label = styled.Text`
  font-family: 'JosefinSans_300Light';
  font-size: 12px;
  margin-bottom: 10px;
  margin-top: 20px;
`

const Input = styled.TextInput`
  font-family: 'JosefinSans_400Regular';
  font-size: 14px;
  text-align: center;
  width: 60px;
  height: 40px;
  border: solid 1px black;
`

export default function BiodataScreen({ navigation }) {
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
          WHAT IS YOUR?
        </Text>
      </QuestionWrapper>
      <ButtonWrapper>
        <Label>AGE</Label>
        <Input></Input>
        <Label>HEIGHT</Label>
        <Input></Input>
        <Label>WEIGHT</Label>
        <Input></Input>
        <Label>GOAL WEIGHT</Label>
        <Input></Input>
        <ThinButton
          navigateTo='Register'
          label='CONTINUE'
          navigation={navigation}
        />
      </ButtonWrapper>
      <Text
        style={{
          flex: 1,
          fontFamily: 'JosefinSans_300Light',
          fontSize: 20
        }}
        onPress={() => navigation.navigate('Who')}
      >
        BACK
      </Text>
    </Container>
  )
}
