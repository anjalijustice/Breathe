import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.banner}
        source={require('./img/banner.jpg')}
      />
      <Text>Now I have to make buttons for menu Items</Text>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttons}
          activeOpacity = { .5 }
          onPress={ console.log("Open Schedule")}
        >
          <Text style={styles.TextStyle}> SCHEDULE </Text>       
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          activeOpacity = { .5 }
          onPress={ console.log("Open Map")}
        >
          <Text style={styles.TextStyle}> MAP </Text>       
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttons}
          activeOpacity = { .5 }
          onPress={ console.log("Open Food")}
        >
          <Text style={styles.TextStyle}> FOOD </Text>       
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          activeOpacity = { .5 }
          onPress={ console.log("Open My Schedule")}
        >
          <Text style={styles.TextStyle}> MY SCHEDULE </Text>       
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#b0e0e6',
  },
  banner: {
    marginTop: 60,
  },
  buttons: {
    borderRadius: 60,
    height: 120,
    width: 120,
    margin: 25,
    backgroundColor: '#b0c4de',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
  TextStyle: {
    color: 'white',
    textAlign:'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  }
});
