import React from 'react';
import {StyleSheet, ImageBackground, View, FlatList, ActivityIndicator, Text, TouchableOpacity, Image} from 'react-native';
import HorizontalCalendar from 'breathe/src/components/HorizontalCalendar';
import { getDayFromDateTime } from 'breathe/src/utils/dateTime'
import Services from 'breathe/src/services';
import ScheduleCard from '../components/ScheduleCard';

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
    
    async componentWillMount () {
       await this.fetchData();
       this.setState({ isLoading: false });
    }

    sortByDay(favorites) {
        let favoritesMap = {};
        favorites.forEach(favorite => {
            let day = getDayFromDateTime(favorite.startTime).toString();
            if (day in favoritesMap) {
                favoritesMap[day].push(favorite);
            } else {
                favoritesMap[day] = [favorite];
            }
        });
        return favoritesMap;
    }

    fetchData = async () => {
        const favorites = await Services.Favorites.getFavoritesByUser(this.state.user.id);
        const favoritesMap = this.sortByDay(favorites);
        this.setState({ data: favoritesMap });
    }

    isFavorite = (item) => {
        let data = this.state.data[getDayFromDateTime(item.startTime)] || [];
        return data.map(favorite => favorite.id).includes(item.id);
    }

    add = async (item) => {
        let favorites = this.state.data[getDayFromDateTime(item.startTime)] || [];
        favorites.push(item);
        
        let newData = this.state.data;
        newData[getDayFromDateTime(item.startTime)] = favorites;

        this.setState({
            data: newData
        })
    }

    delete = async (item) => {
        let favorites = (this.state.data[getDayFromDateTime(item.startTime)] || [])
            .filter((value, index, arr) => value.id != item.id);

        let newData = this.state.data;
        newData[getDayFromDateTime(item.startTime)] = favorites;

        this.setState({
            data: newData
        });
    }

    changeDate = (date) => {
        this.setState({
            dateSelected: date,
        })
    }

    _renderItem = ({item}) => {
        return (
            <View style={styles.list}>
                <ScheduleCard item={item} navigation={this.props.navigation}
                    user={this.state.user}
                    isFavorite={this.isFavorite(item)}
                    delete={this.delete}
                    add={this.add}/>
            </View>
        )
    }
    
    render() {
        if (this.state.isLoading) {
            return(
            <View style={styles.loader}>
                <ActivityIndicator />
            </View>
            )
        }
        else {
            return(
            <View style={styles.container}>
                {/* Horizontal calendar component to select day, changes dateSelected state when pressed*/}
                <HorizontalCalendar dateSelected={this.state.dateSelected} changeDate={this.changeDate}/>
                
                <ImageBackground source={require('../../assets/img/breathe4.jpg')} style={styles.backgroundImage}>
                <FlatList 
                    contentInset={{bottom: 60}}
                    style={styles.flatList}
                    data={this.state.data[this.state.dateSelected] || []}
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
