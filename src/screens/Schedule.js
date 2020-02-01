import React from 'react';
import {StyleSheet, ImageBackground, View, FlatList, ActivityIndicator, Text, TouchableOpacity, Image} from 'react-native';
import HorizontalCalendar from 'breathe/src/components/horizontalCalendar';
import { getDayFromDateTime, getTimeFromDateTime } from 'breathe/src/utils/dateTime';
import Services from '../services';

// Changes to test:
// 1. Wrapped flatlist in a view with flex=1 and height=100%, maybe that will fix the scrolling issue
// 2. fixCase function on event page
// 3. Favorite buttons on event page (need to do styling)
//      note: try to pass functions from schedule to event page so favorites functions dont need to be rewritten 


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
                <HorizontalCalendar dateSelected={this.state.dateSelected} changeDate={this.changeDate}/>
                <ImageBackground source={require('../../assets/img/breathe6.jpg')} style={styles.backgroundImage}>
                    <View style={styles.listContainer}>
                        <FlatList 
                            style={styles.list}
                            data={this.state.data}
                            keyExtractor={(item, index) => index.toString()}
                            extraData={this.state}
                            renderItem={(item) => this._renderItem(item, this.props)}
                        />
                    </View>
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
        flex: 1,
    },
    listContainer: {
        flex: 1,
        height: '100%'
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
        marginRight: 50,
        marginBottom: 0,
        opacity: 1,
        textAlign: 'left',
        color: 'black',
        fontWeight: '500',
    },
    cardSubText: {
        fontSize: 14,
        textAlign: 'left',
        color: 'black',
        opacity: 1,
        fontWeight: '500',
        margin: 0,
        marginLeft: 10,
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