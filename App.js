import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { 
  HomeScreen, 
  ScheduleScreen, 
  FoodScreen,
  MapScreen,
  FavoritesScreen,
  TeachersScreen,
  TeacherInfo,
  WorkshopScreen,
  TeacherInfo,
} from 'breathe/src/screens/';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Schedule: ScheduleScreen,
    Food: FoodScreen,
    Map: MapScreen,
    Favorites: FavoritesScreen,
<<<<<<< HEAD
    Teachers: TeacherScreen,
    Workshop: WorkshopScreen,
    Teacher: TeacherInfo,
=======
    Teachers: TeachersScreen,
    TeacherInfo: TeacherInfo,
    Workshop: WorkshopScreen,
>>>>>>> 88c52f3ead52b20572e2ca1a848293f087c106b6
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