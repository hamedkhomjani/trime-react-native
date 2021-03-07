import React from 'react'
import styled from 'styled-components/native'

import Trime from '../SVGs/trime'

const Wrapper = styled.View`
  width: 80;
  height: 30;
  margin-top: 30px;
  margin-left: 25px;
  align-self: start;
`

export default function HeaderLogo() {
  return (
    <Wrapper>
      <Trime />
    </Wrapper>
  )
}
