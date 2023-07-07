import React from 'react';
import {StyleSheet, View, Image, Text, Modal } from 'react-native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
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
                <View style={{ flexShrink: 1, height: 700, width: 400 }}>
                <ReactNativeZoomableView
                    maxZoom={30}
                    contentWidth={450}
                    contentHeight={750}
                >
                    <Image source={require('../../assets/img/map.jpg')} style={styles.img} resizeMode="contain"/>   
                </ReactNativeZoomableView> 
                </View>       
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

export default MapScreen;