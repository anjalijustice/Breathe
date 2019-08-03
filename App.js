import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.banner}
        source={require('./img/banner.jpg')}
      />
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttons}
          activeOpacity = { .5 }
          onPress={ console.log("Open Schedule")}
        >
          <Image style={styles.imgStyle} source={require('./img/scheduleIcon.jpg')} />
          <Text style={styles.TextStyle}> SCHEDULE </Text>       
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          activeOpacity = { .5 }
          onPress={ console.log("Open Map")}
        >
          <Image style={styles.imgStyle} source={require('./img/mapIcon.svg')} />
          <Text style={styles.TextStyle}> MAP </Text>       
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttons}
          activeOpacity = { .5 }
          onPress={ console.log("Open Food")}
        >
          <Image style={styles.imgStyle} source={require('./img/foodIcon.svg')} />
          <Text style={styles.TextStyle}> FOOD </Text>       
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          activeOpacity = { .5 }
          onPress={ console.log("Open My Schedule")}
        >
          <Image style={styles.imgStyle} source={require('./img/myScheduleIcon.png')} />
          <Text style={styles.TextStyle}> MY SCHEDULE </Text>       
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttons}
          activeOpacity = { .5 }
          onPress={ console.log("Open Gallery")}
        >
          <Image style={styles.imgStyle} source={require('./img/galleryIcon.png')} />
          <Text style={styles.TextStyle}> GALLERY </Text>       
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          activeOpacity = { .5 }
          onPress={ console.log("Placeholder")}
        >
          <Text style={styles.TextStyle}> Placeholder </Text>       
        </TouchableOpacity>
      </View>

      <Image style={styles.footer}
        source={require('./img/breathe2.jpg')}
      />

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
  imgStyle: {
    width: '40%',
    height: '40%',
    resizeMode: 'contain',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 150,
  }
});
