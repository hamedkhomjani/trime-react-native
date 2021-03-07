import React from 'react'
import styled from 'styled-components/native'

import Trime from '../SVGs/trime'

const Wrapper = styled.View`
  width: 80px;
  height: 30px;
  margin-top: 80px;
  margin-left: 25px;
  align-self: flex-start;
`

export default function HeaderLogo() {
  return (
    <Wrapper>
      <Trime />
    </Wrapper>
  )
}
