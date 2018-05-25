import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'


const StatusIndicator =  (props) => {
  
  return (
      <View style={styles.border} >
        <Text style={[styles.character, props.isUp && styles.isUp]}>
          <Icon name={props.isUp ? 'arrow-up' : 'arrow-down'} size={180}/>
          {props.isUp}
        </Text>
      </View>
  )
}
const styles = StyleSheet.create({
  border: {
    borderWidth: 20,
    borderColor: '#f21d44',
    borderRadius: 200,
    width: 240,
    height: 240,
    justifyContent: 'center',
  },
  character: {
    fontSize: 160,
    textAlign: 'center',
    backgroundColor: 'rgb(0,0,0)',
    color: '#BF1534'
  }
})

export default StatusIndicator
