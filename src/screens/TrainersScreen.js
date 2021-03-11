import React, { useState } from 'react'
import { StyleSheet, FlatList, Text, Pressable, View } from 'react-native'
import styled from 'styled-components'
import Container from '../components/Container'
import HeaderLogo from '../components/HeaderLogo'
import Skip from '../components/Skip'
import TrainerCard from '../components/TrainerCard'
const keyGen = () => '_' + Math.random().toString(36).substr(2, 9)

const data = [
  {
    name: 'Maria Henriksson',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['Cardio', 'Running', 'Weight-loss'],
    rating: 4.7,
    image: require('../../assets/maria.jpg')
  },
  {
    name: 'Larry Peterson',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['Cardio', 'Beginner', 'Weight-loss'],
    rating: 4.2,
    image: require('../../assets/larry.jpg')
  },
  {
    name: 'Moa Falk',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['Beginner', 'Weight-loss'],
    rating: 3.9,
    image: require('../../assets/moa.jpg')
  },
  ,
  {
    name: 'Hakim Ahmed',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['Gym', 'Beginner'],
    rating: 4.7,
    image: require('../../assets/hakim.jpg')
  },
  ,
  {
    name: 'Erik Adamsson',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['Gym'],
    rating: 3.8,
    image: require('../../assets/erik.jpg')
  }
]
const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const QuestionWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 80%;
`

const ButtonWrapper = styled.ScrollView`
  flex: 7;
  width: 100%;
  margin-bottom: 20px;
`

const TrainersScreen = ({ navigation }) => {
  return (
    <Container>
      <HeaderLogo />
      <Skip navigation={navigation} />
      <Text
        style={{
          fontFamily: 'JosefinSans_300Light',
          fontSize: 15,
          marginTop: 20
        }}
      >
        6 / 6
      </Text>
      <Wrapper>
        <QuestionWrapper>
          <Text
            style={{
              fontFamily: 'JosefinSans_300Light',
              fontSize: 20,
              textAlign: 'center'
            }}
          >
            THESE COULD BE YOUR FITNESS MATCH
          </Text>
        </QuestionWrapper>

        <ButtonWrapper
          contentContainerStyle={{ alignItems: 'center' }}
          keyExtractor={item => item + 'icon'}
        >
          {data.map(trainer => (
            <TrainerCard
              keyExtractor={() => keyGen}
              trainer={trainer}
            ></TrainerCard>
          ))}
        </ButtonWrapper>
      </Wrapper>
      <Text
        style={{
          flex: 0.1,
          fontFamily: 'JosefinSans_300Light',
          fontSize: 20
        }}
        onPress={() => navigation.navigate('Preferences')}
      >
        BACK
      </Text>
    </Container>
  )
}

export default TrainersScreen
