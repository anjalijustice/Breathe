import React from 'react';
import {StyleSheet, View, FlatList } from 'react-native';
import TeacherCard from '../components/TeacherCard';

export default class TeachersScreen extends React.Component {
    static navigationOptions = {
        title: 'TEACHERS',
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: props.route.params.teachers ?? [],
            user: props.route.params.user ?? {}
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
                <FlatList 
                    style={styles.flastList}
                    contentInset={{bottom: 60}}
                    contentContainerStyle={styles.flatList}
                    data={this.state.data.sort((prev, next)=>prev.fullName.localeCompare(next.fullName))}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={this.state}
                    renderItem={(item) => this._renderItem(item)}
                />
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
        flex: 1,
        width: '100%'
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});