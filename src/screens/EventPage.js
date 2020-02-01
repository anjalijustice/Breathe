import React from 'react';
import {StyleSheet, View, Text, ScrollView, Button} from 'react-native';
import { fixCase } from '../utils/fixCase';


class EventScreen extends React.Component {
    static navigationOptions = {
        title: 'Workshop',
    }
    constructor(props) {
        super(props);
        this.state = {
            user: props.navigation.getParam('user', {}),
            isLoading: true,
            item: {},
            favorites: {},
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
    componentWillMount () {
        this.fetchFavorites();
    }

    fetchFavorites = async () => {
        const favorites = await Services.Favorites.getFavoritesByUser(this.state.user.id);
        this.setState({favorites: favorites});
    }

    addFavorite = async (item) => {
        let userId = this.state.user.id;
        await Services.Favorites.createFavorite(userId, item.id);

        //Adding workshop into local state
        let favorites = this.state.favorites;
        favorites.push(this.item);
        //Need to add this workshop into the favorites object
        this.setState({
            favorites: favorites
        })
    }

    deleteFavorite = async (item) => {
        let userId = this.state.user.id;
        let workshopId = item.id;
        await Services.Favorites.deleteFavorite(userId, workshopId);
        
        this.setState({
            favorites: this.state.favorites.filter(function(value, index, arr){
                return value.id != item.id
            })
        });
    }

    isFavorite = (item) => {
        for(var i = 0; i < this.state.favorites.length; i++){
            if(this.state.favorites[i].id === item.id){
                return true;
            }
        }
        return false;
    }

    render(){
        const {params} = this.props.navigation.state;
        return(
            <ScrollView style={styles.container}>
                <View style={styles.insideContainer}>
                    <Text style={styles.title}>{params.item.title}</Text>
                    <Text style={styles.description}>{params.item.description}</Text>

                    <Text style={styles.teacherName}>Location: </Text>
                    <Text style={styles.teacherInfo}>{fixCase(params.item.location)}</Text>
                    <Text style={styles.teacherName}>Teacher: </Text>
                    <Text style={styles.teacherInfo}>Teacher Info</Text>
                    {this.isFavorite(this.item) ? 
                        <Button onPress={this.deleteFavorite} style={styles.favorite}>Remove from Favorites</Button> :
                        <Button onPress={this.addFavorite} style={styles.favorite}>Add to Favorites</Button>
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