import React, { Fragment, useState, useContext } from 'react'
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Ctx from './context'

const HomeScreen = (props) => {
  const [name, setName] = useState('')
  const [isHidden, setIsHidden] = useState(false)

  const context = useContext(Ctx)

  const toggleStatusBar = () => setIsHidden(!isHidden)

  return (
    <Fragment>
      <StatusBar barStyle='dark-content' animated={false} hidden={isHidden} />
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Text>{context.counter}</Text>
        <Button title='increase' onPress={() => context.setCounter(context.counter + 1)} />
        <View style={styles.logo}>
          <Icon name='ios-home' size={30} />
          <Text>Home</Text>
        </View>
        <Text>{name}</Text>
        <TextInput
          style={styles.input}
          placeholder='Type here smthing!'
          onChangeText={setName}
          value={name}
        />
        <Icon name='ios-trash' size={30} color='red' />
        <Button title='click me' onPress={toggleStatusBar} />
        <Button
          title='Go to Details... again'
          onPress={() => props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here'
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
        <Button
          title='Toggle drawer'
          onPress={() => props.navigation.openDrawer()}
        />
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  logo: {
    padding: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1
  },
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black'
  }
})

const LogoTitle = () => (
  <View style={{ alignItems: 'center', flex: 1 }}>
    <Icon name='ios-home' size={30} color='white' />
  </View>
)

HomeScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: <LogoTitle />,
  headerLeft: (
    <View style={{ marginLeft: 5 }}>
      <Button
        onPress={() => navigation.navigate('MyModal')}
        title='Info'
        color='#eee'
      />
    </View>
  )
})

export default HomeScreen
