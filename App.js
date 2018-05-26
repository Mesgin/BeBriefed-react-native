import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Root } from './config/router'

const isUp = true

export default class App extends React.Component {
  constructor(props) {
    super(props)

    state = {
      selectedService: 'web',
      services: [
        { key: 'web', isUp: true, lastUpTime: null },
        { key: 'db', isUp: false, lastUpTime: new Date((new Date()).getTime() - 5 * 60 * 1000) },
        { key: 'mail', isUp: true, lastUpTime: null },
      ]
    }

    this._switchService = this._switchService.bind(this)
  }

  _switchService(nextService) {
    this.setState({ selectedService: nextService })
  }

  render() {
    return (
      <Root
        selectedService={this.state.selectedService}
        services={this.state.services}
        onServiceChange={this._switchService}
      />
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
