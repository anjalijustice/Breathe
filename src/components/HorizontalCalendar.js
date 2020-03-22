import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class HorizontalCalendar extends React.Component {
    constructor(props) {
        super(props);
    }

    onPress = (date) => {
        this.props.changeDate(date)
    }
    render(){ 
        return (
            <View style={styles.container}>
                <Text style={styles.monthText}>JULY</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={this.onPress.bind(this, '11')}
                    >
                        <Text style={this.props.dateSelected == '11' ? styles.daySelected : styles.buttonDay}>THU</Text>
                        <Text style={this.props.dateSelected == '11' ? styles.textSelected : styles.buttonText}>11</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={this.onPress.bind(this, '12')}
                    >
                        <Text style={this.props.dateSelected == '12' ? styles.daySelected : styles.buttonDay}>FRI</Text>    
                        <Text style={this.props.dateSelected == '12' ? styles.textSelected : styles.buttonText}>12</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={this.onPress.bind(this, '13')}
                    >
                        <Text style={this.props.dateSelected == '13' ? styles.daySelected : styles.buttonDay}>SAT</Text>
                        <Text style={this.props.dateSelected == '13' ? styles.textSelected : styles.buttonText}>13</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={this.onPress.bind(this, '14')}
                    >
                        <Text style={this.props.dateSelected == '14' ? styles.daySelected : styles.buttonDay}>SUN</Text>                   
                        <Text style={this.props.dateSelected == '14' ? styles.textSelected : styles.buttonText}>14</Text>
                    </TouchableOpacity>

                </View>
                
            </View>
        
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5d8da0',
        width: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
        marginTop: 0,
        marginBottom: 0,
    },
    button: {
        height: 62,
        width: 62,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: RFValue(24),
        fontFamily: 'helvetica77',
        color: 'white',
        textAlign: 'center',

    },
    textSelected: {
        fontSize: RFValue(24),
        textAlign: 'center',
        color: '#fac6c4',
        fontFamily: 'helvetica77',
    },
    buttonDay: {
        fontSize: RFValue(20),
        textAlign: 'center',
        fontFamily: 'helvetica77',
        color: 'white',
    },
    daySelected: {
        fontSize: RFValue(20),
        textAlign: 'center',
        color: '#fac6c4',
        fontFamily: 'helvetica77',
    },
    monthText: {
        textAlign: 'center',
        fontFamily: 'helvetica77',
        color: '#fac6c4',
        fontSize: RFValue(22),
        marginTop: 8,
        marginBottom: 0,
    }
});