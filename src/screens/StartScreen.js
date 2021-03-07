import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import Logo from '../SVGs/logo'
import Trime from '../SVGs/trime'
import ThinButton from '../components/ThinButton'
import Container from '../components/Container'

const TrimeWrapper = styled.View`
  padding-top: 200px;
  width: 200px;
  flex: 0.4;
`
const LogoWrapper = styled.View`
  margin: 0;
  flex: 1;
`

const ButtonWrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`

export default function StartScreen({ navigation }) {
  return (
    <Container>
      <TrimeWrapper>
        <Trime />
      </TrimeWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <ButtonWrapper>
        <ThinButton navigateTo='What' label='SIGN UP' navigation={navigation} />
        <ThinButton navigateTo='Start' label='LOG IN' navigation={navigation} />
      </ButtonWrapper>
    </Container>
  )
}
