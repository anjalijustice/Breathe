import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Constants from 'expo-constants';
import { Text } from 'react-native';
import HomeScreen from 'breathe/src/screens/HomePage';
import ScheduleScreen from 'breathe/src/screens/Schedule';
import FoodScreen from 'breathe/src/screens/FoodSharing';
import MapScreen from 'breathe/src/screens/Map';
// Redux Store
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { View } from 'react-native';
import rootReducer from './src/reducers';

const store = createStore(rootReducer);

<Provider store={store} />

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