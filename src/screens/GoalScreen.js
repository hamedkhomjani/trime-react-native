import React from 'react'
import { Text, FlatList } from 'react-native'
import styled from 'styled-components/native'
import Container from '../components/Container'
import IconButton from '../components/IconButton'
import HeaderLogo from '../components/HeaderLogo'
import Skip from '../components/Skip'
import ThinButton from '../components/ThinButton'
import SubtitleButton from '../components/SubtitleButton'

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const QuestionWrapper = styled.View`
  flex: 5;
  justify-content: center;
  align-items: center;
  width: 80%;
`

const ButtonWrapper = styled.View`
  flex: 7;
  width: 100%;
  top: -60px;
  align-items: center;
`

const data = [
  { name: 'Vegan', url: require('../../assets/icons/Vegan.png') },
  { name: 'Food', url: require('../../assets/icons/Food.png') },
  { name: 'Sleep', url: require('../../assets/icons/Sleep.png') },
  { name: 'Walks', url: require('../../assets/icons/Walks.png') },
  { name: 'Yoga', url: require('../../assets/icons/Yoga.png') },
  { name: 'Health', url: require('../../assets/icons/Health.png') },
  { name: 'Tennis', url: require('../../assets/icons/Tennis.png') },
  { name: 'Boxing', url: require('../../assets/icons/Boxing.png') },
  { name: 'Gym', url: require('../../assets/icons/Gym.png') },
  { name: 'Dancing', url: require('../../assets/icons/Dancing.png') },
  {
    name: 'Weightlifting',
    url: require('../../assets/icons/Weightlifting.png')
  },
  { name: 'Running', url: require('../../assets/icons/Running.png') }
]

export default function GoalScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <IconButton name={item.name} url={item.url} />
  )

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
        1 / 6
      </Text>
      <Wrapper>
        <QuestionWrapper>
          <Text
            style={{
              fontFamily: 'JosefinSans_400Regular',
              fontSize: 20,
              textAlign: 'center'
            }}
          >
            WHAT IS YOUR GOAL?
          </Text>
        </QuestionWrapper>

        <ButtonWrapper
          contentContainerStyle={{ alignItems: 'center' }}
          data={data}
          renderItem={renderItem}
          numColumns={3}
          keyExtractor={item => item + 'icon'}
        >
          <SubtitleButton
            navigation={navigation}
            navigateTo='Workout'
            label='BECOME STRONG'
            sublabel='Build Muscles'
          ></SubtitleButton>
          <SubtitleButton
            navigation={navigation}
            navigateTo='Workout'
            label='LOSE WEIGHT'
            sublabel='Drop some pounds'
          ></SubtitleButton>
          <SubtitleButton
            navigation={navigation}
            navigateTo='Workout'
            label='KEEP YOUR FIGURE'
            sublabel='Stay in shape'
          ></SubtitleButton>
        </ButtonWrapper>
      </Wrapper>

      <Text
        style={{
          flex: 0.1,
          fontFamily: 'JosefinSans_300Light',
          fontSize: 20
        }}
        onPress={() => navigation.navigate('LearnMore')}
      >
        BACK
      </Text>
    </Container>
  )
}
