import React from 'react';
import {StyleSheet, View, Image, Text, Modal } from 'react-native';
// import Modal from 'react-native-modal';
class MapScreen extends React.Component {
    static navigationOptions = {
        title: 'MAP',
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
                <Image source={require('../../assets/img/map.jpg')} style={styles.img} resizeMode="stretch"/>           
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
    },
});

export default MapScreen