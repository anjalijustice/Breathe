import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import Services from 'breathe/src/services';
import { stackNavigator } from 'react-navigation';
// import { styles } from 'breathe/src/style/stylesheet'

class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('breathe/assets/img/banner.jpg')}
          style={styles.banner}
        />
      );
    }
  }

class HomeScreen extends React.Component { 
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

    static navigationOptions = {
        headerTitle: <LogoTitle />,
        backgroundColor: '#b0e0e6'
    };
 
    render(){
        return (
            // <View style={styles.container}>
            // <View style={styles.buttonsContainer}>
            //     <View>
            //     <TouchableOpacity
            //     style={styles.buttons}
            //     activeOpacity = { .5 }
            //     onPress={() => this.props.navigation.navigate('Schedule')}
            //     >
            //     <Image style={styles.imgStyle} source={require('breatheimg/scheduleIcon.jpg')} />
            //     </TouchableOpacity>
            //     <Text style={styles.TextStyle}> SCHEDULE </Text>       
            //     </View>
            //     <View>
            //     <TouchableOpacity
            //     style={styles.buttons}
            //     activeOpacity = { .5 }
            //     onPress={() => this.props.navigation.navigate('Map')}
            //     >
            //     <Image style={styles.imgStyle} source={require('breatheimg/mapIcon.svg')} />
            //     </TouchableOpacity>
            //     <Text style={styles.TextStyle}> MAP </Text>       
            //     </View>
            // </View>
            
            // <View style={styles.buttonsContainer}>
            //     <View>
            //     <TouchableOpacity
            //     style={styles.buttons}
            //     activeOpacity = { .5 }
            //     onPress={ console.log("Open Gallery")}
            //     >
            //     <Image style={styles.imgStyle} source={require('breatheimg/galleryIcon.png')} />
            //     </TouchableOpacity>
            //     <Text style={styles.TextStyle}> GALLERY </Text>       
            //     </View>   
            //     <View>
            //     <TouchableOpacity
            //     style={styles.buttons}
            //     activeOpacity = { .5 }
            //     onPress={ console.log("Open My Schedule")}
            //     >
            //     <Image style={styles.imgStyle} source={require('breatheimg/myScheduleIcon.png')} />
            //     </TouchableOpacity>
            //     <Text style={styles.TextStyle}> MY SCHEDULE </Text>   
            //     </View>    
            // </View>

            // {/* <View style={styles.buttonsContainer}>
            //     <View>
            //     <TouchableOpacity
            //     style={styles.buttons}
            //     activeOpacity = { .5 }
            //     onPress={() => this.props.navigation.navigate('Food')}
            //     >
            //     <Image style={styles.imgStyle} source={require('breatheimg/foodIcon.svg')} />
            //     </TouchableOpacity>
            //     <Text style={styles.TextStyle}> FOOD </Text>  
            //     </View>
            //     <View>
            //     <TouchableOpacity
            //     style={styles.buttons}
            //     activeOpacity = { .5 }
            //     onPress={ console.log("Placeholder")}
            //     >
            //     </TouchableOpacity>
            //     <Text style={styles.TextStyle}> Placeholder </Text>       
            //     </View>
            // </View> */}

            // <Image style={styles.footer}
            //     source={require('breatheimg/breathe2.jpg')}
            // />

            // </View>




          <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <View>
                <TouchableOpacity
                style={styles.newbuttons}
                activeOpacity = { .5 }
                onPress={() => this.props.navigation.navigate('Schedule', {user: this.state.user})}
                >
                <Text style={styles.TextStyle}> SCHEDULE </Text>       
                {/* <Image style={styles.imgStyle} source={require('breatheimg/scheduleIcon.jpg')} /> */}
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity
                style={styles.newbuttons}
                activeOpacity = { .5 }
                onPress={() => this.props.navigation.navigate('Map')}
                >
                <Text style={styles.TextStyle}> MAP </Text>       
                {/* <Image style={styles.imgStyle} source={require('breatheimg/mapIcon.svg')} /> */}
                </TouchableOpacity>
                </View>
            {/* </View> */}
            
            {/* <View style={styles.buttonsContainer}> */}
                <View>
                <TouchableOpacity
                style={styles.newbuttons}
                activeOpacity = { .5 }
                >
                <Text style={styles.TextStyle}> MY SCHEDULE </Text> 
                {/* <Image style={styles.imgStyle} source={require('breatheimg/myScheduleIcon.png')} /> */}
                </TouchableOpacity>
                </View> 
                <View>
                <TouchableOpacity
                style={styles.newbuttons}
                activeOpacity = { .5 }
                >
                <Text style={styles.TextStyle}> GALLERY </Text>       
                {/* <Image style={styles.imgStyle} source={require('breatheimg/galleryIcon.png')} /> */}
                </TouchableOpacity>
                </View>      
            </View>

            <Image style={styles.footer}
                source={require('breathe/assets/img/breathe2.jpg')}
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
      marginTop: 30,
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
    newbuttons: {
      borderRadius: 10,
      height: 60,
      width: 320,
      margin: 25,
      // marginBottom: 10,
      backgroundColor: '#FCFCFC',
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
      fontWeight: 'bold',
      // fontFamily: 'rockwell'
    },
    imgStyle: {
      width: '60%',
      height: '60%',
      resizeMode: 'contain',
    },
    buttonsContainer: {
      // flexDirection: 'row',
      marginTop: '10%',
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: '25%',
    }
  });

export default HomeScreen;
