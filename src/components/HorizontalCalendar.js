import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

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
                <Text style={styles.monthText}>July</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={this.props.dateSelected == '11' ? styles.buttonSelected : styles.button}
                        onPress={this.onPress.bind(this, '11')}
                    >
                        <Text style={styles.buttonDay}>THU</Text>
                        <Text style={styles.buttonText}>11</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={this.props.dateSelected == '12' ? styles.buttonSelected : styles.button}
                        onPress={this.onPress.bind(this, '12')}
                    >
                        <Text style={styles.buttonDay}>FRI</Text>    
                        <Text style={styles.buttonText}>12</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={this.props.dateSelected == '13' ? styles.buttonSelected : styles.button}
                        onPress={this.onPress.bind(this, '13')}
                    >
                        <Text style={styles.buttonDay}>SAT</Text>
                        <Text style={styles.buttonText}>13</Text>
                    </TouchableOpacity><TouchableOpacity 
                        style={this.props.dateSelected == '14' ? styles.buttonSelected : styles.button}
                        onPress={this.onPress.bind(this, '14')}
                    >
                        <Text style={styles.buttonDay}>SUN</Text>                   
                        <Text style={styles.buttonText}>14</Text>
                    </TouchableOpacity>

                </View>
                
            </View>
        
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECECEC',
        width: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
        marginTop: 0,
        marginBottom: 10,
    },
    buttonSelected: {
        borderRadius: 31,
        height: 62,
        width: 62,
        backgroundColor: '#C6E7EC',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    button: {
        borderRadius: 31,
        height: 62,
        width: 62,
        backgroundColor: '#ECECEC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'chelseaMarketReg',
        color: 'darkslategrey',
        textAlign: 'center',
    },
    buttonDay: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'chelseaMarketReg',
        color: 'darkslategrey',
    },
    monthText: {
        textAlign: 'center',
        fontFamily: 'chelseaMarketReg',
        color: 'darkslategrey',
        fontSize: 20,
        marginTop: 5,
        marginBottom: 0,
    }
});