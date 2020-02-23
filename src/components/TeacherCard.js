import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class TeacherCard extends React.Component {
    onPress = (item) => {
        this.props.navigation.navigate('Teacher', {
            user: this.props.user,
            item: item,
        })
    }

   render() {
    return (
        <TouchableOpacity 
        style={styles.card}
        onPress={()=> this.onPress(this.props.item)}
        >
            {/* Teacher Name */}
            <Text style={styles.cardText}>{this.props.item.fullName}</Text> 
        </TouchableOpacity>
       )
   }
}


const styles = StyleSheet.create({

card: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    marginLeft: '2%',
    width: '96%',
    marginTop: 5,
    marginBottom: 0,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
    width: 3,
    height: 3,
    }
},
cardText: {
    fontSize: 16,
    padding: 10,
    margin: 0,
    opacity: 1,
    textAlign: 'left',
    color: 'darkslategrey',
    opacity: 1,
    fontFamily: 'chelseaMarketReg',
    marginRight: 50,
},
});
