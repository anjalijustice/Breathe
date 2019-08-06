import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { stackNavigator } from 'react-navigation';

class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('../img/banner.jpg')}
          style={styles.banner}
        />
      );
    }
  }

class HomeScreen extends React.Component {   
    static navigationOptions = {
        headerTitle: <LogoTitle />,
        backgroundColor: '#b0e0e6'
    };
 
    render(){
        return (
            <View style={styles.container}>
            {/* <Image style={styles.banner}
                source={require('../img/banner.jpg')}
            />
             */}
            <View style={styles.buttonsContainer}>
                <View>
                <TouchableOpacity
                style={styles.buttons}
                activeOpacity = { .5 }
                onPress={() => this.props.navigation.navigate('Schedule')}
                >
                <Image style={styles.imgStyle} source={require('../img/scheduleIcon.jpg')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}> SCHEDULE </Text>       
                </View>
                <View>
                <TouchableOpacity
                style={styles.buttons}
                activeOpacity = { .5 }
                onPress={ console.log("Open Map")}
                >
                <Image style={styles.imgStyle} source={require('../img/mapIcon.svg')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}> MAP </Text>       
                </View>
            </View>
            

            <View style={styles.buttonsContainer}>
                <View>
                <TouchableOpacity
                style={styles.buttons}
                activeOpacity = { .5 }
                onPress={ console.log("Open Food")}
                >
                <Image style={styles.imgStyle} source={require('../img/foodIcon.svg')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}> FOOD </Text>  
                </View>     
                <View>
                <TouchableOpacity
                style={styles.buttons}
                activeOpacity = { .5 }
                onPress={ console.log("Open My Schedule")}
                >
                <Image style={styles.imgStyle} source={require('../img/myScheduleIcon.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}> MY SCHEDULE </Text>   
                </View>    
            </View>


            <View style={styles.buttonsContainer}>
                <View>
                <TouchableOpacity
                style={styles.buttons}
                activeOpacity = { .5 }
                onPress={ console.log("Open Gallery")}
                >
                <Image style={styles.imgStyle} source={require('../img/galleryIcon.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}> GALLERY </Text>       
                </View>
                <View>
                <TouchableOpacity
                style={styles.buttons}
                activeOpacity = { .5 }
                onPress={ console.log("Placeholder")}
                >
                </TouchableOpacity>
                <Text style={styles.TextStyle}> Placeholder </Text>       
                </View>
            </View>

            <Image style={styles.footer}
                source={require('../img/breathe2.jpg')}
            />

            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#b0e0e6',
  },
  banner: {
  },
  buttons: {
    borderRadius: 55,
    height: 110,
    width: 110,
    margin: 30,
    marginBottom: 10,
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
    color: 'black',
    textAlign:'center',
    fontSize: 16,
    // fontFamily: 'rockwell'
  },
  imgStyle: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '20%',
  }
});

export default HomeScreen