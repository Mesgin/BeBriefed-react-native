import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StatusIndicator from './StatusIndicator'

const StatusIndicator =  (props) => {
      <View style={styles.border} >
        <Text style={styles.character}>
          x
        </Text>
      </View>
}
const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: '#f21d44',
    borderRadius: 200,
    width: 240,
    height: 240,
    justifyContent: 'center',
  },
  character: {
    fontSize: 160,
    textAlign: 'center',
    backgroundColor: 'black',
    color: '#BF1534'
  }
})

export default StatusIndicator
