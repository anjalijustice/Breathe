import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import Services from '../services';
import TeacherCard from '../components/TeacherCard';

export default class TeachersScreen extends React.Component {
    static navigationOptions = {
        title: 'Teachers',
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: props.navigation.getParam('teachers', []),
        }
      }

    _renderItem = ({item}) => {
        return (
            <View style={styles.list}>
                <TeacherCard item={item} navigation={this.props.navigation} user={this.state.user}/>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/img/breathe5.jpg')} style={styles.backgroundImage}>
                    <FlatList 
                        contentInset={{bottom: 60}}
                        contentContainerStyle={styles.flatList}
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        extraData={this.state}
                        renderItem={(item) => this._renderItem(item)}
                    />
                </ImageBackground>
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
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        flex: 1,
    },
    flastList: {
        opacity: 1,
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});