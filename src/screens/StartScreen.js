import React from 'react'
import styled from 'styled-components/native'
const data = require('../data.json')
import Logo from '../SVGs/logo'
import Trime from '../SVGs/trime'
import ThinButton from '../components/ThinButton'

const Container = styled.View`
  flex: 1;
  background: ${data.colors.green};
  justify-content: center;
  align-items: center;
`
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
