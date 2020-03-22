import React from 'react';
import { StyleSheet, View, StatusBar, ActivityIndicator } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as Font from 'expo-font';
import { 
  HomeScreen, 
  ScheduleScreen, 
  FoodScreen,
  MapScreen,
  FavoritesScreen,
  TeachersScreen,
  TeacherInfo,
  WorkshopScreen,
} from 'breathe/src/screens/';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    SCHEDULE: ScheduleScreen,
    Food: FoodScreen,
    MAP: MapScreen,
    FAVORITES: FavoritesScreen,
    TEACHERS: TeachersScreen,
    TeacherInfo: TeacherInfo,
    Workshop: WorkshopScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fac6c4',
        height: hp('10%'),
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#5d8da0',
        fontFamily: 'chelseaMarketReg',
      },
  },
})

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  state = {
    assetsLoaded: false,
  };

  async componentDidMount() {
      await Font.loadAsync({
        'chelseaMarketReg': require('breathe/assets/fonts/ChelseaMarket-Regular.ttf'),
        'neutraDisplay': require('breathe/assets/fonts/NeutraDisplayDraft.otf'),
        'helvetica57': require('breathe/assets/fonts/Helvetica-Neue-LT-Std-57-Condensed_22529.ttf'),
        'helvetica77': require('breathe/assets/fonts/HelveticaNeueLTStd-BdCn.otf')
      });

      this.setState({ assetsLoaded: true });
  }
  render() {
    const {assetsLoaded} = this.state;
    if(assetsLoaded){
      return <AppContainer />;
    }
    else{
      return (
        <View style={styles.container}>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
        </View>
    );
    }
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },
});