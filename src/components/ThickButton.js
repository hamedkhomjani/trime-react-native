import React from 'react'
import styled from 'styled-components/native'
const data = require('../data.json')

const ButtonWrapper = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
  background: ${data.colors.grey};
  padding: 20px 10px;
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

export default function ThickButton(props) {
  return (
    <ButtonWrapper onPress={() => props.navigation.navigate(props.navigateTo)}>
      <ButtonText>{props.label}</ButtonText>
    </ButtonWrapper>
  )
}
