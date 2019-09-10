import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Text } from 'react-native';
import HomeScreen from './src/screens/HomePage';
import ScheduleScreen from './src/screens/schedule';
import FoodScreen from './src/screens/FoodSharing';
import MapScreen from './src/screens/map';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Schedule: ScheduleScreen,
    Food: FoodScreen,
    Map: MapScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#b0e0e6',
        height: 80,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 32,
      },
  },
})

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}