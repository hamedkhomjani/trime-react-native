import React from 'react'
import styled from 'styled-components/native'
import Logo from '../SVGs/logo'
import Trime from '../SVGs/trime'
import ThinButton from '../components/ThinButton'
import Container from '../components/Container'

const TrimeWrapper = styled.View`
  margin: 15px;
  width: 200px;
`
const LogoWrapper = styled.View`
  margin: 15px;
  margin-bottom: 30px;
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
      <ThinButton navigateTo='What' label='SIGN UP' navigation={navigation} />
      <ThinButton navigateTo='Start' label='LOG IN' navigation={navigation} />
    </Container>
  )
}
