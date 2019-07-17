import React from 'react'
import { View, Text, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const DetailsScreen = (props) => {
  const { params } = props.navigation.state
  const { itemId, otherParam } = params

  return (
    <View>
      <Text>Details Screen</Text>
      <Text>itemId: {itemId}</Text>
      <Text>otherParam: {otherParam}</Text>
      <Button
        title='Go to Details... again'
        onPress={() =>
          props.navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
            otherParam: 'Hello ' + Math.floor(Math.random() * 100)
          })}
      />
      <Button
        title='Go to Home'
        onPress={() => props.navigation.navigate('Home')}
      />
      <Button
        title='Go back'
        onPress={() => props.navigation.goBack()}
      />
    </View>
  )
}

const LogoTitle = (props) => (
  <View style={{ alignItems: 'center', flex: 1 }}>
    <Icon name='md-infinite' size={30} color='white' />
    <Text>{props.text}</Text>
  </View>
)

DetailsScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.otherParam,
  headerTitle: <LogoTitle text={navigation.state.params.otherParam} />,
  headerRight: (
    <Button
      onPress={() => alert('This is a button!')} //eslint-disable-line
      title='Info'
      color='green'
    />
  ),
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
})

export default DetailsScreen
