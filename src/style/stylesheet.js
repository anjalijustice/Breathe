import { StyleSheet } from 'react-native'

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

  export default styles