import React from 'react';
import {StyleSheet, View, Text, ScrollView, Button} from 'react-native';
import { formatLocation } from '../utils/formatting';
import Services from 'breathe/src/services';


class EventScreen extends React.Component {
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
                    <Text style={styles.title}>{params.item.title}</Text>
                    <Text style={styles.description}>{params.item.description}</Text>

                    <Text style={styles.teacherName}>Location: </Text>
                    <Text style={styles.teacherInfo}>{formatLocation(params.item.location)}</Text>
                    <Text style={styles.teacherName}>Teacher: </Text>
                    <Text style={styles.teacherInfo}>Teacher Info</Text>
                    {this.state.isFavorite ?
                        <Button onPress={() => this.deleteFavorite(this.state.item)} style={styles.favorite} title='Remove from Favorites' /> :
                        <Button onPress={() => this.addFavorite(this.state.item)} style={styles.favorite} title='Add to Favorites' />
                    }
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
        textAlign: 'left',
        marginBottom: 15,
    },
    description: {
        fontSize: 16,
    },
    teacherName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    teacherInfo: {
        fontSize: 16,
        marginBottom: 5,
    },
    favorite: {
        
    }

});

export default EventScreen