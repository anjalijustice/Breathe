import React from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import { formatLocation } from '../utils/formatting';

class WorkshopScreen extends React.Component {
    static navigationOptions = {
        title: 'Workshop',
    }
    constructor(props) {
        super(props);
        this.state = {
            user: props.navigation.getParam('user', {}),
            isLoading: true,
            item: props.navigation.getParam('item', {}),
            isFavorite: props.navigation.getParam('isFavorite', false),
            addFavorite: props.navigation.getParam('addFavorite'),
            deleteFavorite: props.navigation.getParam('deleteFavorite'),
        }
    }

    favorite = async (item) => {
        if (this.state.isFavorite) {
            this.deleteFavorite(item);
        } else {
            this.addFavorite(item);
        }
    }

    addFavorite = async (item) => {
        this.state.addFavorite(item);

        this.setState({
            isFavorite: true
        })
    }

    deleteFavorite = async (item) => {
        this.state.deleteFavorite(item);
        
        this.setState({
            isFavorite: false
        });
    }

    teacherPress = async (item) => {
        this.props.navigation.navigate('Teacher', {
            user: this.state.user,
            item: item,
        })
    }

    render(){
        const {params} = this.props.navigation.state;
        return(
            <ScrollView style={styles.container}>
                <View style={styles.insideContainer}>
                    <View style={styles.favorite}>
                        <TouchableOpacity onPress={() => this.favorite(params.item)}>
                            {this.state.isFavorite ? 
                            <Image
                                source={require('../../assets/img/liked.png')}
                                style={styles.like}
                            />
                            :
                            <Image
                                source={require('../../assets/img/like.png')}
                                style={styles.like}
                            />}
                        </TouchableOpacity>
                    </View>
                    
                    <Text style={styles.title}>{params.item.title}</Text>

                    <Text style={styles.infoContainer}>
                        <Text style={styles.infoHeader}>Teacher: </Text>
                        <Text style={styles.info} onPress={() => this.teacherPress(params.item.primaryInstructor)}>
                            {params.item.primaryInstructor.fullName}</Text>
                    </Text>

                    <Text style={styles.infoContainer}>
                        <Text style={styles.infoHeader}>Co-Teachers: </Text>
                        <Text style={styles.info}>{params.item.coTeachers}</Text>
                    </Text>

                    <Text style={styles.infoContainer}>
                        <Text style={styles.infoHeader}>Location: </Text>
                        <Text style={styles.info}>{formatLocation(params.item.location)}</Text>
                    </Text>

                    <Text style={styles.description}>{params.item.description}</Text>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(220, 230, 232)',
        paddingLeft: '2.5%',
        paddingRight: '2.5%',
        flex: 1,
    },
    insideContainer: {
        paddingBottom: '10%',
    },
    title:{
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 15,
        fontFamily: 'chelseaMarketReg',
        color: 'darkslategrey',
    },
    description: {
        fontSize: 16,
        justifyContent: 'center',
        fontFamily: 'neutraDisplay',
        color: 'darkslategrey',
        padding: 5,
    },
    infoContainer: {
        padding: 10,
        textAlign: 'left',
        color: 'darkslategrey',
    },
    teacherContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    infoHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'chelseaMarketReg',
    },
    info: {
        fontSize: 16,
        marginBottom: 5,
        fontFamily: 'neutraDisplay',
        color: 'darkslategrey',

    },
    TeachInfo: {
        color: 'darkslategrey',
    },
    like: {
        width: 30,
        height: 30,
    }

});

export default WorkshopScreen