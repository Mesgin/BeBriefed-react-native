import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StatusIndicator from './StatusIndicator'

export default class StatusScreen extends Component {
  render() {
    return (
      <View style={styles.container} >
      <StatusIndicator isUp={this.props.isUp}/>
        <Text style={styles.statusText}>
          Service is {this.props.isUp ? 'Up' : 'Down'}
        </Text>
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
  statusText: {
    fontSize: 40
  }
})
