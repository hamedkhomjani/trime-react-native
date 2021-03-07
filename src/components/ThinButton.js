import React from 'react'
import styled from 'styled-components/native'
const data = require('../data.json')

const ButtonWrapper = styled.TouchableOpacity`
  min-width: 50%;
  width: ${props => (props.width ? props.width : null)};
  align-items: center;
  background: ${data.colors.grey};
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const ButtonText = styled.Text`
  font-size: 1.2rem;
  position: relative;
  bottom: -2px;
  font-family: JosefinSans_300Light;
`

export default function ThinButton(props) {
  return (
    <ButtonWrapper
      width={props.width}
      onPress={() => props.navigation.navigate(props.navigateTo)}
    >
      <ButtonText>{props.label}</ButtonText>
    </ButtonWrapper>
  )
}
