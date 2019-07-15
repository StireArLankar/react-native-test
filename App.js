import React, { Fragment, useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native'

const App = () => {
  const [name, setName] = useState('')
  const [isHidden, setIsHidden] = useState(false)

  const toggleStatusBar = () => setIsHidden(!isHidden)

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" animated={false} hidden={isHidden} />
      <View>
        <Text>Hello World!</Text>
        <Text>{name}</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here smthing!"
          onChangeText={setName}
          value={name}
        />
        <Button title='click me' onPress={toggleStatusBar} />
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black'
  }
})

export default App;
