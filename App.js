import React from 'react';
import { StyleSheet, View, StatusBar, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as Font from 'expo-font';
import { 
  HomeScreen, 
  ScheduleScreen, 
  MapScreen,
  FavoritesScreen,
  TeachersScreen,
  TeacherInfo,
  WorkshopScreen,
} from 'breathe/src/screens/';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Stack = createStackNavigator();

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
      return (
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Home" 
            screenOptions={{
              headerBackTitle: null,
              headerStyle: {
                backgroundColor: '#fac6c4',
                height: hp('12%'),
                borderBottomWidth: 0,
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 32,
                color: '#5d8da0',
                fontFamily: 'chelseaMarketReg'
              },
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SCHEDULE" component={ScheduleScreen} />
            <Stack.Screen name="MAP" component={MapScreen} />
            <Stack.Screen name="FAVORITES" component={FavoritesScreen} />
            <Stack.Screen name="TEACHERS" component={TeachersScreen} />
            <Stack.Screen name="Teacher" component={TeacherInfo} />
            <Stack.Screen name="Workshop" component={WorkshopScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )
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