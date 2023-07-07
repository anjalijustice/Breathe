import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class TeacherCard extends React.Component {
    onPress = (teacher) => {
        this.props.navigation.navigate('Teacher', {
            user: this.props.user,
            teacher: teacher,
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
    backgroundColor: '#5d8da0',
    shadowColor: '#000',
    marginBottom: '1%',
    height: hp('6%'),
    justifyContent: 'center'
},
cardText: {
    fontSize: 20,
    textAlign: 'left',
    color: 'white',
    fontFamily: 'helvetica77',
    marginLeft: '8%'
},
});
