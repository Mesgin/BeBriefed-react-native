import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'


const StatusIndicator =  (props) => {
  
  return (
      <View style={styles.border} >
      
          {/* <Icon name={props.isUp ? 'arrow-up' : 'arrow-down'} type='font-awesome' size={120}/> */}
          <Icon name='check' type='font-awesome' size={120} color='#27c687'/>

      </View>
  )
}
const styles = StyleSheet.create({
  border: {
    borderWidth: 20,
    borderColor: '#27c687',
    borderRadius: 200,
    width: 240,
    height: 240,
    justifyContent: 'center',
  },
  character: {
    textAlign: 'center',
    // backgroundColor: 'rgb(0,0,0)',
    // color: '#BF1534'
  }
})

export default StatusIndicator
