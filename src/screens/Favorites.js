import React from 'react';
import {StyleSheet, ImageBackground, View, FlatList, ActivityIndicator, Text, TouchableOpacity, Image} from 'react-native';
import HorizontalCalendar from 'breathe/src/components/HorizontalCalendar';
import { getDayFromDateTime, getTimeFromDateTime } from 'breathe/src/utils/dateTime'
import Services from 'breathe/src/services';

//State resets when you navigate away (deletions dont stay)

export default class FavoritesScreen extends React.Component {
    static navigationOptions = {
        title: 'Favorites',
    };

    constructor(props) {
        super(props);

        this.state = {
            user: props.navigation.getParam('user', {}),
            isLoading: true,
            dateSelected: '11',
        }
    }
    
    componentWillMount () {
       this.fetchData();
    }

    fetchData = async () => {
        const favorites = await Services.Favorites.getFavoritesByUser(this.state.user.id);
        this.setState({data: favorites, isLoading: false});
    }

    changeDate = (date) => {
        this.setState({
            dateSelected: date,
        })
    }

    addFavorite = async (item) => {
        let userId = this.state.user.id;
        let workshopId = item.id;
        await Services.Favorites.createFavorite(userId, workshopId);

        //Adding workshop into local state
        let favoriteIds = this.state.favoriteIds;
        favoriteIds.push(item.id);
        //Need to add this workshop into the favorites object
        this.setState({
            favoriteIds: favoriteIds
        })
    }

    deleteFavorite = async (item) => {
        let userId = this.state.user.id;
        let workshopId = item.id;
        await Services.Favorites.deleteFavorite(userId, workshopId);
        this.setState({
            data: this.state.data.filter(function(value, index, arr) {
                return value.id != item.id;
            })
        });
    }

    onPress = (item) => {
        this.props.navigation.navigate('Event', {
            user: this.state.user,
            item: item,
            isFavorite: true,
            addFavorite: this.addFavorite,
            deleteFavorite: this.deleteFavorite
        })
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
                        <TouchableOpacity onPress={() => this.deleteFavorite(item)}>
                            <Image
                                source={require('../../assets/img/liked.png')}
                                style={styles.like}
                            /> 
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
                    // style={styles.container}
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
    name: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 18,
        fontWeight: '600',
    },
    body: {
        textAlign: 'center',
        fontSize: 14,
    },
    favorite: {
      fontSize: 20,
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        marginLeft: '2%',
        width: '96%',
        marginTop: 5,
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
        textAlign: 'center',
        color: 'black',
        fontWeight: '500',
        marginHorizontal: 60,
    },
    cardSubText: {
        padding: 0,
        fontSize: 14,
        margin: 0,
        marginBottom: 10,
        opacity: 1,
        textAlign: 'center',
        color: 'black',
        fontWeight: '500',
        
    },
    favorite: {
        bottom: '45%',
        right: '5%',
        margin: '-3%',
    },
    like: {
        width: 30,
        height: 30,
        left: '90%',
    }
});
