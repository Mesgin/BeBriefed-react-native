import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Root } from './config/router'

const isUp = true

export default class App extends React.Component {
  render() {
    return (
      <Root screenProps={isUp}/>
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
