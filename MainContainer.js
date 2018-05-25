import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import StatusScreen from './StatusScreen'

export default class MainContainer extends Component {
  render() {
    return (
      <View style={styles.container} >
        <StatusScreen />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
