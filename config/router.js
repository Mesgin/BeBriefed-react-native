import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import StatusScreen from '../screens/StatusScreen'

export const StatusStack = createStackNavigator({
  StatusScreen: {
    screen: StatusScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'BeBriefed',
        tabBarOnPress: () => console.log('hi')
      }
    }
  }
})

export const Tabs = createBottomTabNavigator({
  WebServer: {
    screen: StatusStack,
    navigationOptions: {
      tabBarLabel: 'Web Server',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      tabBarOnPress: () => alert('hi'),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'black'
        }
      },
    },
  },
  DBServer: {
    screen: StatusStack,
    navigationOptions: {
      tabBarLabel: 'DB Server',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
  MailServer: {
    screen: StatusStack,
    navigationOptions: {
      tabBarLabel: 'Mail Server',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },

})

export const Root = createStackNavigator({
  Tabs: {
    screen: Tabs
  }
},
  {
    headerMode: 'none',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'red'
      }
    },
  },

)