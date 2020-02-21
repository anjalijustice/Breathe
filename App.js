import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { 
  HomeScreen, 
  ScheduleScreen, 
  FoodScreen,
  MapScreen,
  FavoritesScreen,
  TeacherScreen,
  WorkshopScreen,
} from 'breathe/src/screens/';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Schedule: ScheduleScreen,
    Food: FoodScreen,
    Map: MapScreen,
    Favorites: FavoritesScreen,
    Teachers: TeacherScreen,
<<<<<<< HEAD
    Workshop: WorkshopScreen
=======
    Workshop: WorkshopScreen,
    Teacher: TeacherInfo,
>>>>>>> ScheduleCard and TeacherCard now in use
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
        color: 'darkslategrey',
        fontFamily: 'chelseaMarketReg',
      },
  },
})

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}