import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StatusIndicator from './StatusIndicator'

export default class StatusScreen extends Component {
  _renderTab(selected, services) {
    const thisService = services.find(s => s.key === selected)
    return (
      <StatusScreen
        isUp={thisService.isUp}
        lastUpTime={thisService.lastUpTime}
      />
    )
  }
  render() {
    return (
      <View style={styles.container} >
        {this._renderTab(this.props.selectedService, this.props.services)}
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
