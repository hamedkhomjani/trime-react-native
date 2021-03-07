import React from 'react'
import styled from 'styled-components/native'
const data = require('../data.json')

const Wrapper = styled.View`
  flex: 1;
  background: ${data.colors.green};
  justify-content: center;
  align-items: center;
`

export default function Container(props) {
  return <Wrapper>{props.children}</Wrapper>
}
