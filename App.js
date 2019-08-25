import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Constants from 'expo-constants';
import { Text } from 'react-native';
import HomeScreen from 'breathe/src/screens/HomePage';
import ScheduleScreen from './src/screens/Schedule';
import FoodScreen from './src/screens/FoodSharing';
import MapScreen from './src/screens/Map';
// Redux Store
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { View } from 'react-native';
import rootReducer from './src/reducers';
import Services from 'breathe/src/services';

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
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount () {
    this.getOrCreateUser();
 }

  async getOrCreateUser() {
    let user = await Services.Users.getUser(Constants.installationId);
    if (user == null) {
      user = await Services.Users.createUser({
        installationId: Constants.installationId,
      });
    }
    this.setState({user: user});
  }
  render() {
    return <AppContainer user={this.state.user} />;
  }
}