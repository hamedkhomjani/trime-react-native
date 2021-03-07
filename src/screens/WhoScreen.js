import React from 'react'
import { View, Text, Button, Styles } from 'react-native'
import styled from 'styled-components/native'
import Container from '../components/Container'
import ThinButton from '../components/ThinButton'
import HeaderLogo from '../components/HeaderLogo'

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

export default function WhoScreen({ navigation }) {
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
          WHO ARE YOU?
        </Text>
      </QuestionWrapper>
      <ButtonWrapper>
        <ThinButton
          navigateTo='Biodata'
          label='WOMAN'
          navigation={navigation}
        ></ThinButton>
        <ThinButton
          navigateTo='Biodata'
          label='MAN'
          navigation={navigation}
        ></ThinButton>
        <ThinButton
          navigateTo='Biodata'
          label='NON-BINARY'
          navigation={navigation}
        ></ThinButton>
        <ThinButton
          navigateTo='Biodata'
          label='OTHER'
          navigation={navigation}
        ></ThinButton>
      </ButtonWrapper>
      <Text
        style={{ flex: 1, fontFamily: 'JosefinSans_300Light', fontSize: 20 }}
        onPress={() => navigation.navigate('What')}
      >
        BACK
      </Text>
    </Container>
  )
}
