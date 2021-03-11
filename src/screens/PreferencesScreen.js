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
const data = require('../data')

const AvatarWrapper = styled.View`
  width: 100px;
  height: 100px;
  background: ${data.colors.grey};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  background: rgba(255, 255, 255, 0.75);
  margin: 0;
`
const PrefButton = styled.View`
  background: ${props => props.color};
  width: 150px;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px ${data.colors.shadow};
`
const BottomWrapper = styled.View`
  flex: 1;
`

const Overlay = styled.Pressable`
  border-radius: 20px;
  width: 80%;
  padding: 10px;
  elevation: 2;
  background: ${props => props.color};
  box-shadow: 0px 4px 4px ${data.colors.shadow};
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
      'You prefer cardio training. Thats great! Did you know that listening to music while exercising can improve work out performance by 15%? Try listening to music next time you work out to improve your performance.'
  },
  {
    label: 'Beginner',
    color: '#FFB6C1',
    text:
      'You are a workout beginner. Awesome making it here! The biggest thing when you first start working out is establishing the habit—getting used to being on your feet. '
  },
  {
    label: 'Vegan',
    color: '#64A485',
    text:
      'Being a vegan reduces your risk of heart disease by lowering cholesterol levels. It also cuts your carbon footprint in half. Way to go!'
  },
  {
    label: 'Gym',
    color: '#CFC7FF',
    text:
      'Did you know that the more muscle mass you have, the more fat your body burns while resting. So what are you waiting for? Go and get those muscles!'
  },
  {
    label: 'Tennis',
    color: '#F79375',
    text:
      'Tennis is fun! Did you know that it has been calculated that an hour-long game of singles tennis burns around 600 calories for men and 420 calories for women.'
  },
  {
    label: 'Running',
    color: '#5F84CB',
    text:
      'Running is great way of working out. Dont forget that a good warmup makes it much easier to get going and keep going. '
  }
]

export default function PreferencesScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalText, setModalText] = useState('')
  const [modalColor, setModalColor] = useState('')
  const [currentPref, setCurrentPref] = useState('')

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        setModalVisible(true)
        setModalText(item.text)
        setModalColor(item.color)
        setCurrentPref(item.label)
      }}
    >
      <PrefButton color={item.color}>
        <Text
          style={{
            fontFamily: 'JosefinSans_300Light',
            textAlign: 'center'
          }}
        >
          {item.label}
        </Text>
      </PrefButton>
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
        <CenteredView>
          <Overlay
            color={modalColor}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyleTitle}>
              {currentPref.toUpperCase()}
            </Text>
            <Text style={styles.textStyle}>{modalText}</Text>
          </Overlay>
        </CenteredView>
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
      <BottomWrapper>
        <ThinButton
          label='CONTINUE'
          navigation={navigation}
          navigateTo={'Match'}
        />
      </BottomWrapper>
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
    color: 'black',
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'JosefinSans_300Light'
  },
  textStyleTitle: {
    color: 'black',
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'JosefinSans_400Regular'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
})
