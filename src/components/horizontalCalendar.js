import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class HorizontalCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateSelected: null,
        }
    }
    render(){ 
        return (
            //Need to make buttons' style change on click. 
            //Make an event handler to deal with changing the dateSelected when a touchableopacity is clicked
            //Figure out how ot access the state of this component from the schedule page
            <View style={styles.container}>
                <Text style={styles.monthText}>July</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>11</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>12</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>13</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>14</Text>
                    </TouchableOpacity>

                </View>
                
            </View>
        
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
    },
    button: {
        borderRadius: 35,
        height: 70,
        width: 70,
        margin: 10,
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
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black'
    },
    monthText: {
        textAlign: 'center',
    }
});