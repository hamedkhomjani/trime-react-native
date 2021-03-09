import React, { useState } from 'react'
import {
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  Modal,
  View
} from 'react-native'
import styled from 'styled-components/native'
import Container from '../components/Container'
import HeaderLogo from '../components/HeaderLogo'
import Skip from '../components/Skip'
import ThinButton from '../components/ThinButton'
import Avatar from '../SVGs/avatar'
const data = require('../data.json')

const AvatarWrapper = styled.View`
  width: 100px;
  height: 100px;
  background: ${data.colors.grey};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`

const prefs = [
  {
    label: 'Weight-loss',
    color: '#9684A1',
    text:
      'You want to lose weight, way to go! Did you know that losing weight alters brain activity? For example, after following a weight loss program for 6 months, women scored better on memory tests. '
  },
  {
    label: 'Cardio',
    color: '#FFCAB1',
    text:
      'You want to lose weight, way to go! Did you know that losing weight alters brain activity? For example, after following a weight loss program for 6 months, women scored better on memory tests. '
  },
  {
    label: 'Beginner',
    color: '#FFB6C1',
    text:
      'You want to lose weight, way to go! Did you know that losing weight alters brain activity? For example, after following a weight loss program for 6 months, women scored better on memory tests. '
  },
  {
    label: 'Vegan',
    color: '#64A485',
    text:
      'You want to lose weight, way to go! Did you know that losing weight alters brain activity? For example, after following a weight loss program for 6 months, women scored better on memory tests. '
  },
  {
    label: 'Gym',
    color: '#CFC7FF',
    text:
      'You want to lose weight, way to go! Did you know that losing weight alters brain activity? For example, after following a weight loss program for 6 months, women scored better on memory tests. '
  },
  {
    label: 'Tennis',
    color: '#F79375',
    text:
      'You want to lose weight, way to go! Did you know that losing weight alters brain activity? For example, after following a weight loss program for 6 months, women scored better on memory tests. '
  },
  {
    label: 'Running',
    color: '#5F84CB',
    text:
      'You want to lose weight, way to go! Did you know that losing weight alters brain activity? For example, after following a weight loss program for 6 months, women scored better on memory tests. '
  }
]

export default function PreferencesScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalText, setModalText] = useState('')

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        setModalVisible(true)
        setModalText(item.text)
      }}
    >
      <Text
        style={{
          backgroundColor: item.color,
          width: 150,
          fontFamily: 'JosefinSans_300Light',
          padding: 10,
          margin: 10,
          borderRadius: 5,
          textAlign: 'center',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        }}
      >
        {item.label}
      </Text>
    </Pressable>
  )

  return (
    <Container>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>{modalText}</Text>
          </Pressable>
        </View>
      </Modal>
      <HeaderLogo />
      <Skip navigation={navigation} />
      <Text
        style={{
          fontFamily: 'JosefinSans_300Light',
          fontSize: 15,
          marginTop: 20
        }}
      >
        4 / 6
      </Text>
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>
      <Text
        style={{
          fontFamily: 'JosefinSans_300Light',
          fontSize: 20,
          marginTop: 20
        }}
      >
        HI SUSANNE!
      </Text>
      <Text
        style={{
          fontFamily: 'JosefinSans_300Light',
          fontSize: 20,
          marginTop: 20
        }}
      >
        Here are your preferences.
      </Text>
      <FlatList
        data={prefs}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.label}
      />
      <ThinButton
        label='CONTINUE'
        navigation={navigation}
        navigateTo={'Match'}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#F194FF'
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
})
