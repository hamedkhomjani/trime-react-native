import React, { useState } from 'react'
import { Button, Overlay, View } from 'react-native-elements'
import styled from 'styled-components/native'

const OverlayButton = props => {
  const [visible, setVisible] = useState(false)

  const toggleOverlay = () => {
    setVisible(!visible)
  }

  return (
    <View>
      <Text
        onPress={toggleOverlay}
        style={{
          backgroundColor: props.color,
          width: '150px',
          fontFamily: 'JosefinSans_300Light',
          padding: '10px',
          margin: '10px',
          borderRadius: '5px',
          textAlign: 'center',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        }}
      >
        {props.label}
      </Text>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
    </View>
  )
}

export default OverlayButton
