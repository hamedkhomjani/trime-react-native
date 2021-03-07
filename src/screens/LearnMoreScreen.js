import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import Container from '../components/Container'
import ThinButton from '../components/ThinButton'
import HeaderLogo from '../components/HeaderLogo'

const QuestionWrapper = styled.View`
  flex: 5;
  justify-content: center;
  align-items: center;
  width: 80%;
  font-family: JosefinSans_400Regular;
`

const ButtonWrapper = styled.View`
  flex: 9;
  width: 100%;
  align-items: center;
`

export default function LearnMoreScreen({ navigation }) {
  return (
    <Container>
      <HeaderLogo />
      <QuestionWrapper>
        <Text
          style={{
            fontFamily: 'JosefinSans_400Regular',
            fontSize: 20,
            textAlign: 'center'
          }}
        >
          WE WANT TO LEARN MORE ABOUT YOU SO WE CAN MAKE A FITNESS MATCH
        </Text>
      </QuestionWrapper>
      <ButtonWrapper>
        <ThinButton
          navigateTo='LearnMore'
          label='LETS GO!'
          navigation={navigation}
        ></ThinButton>
        <ThinButton
          navigateTo='TabNavigator'
          label="NO, I'M GOOD"
          navigation={navigation}
        ></ThinButton>
      </ButtonWrapper>
      <Text
        style={{ flex: 1, fontFamily: 'JosefinSans_300Light', fontSize: 20 }}
        onPress={() => navigation.navigate('Register')}
      >
        BACK
      </Text>
    </Container>
  )
}
