import React from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  position: absolute;
  width: 80px;
  height: 30px;
  top: 90px;
  right: 10px;
`
const Text = styled.Text`
  font-family: 'JosefinSans_300Light
`

export default function Skip({ navigation }) {
  return (
    <Wrapper>
      <Text onPress={() => navigation.navigate('TabNavigator')}>SKIP</Text>
    </Wrapper>
  )
}
