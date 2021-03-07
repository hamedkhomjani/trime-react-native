import React, { useState } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'
const data = require('../data.json')

const Interest = styled.View`
  margin: 10px;
`

const ButtonWrapper = styled.TouchableOpacity`
  width: 80px;
  height: 60px;
  align-items: center;
  background: ${data.colors.grey};
  opacity: ${props => (props.selected ? 0.5 : 1)}
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const ButtonText = styled.Text`
  font-size: 14px;
  position: relative;
  bottom: -2px;
  font-family: 'JosefinSans_300Light';
  text-align: center;
`

export default function IconButton(props) {
  const [selected, setSelected] = useState(false)

  const select = e => {
    setSelected(!selected)
  }

  return (
    <Interest>
      <ButtonWrapper activeOpacity={1} onPress={select} selected={selected}>
        <Image
          source={props.url}
          style={{ width: 35, height: 40, top: 0, resizeMode: 'center' }}
        />
      </ButtonWrapper>
      <ButtonText>{props.name}</ButtonText>
    </Interest>
  )
}
