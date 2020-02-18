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

    /*TODO:
    1. Style event page (make sure to handle overflow)
    2. Implement "add to favorites" button
    3. Add teacher info (might need to separate things in database)
    4. Make sure formatting in database matches desired formatting for info pages
    5. Get pictures for event/instructors
    6. Make remove_underscore function so location looks neater
    */

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

    render(){
        const {params} = this.props.navigation.state;
        return(
            <ScrollView style={styles.container}>
                <View style={styles.insideContainer}>
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
                    <Text style={styles.title}>{params.item.title}</Text>

                    <Text style={styles.infoContainer}>
                        <Text style={styles.infoHeader}>Location: </Text>
                        <Text style={styles.info}>{formatLocation(params.item.location)}</Text>
                    </Text>

                    <Text style={styles.description}>{params.item.description}</Text>

                    <Text style={styles.infoContainer}>
                        <Text style={styles.infoHeader}>Teacher: </Text>
                        <Text style={styles.info}>{params.item.primaryInstructor.fullName}</Text>
                    </Text>
                    <Text style={styles.infoContainer}>
                        <Text style={styles.infoHeader}>Co-Teachers: </Text>
                        <Text style={styles.info}>{params.item.coTeachers}</Text>
                    </Text>
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
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    description: {
        fontSize: 16,
        justifyContent: 'center',
    },
    infoContainer: {
        padding: 8,
        textAlign: 'center',
    },
    infoHeader: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    info: {
        fontSize: 16,
        marginBottom: 5,
    },
    like: {
        width: 30,
        height: 30,
    }

});

export default WorkshopScreen