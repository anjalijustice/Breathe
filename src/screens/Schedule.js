import React from 'react';
import {StyleSheet, ImageBackground, View, FlatList, ActivityIndicator, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import HorizontalCalendar from 'breathe/src/components/HorizontalCalendar';
import { getDayFromDateTime } from 'breathe/src/utils/dateTime';
import Services from '../services';
import ScheduleCard from '../components/ScheduleCard';

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
            workshops: [],
            favoriteIds: [],
        }
    }
    
    async componentWillMount () {
       await this.fetchData();
       this.fetchFavorites();

      this.setState({ isLoading: false });
    }

    sortByDay(workshops) {
        let workshopMap = {};
        workshops.forEach(workshop => {
            let day = getDayFromDateTime(workshop.startTime).toString();
            if (day in workshopMap) {
                workshopMap[day].push(workshop);
            } else {
                workshopMap[day] = [workshop];
            }
        });
        return workshopMap;
    }

    fetchData = async () => {
        const workshops = await Services.Workshops.getWorkshops();
        const workshopMap = this.sortByDay(workshops);
        this.setState({data: workshopMap});
    }

    fetchFavorites = async () => {
        const favorites = await Services.Favorites.getFavoritesByUser(this.state.user.id);
        const favoriteIds = favorites.map(favorite => favorite.id);
        this.setState({
            favoriteIds: favoriteIds
        });
    }

    changeDate = (date) => {
        this.setState({
            dateSelected: date,
        })
    }

    isFavorite = (item) => {
        return this.state.favoriteIds.includes(item.id);
    }

    add = async (item) => {
        let favoriteIds = this.state.favoriteIds;
        favoriteIds.push(item.id)
        this.setState({
            favoriteIds: favoriteIds
        })
    }

    delete = async (item) => {
        this.setState({
            favoriteIds: this.state.favoriteIds
                .filter((value, index, arr) => value != item.id)
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
                <HorizontalCalendar dateSelected={this.state.dateSelected} changeDate={this.changeDate}/>
                <ImageBackground source={require('../../assets/img/breathe6.jpg')} style={styles.backgroundImage}>
                        <FlatList 
                            contentInset={{bottom: 60}}
                            contentContainerStyle={styles.flatList}
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
    flastList: {
        opacity: 1,
        flex: 1
    },
});

export default ScheduleScreen