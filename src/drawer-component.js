import React, { useContext } from 'react'
// import { DrawerItems, SafeAreaView } from 'react-navigation'
import { SafeAreaView } from 'react-navigation'
import { StyleSheet, ScrollView, Text, Button } from 'react-native'

import Ctx from './context'

const CustomDrawerContentComponent = (props) => {
  const context = useContext(Ctx)
  return (
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        {/* <DrawerItems {...props} /> */}
        <Text>Hello World</Text>
        <Text>{context.counter}</Text>
        <Button
          title='Toggle drawer'
          onPress={() => props.navigation.closeDrawer()}
        />
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default CustomDrawerContentComponent
