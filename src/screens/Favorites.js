import React from 'react';
import {StyleSheet, ImageBackground, View, FlatList, ActivityIndicator, Text, TouchableOpacity, Image} from 'react-native';
import HorizontalCalendar from 'breathe/src/components/HorizontalCalendar';
import { getDayFromDateTime, getTimeFromDateTime } from 'breathe/src/utils/dateTime'
import Services from 'breathe/src/services';

//When you click on the workshop the button at the bottom says "add to favorites" even though its already in the favorites page
    //need to make that dynamic so that it says "remove from favorites" if its already in favorites

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
        this.props.navigation.navigate('Workshop', {
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
                <View style={styles.list}>
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
                </View>
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
                    contentInset={{bottom: 60}}
                    style={styles.flatList}
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
        flex: 1,
        width: '100%',
        height: '100%',
    },
    list: {
        flex: 1,
    },
    flatList: {
        opacity: 1,
        flex: 1,
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
        height: 3,
        }
    },
    cardText: {
        fontSize: 16,
        padding: 10,
        margin: 0,
        opacity: 1,
        textAlign: 'left',
        color: 'darkslategrey',
        opacity: 1,
        fontFamily: 'chelseaMarketReg',
        marginRight: 50,
    },
    cardSubText: {
        fontSize: 14,
        textAlign: 'left',
        color: 'darkslategrey',
        opacity: 1,
        fontFamily: 'chelseaMarketReg',
        margin: 0,
        marginLeft: 10,
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
