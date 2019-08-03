import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.banner}
        source={require('./img/banner.jpg')}
      />
      <Text>Now I have to make buttons for menu Items</Text>

      {/* <Button 
        style={styles.buttons}
        onPress={() => {
          console.log('Open Schedule');
        }}
        //Add event handler later, just getting basic button functionality and styling done now
        title="Schedule"
      /> */}

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
    backgroundColor: '#b0c4de',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
});
