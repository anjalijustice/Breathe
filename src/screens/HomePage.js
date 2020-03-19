import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import Services from 'breathe/src/services';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class HomeScreen extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      };
    }  

    async componentWillMount () {
      this.getOrCreateUser();
      this.setState({ isLoading: false });
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
        backgroundColor: '#dfeaef',
        headerStyle: {
          height: 0
        }
    };
 
    render(){
        return (
            <View style={styles.buttonsContainer}>
               <ImageBackground source={require('../../assets/img/dust.png')} style={styles.backgroundImage}>
                <View style={styles.buttons}>
                <TouchableOpacity
                activeOpacity = { .5 }
                onPress={() => this.props.navigation.navigate('SCHEDULE', {user: this.state.user})}
                >
                <Text style={styles.TextStyle}> SCHEDULE </Text>       
                </TouchableOpacity>
                </View>
                <View style={styles.buttons}>
                <TouchableOpacity
                activeOpacity = { .5 }
                onPress={() => this.props.navigation.navigate('FAVORITES', {user: this.state.user})}
                >
                <Text style={styles.TextStyle}> FAVORITES </Text> 
                </TouchableOpacity>
                </View> 
                <View style={styles.buttons}>
                <TouchableOpacity
                activeOpacity = { .5 }
                onPress={() => this.props.navigation.navigate('TEACHERS')}
                >
                <Text style={styles.TextStyle}> TEACHERS </Text>
                </TouchableOpacity>
                </View>    
                <View style={styles.buttons}>
                <TouchableOpacity
                activeOpacity = { .5 }
                onPress={() => this.props.navigation.navigate('MAP')}
                >
                <Text style={styles.TextStyle}> MAP </Text>       
                </TouchableOpacity>
                </View>

                <View style={styles.logoContainer}>
                <Image
                  source={require('../../assets/img/breathe_logo.png')}
                  style={styles.logo}
                />  
                </View>

                </ImageBackground>
            </View>
        );
      }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#dfeaef',
    height: hp('100%'),
  },
    buttons: {
      borderRadius: 30,
      height: hp('7%'),
      width: wp('65%'),
      marginTop: 40,
      backgroundColor: '#5d8da0',
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
      fontSize: 36,
      fontFamily: 'chelseaMarketReg',
      fontWeight: 'bold'
    },
    logoContainer: {
      marginTop: '20%',
    },
    logo: {
      height: hp('30%'),
      width: wp('90%'),
      resizeMode: 'contain',
    },
    backgroundImage: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
      height: '100%',
    }
  });

export default HomeScreen;
