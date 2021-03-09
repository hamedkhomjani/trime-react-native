import React, { useEffect } from 'react'
import { Text, Image } from 'react-native'
import styled from 'styled-components/native'
import Container from '../components/Container'
import HeaderLogo from '../components/HeaderLogo'

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const QuestionWrapper = styled.View`
  flex: 5;
  justify-content: center;
  align-items: center;
  width: 80%;
`

const ButtonWrapper = styled.View`
  flex: 7;
  width: 100%;
  top: -60px;
  align-items: center;
`

export default function MatchScreen({ navigation }) {
  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      navigation.navigate('Trainers')
    }, 3000)

    return () => window.clearTimeout(timeoutID)
  }, [])

  return (
    <Container>
      <HeaderLogo />
      <Wrapper>
        <QuestionWrapper>
          <Text
            style={{
              fontFamily: 'JosefinSans_400Regular',
              fontSize: 20,
              textAlign: 'center'
            }}
          >
            MATCHING YOU WITH PERSONAL TRAINERS
          </Text>
          <Image
            style={{ width: 300, height: 200 }}
            source={{
              uri: 'https://media.giphy.com/media/fZPCco86dJ7H9Ai25R/giphy.gif'
            }}
          />
        </QuestionWrapper>
      </Wrapper>
    </Container>
  )
}
