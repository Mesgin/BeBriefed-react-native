import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Root } from './config/router'

const isUp = true

export default class App extends React.Component {
  constructor(props){
    super(props)

    state = {
      isUp: true,
      lastUpTime: new Date((new Date()).getTime() - 5*60*1000)
    }
  }
  render() {
    return (
      <Root isUp={this.state.isUp} lastUpTime={this.state.lastUpTime} />
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
