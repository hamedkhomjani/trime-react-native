import React from 'react'
import styled from 'styled-components/native'
const data = require('../data.json')

const ButtonWrapper = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  background: ${data.colors.grey};
  padding: 20px 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const ButtonTextBig = styled.Text`
  font-size: 20px;
  position: relative;
  bottom: -2px;
  font-family: 'JosefinSans_300Light';
`

const ButtonTextSmall = styled.Text`
  font-size: 15px;
  position: relative;
  bottom: -2px;
  font-family: 'JosefinSans_300Light';
`

export default function SubtitleButton(props) {
  return (
    <ButtonWrapper onPress={() => props.navigation.navigate(props.navigateTo)}>
      <ButtonTextBig>{props.label}</ButtonTextBig>
      <ButtonTextSmall>{props.sublabel}</ButtonTextSmall>
    </ButtonWrapper>
  )
}
