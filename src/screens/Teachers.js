import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
export default class TeacerScreen extends React.Component {
    static navigationOptions = {
        title: 'Teachers',
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
      }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Teacher info woo
                </Text>
            </View>
        )  
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'rgb(220, 230, 232)',
    },
    text: {
        fontSize: 40,
    }
});