import React from 'react'
import { Text, FlatList } from 'react-native'
import styled from 'styled-components/native'
import Container from '../components/Container'
import IconButton from '../components/IconButton'
import HeaderLogo from '../components/HeaderLogo'
import Skip from '../components/Skip'
import ThinButton from '../components/ThinButton'

const keyGen = () => '_' + Math.random().toString(36).substr(2, 9)

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`

const QuestionWrapper = styled.View`
  flex: 5;
  justify-content: center;
  align-items: center;
  width: 80%;
`

const ButtonWrapper = styled.FlatList`
  height: 400px;
  width: 100%;
  top: -25px;
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

export default function InterestsScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <IconButton name={item.name} url={item.url} key={keyGen()} />
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
        4 / 6
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
            TIME TO CUSTOMIZE YOUR INTERESTS
          </Text>
        </QuestionWrapper>

        <ButtonWrapper
          contentContainerStyle={{ alignItems: 'center' }}
          data={data}
          renderItem={renderItem}
          numColumns={3}
          keyExtractor={() => keyGen()}
        ></ButtonWrapper>
        <ThinButton
          label={'CONTINUE'}
          navigation={navigation}
          navigateTo={'Preferences'}
        ></ThinButton>
      </Wrapper>
      <Text
        style={{
          flex: 0.1,
          marginTop: 20,
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
