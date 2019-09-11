import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
export default class GalleryScreen extends React.Component {
    static navigationOptions = {
        title: 'Gallery',
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
                    This is a Gallery!
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