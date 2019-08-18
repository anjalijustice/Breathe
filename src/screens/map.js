import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
class MapScreen extends React.Component {
    static navigationOptions = {
        title: 'Map',
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
                    This is a Map wow!!
                </Text>
            </View>
        )
        
       
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#b0e0e6',
    },
    text: {
        fontSize: 40,
    }
});

export default MapScreen