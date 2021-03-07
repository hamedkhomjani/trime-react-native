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
`

const ButtonWrapper = styled.View`
  flex: 9;
  width: 100%;
  align-items: center;
`

export default function RegisterScreen({ navigation }) {
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
          REGISTER YOUR ACCOUNT TO SAVE YOUR DETAILS
        </Text>
      </QuestionWrapper>
      <ButtonWrapper>
        <ThinButton
          navigateTo='LearnMore'
          label='LOG IN WITH APPLE'
          navigation={navigation}
          width={'80%'}
        ></ThinButton>
        <ThinButton
          navigateTo='LearnMore'
          label='LOG IN WITH FACEBOOK'
          navigation={navigation}
          width={'80%'}
        ></ThinButton>
        <ThinButton
          navigateTo='LearnMore'
          label='LOG IN WITH EMAIL'
          navigation={navigation}
          width={'80%'}
        ></ThinButton>
      </ButtonWrapper>
      <Text
        style={{ flex: 1, fontFamily: 'JosefinSans_300Light', fontSize: 20 }}
        onPress={() => navigation.navigate('Biodata')}
      >
        BACK
      </Text>
    </Container>
  )
}
