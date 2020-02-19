import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { 
  HomeScreen, 
  ScheduleScreen, 
  FoodScreen,
  MapScreen,
  FavoritesScreen,
<<<<<<< HEAD
=======
  TeacherScreen,
>>>>>>> ccb740cb5449e8ec5448545573c59087ee94d416
  WorkshopScreen,
} from 'breathe/src/screens/';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Schedule: ScheduleScreen,
    Food: FoodScreen,
    Map: MapScreen,
    Favorites: FavoritesScreen,
<<<<<<< HEAD
=======
    Teachers: TeacherScreen,
>>>>>>> ccb740cb5449e8ec5448545573c59087ee94d416
    Workshop: WorkshopScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'rgb(220, 230, 232)',
        height: 80,
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 32,
        color: 'rgb(82, 141, 161)'
      },
  },
})

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}