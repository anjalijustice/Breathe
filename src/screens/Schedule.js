import React from 'react';
import {StyleSheet, ImageBackground, View, FlatList, ActivityIndicator, Text, TouchableOpacity, Image} from 'react-native';
import HorizontalCalendar from 'breathe/src/components/horizontalCalendar';
import { getDayFromDateTime, getTimeFromDateTime } from 'breathe/src/utils/dateTime';
import Services from '../services';

//TODO: Create new pages for workshops that include workshop details AND instructor info/pics


//State resets when you navigate away from the schedule page
//Favorties arent in the right state when page is loaded, fetchFavorites 
//should get all the favorited workshops from the DB and put them in the favorites
//array so that when the page renders, workshops in the favorites array have red hearts
//and return true for "isFavorite"
class ScheduleScreen extends React.Component {
    static navigationOptions = {
        title: 'Schedule',
    };

    constructor(props) {
        super(props);

        this.state = {
            user: props.navigation.getParam('user', {}),
            isLoading: true,
            dateSelected: '11',
            like: true,
            favorites: {},
        }
        this.onPress = this.onPress.bind(this);
    }
    
    componentWillMount () {
       this.fetchData();
       this.fetchFavorites();
    }

    fetchData = async () => {
        const workshops = await Services.Workshops.getWorkshops();
        this.setState({data: workshops, isLoading: false});
    }

    fetchFavorites = async () => {
        const favorites = await Services.Favorites.getFavoritesByUser(this.state.user.id);
        this.setState({favorites: favorites});
    }

    changeDate = (date) => {
        this.setState({
            dateSelected: date,
        })
    }

    favorite = (item) => {
        for(var i = 0; i < this.state.favorites.length; i++){
            if(this.state.favorites[i].id === item.id){
                this.deleteFavorite(item);
                return;
            }
        }
        this.addFavorite(item);
    }

    addFavorite = async (item) => {
        let userId = this.state.user.id;
        await Services.Favorites.createFavorite(userId, item.id);

        //Adding workshop into local state
        let favorites = this.state.favorites;
        favorites.push(item);
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
            //remove workshop from the favorites object
            favorites: this.state.favorites.filter(function(value, index, arr){
                return value.id != item.id
            })
        });
    }

    //Want to check the database for favorites not the state
    isFavorite = (item) => {
        for(var i = 0; i < this.state.favorites.length; i++){
            if(this.state.favorites[i].id === item.id){
                return true;
            }
        }
        return false;
    }

    onPress = (item) => {
        this.props.navigation.navigate('Event', {user: this.state.user, item: item})
    }

    //Function allows selective rendering based on a given condition (date in this case)
    _renderItem = ({item}) => {
        if(getDayFromDateTime(item.startTime) == this.state.dateSelected){
            return (
                <TouchableOpacity 
                    style={styles.card}
                    onPress={()=> this.onPress(item)}
                >
                    <Text style={styles.cardText}>{item.title}</Text>
                    <Text style={styles.cardSubText}>{getTimeFromDateTime(item.startTime)} - {getTimeFromDateTime(item.endTime)}</Text>
                    <View style={styles.favorite}>
                        <TouchableOpacity onPress={() => this.favorite(item)}>
                        {this.isFavorite(item) ? 
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
                </TouchableOpacity>
            )
        }
    }
    
    render() {
        if(this.isLoading) {
            return(
            <View style={styles.loader}>
                <ActivityIndicator />
            </View>
            )
        }
        else{
            return(
            <View style={styles.container}>
                {/* Horizontal calendar component to select day, changes dateSelected state when pressed*/}
                <HorizontalCalendar dateSelected={this.state.dateSelected} changeDate={this.changeDate}/>
                <ImageBackground source={require('../../assets/img/breathe6.jpg')} style={styles.backgroundImage}>
                <FlatList 
                    style={styles.list}
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={this.state}
                    renderItem={(item) => this._renderItem(item, this.props)}
                />
                </ImageBackground>
            </View>
            )
        }
       
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
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    list: {
        opacity: 1,
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        marginLeft: '2%',
        width: '96%',
        marginTop: 5,
        marginBottom: 0,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
        width: 3,
        height: 3
        }
    },
    cardText: {
        paddingBottom: 10,
        fontSize: 16,
        margin: 10,
        marginBottom: 0,
        opacity: 1,
        textAlign: 'center',
        color: 'black',
        fontWeight: '500',
    },
    cardSubText: {
        fontSize: 14,
        textAlign: 'center',
        color: 'black',
        opacity: 1,
        fontWeight: '500',
        margin: 0,
        padding: 0,
    },
    favorite: {
        bottom: '45%',
        left: '90%',
        margin: '-3%',
    },
    like: {
        width: 30,
        height: 30,
    }
});

export default ScheduleScreen