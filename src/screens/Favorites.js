import React from 'react';
import {StyleSheet, ImageBackground, View, FlatList, ActivityIndicator, Text} from 'react-native';
import ScheduleCard from 'breathe/src/components/ScheduleCard';
import TimeBanner from 'breathe/src/components/timeBanner';
import HorizontalCalendar from 'breathe/src/components/horizontalCalendar';
import Modal from "react-native-modal";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getDayFromDateTime } from 'breathe/src/utils/dateTime'

import Services from '../services';

export default class FavoritesScreen extends React.Component {
    static navigationOptions = {
        title: 'Favorites',
    };

    constructor(props) {
        super(props);

        this.state = {
            user: props.navigation.getParam('user', {}),
            isLoading: true,
            data: [],
            dateSelected: '11',
            modalItem: {},
            isVisible: false,
            favorites: [],
        }
    }
    
    componentWillMount () {
       this.fetchData();
    }

    fetchData = async () => {
        const favorites = await Services.Favorites.getFavoritesByUser(this.state.user.id);
        this.setState({data: favorites, isLoading: false});
        //Sort data by date and time
        // this.state.data.sort(function(a,b){
        //     // Turn your strings into dates, and then subtract them
        //     // to get a value that is either negative, positive, or zero.
        //     return new Date(b.date) - new Date(a.date);
        // });
    }

    changeDate = (date) => {
        this.setState({
            dateSelected: date,
        })
    }

    updateModal = (item) => {
        this.setState({
            modalItem: item,
            isVisible: true,
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

    //Function allows selective rendering based on a given condition (date in this case)
    _renderItem = ({item}) => {
        if(getDayFromDateTime(item.startTime) == this.state.dateSelected){
            return <ScheduleCard item={item} updateModal={this.updateModal} user={this.state.user}/>
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
                <Modal 
                    isVisible={this.state.isVisible}
                    onBackdropPress={() => this.setState({ isVisible: false })}
                    backdropOpacity={.4}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            <Text style={styles.name}>{this.state.modalItem.title}</Text>
                            <Text style={styles.body}>{this.state.modalItem.location} ~ {this.state.modalItem.type}</Text>
                            <Text style={styles.body}>{this.state.modalItem.description}</Text>
                            <TouchableOpacity style={styles.deleteFavorite} onPress={() => {this.deleteFavorite(this.state.modalItem); this.setState({isVisible: false})}}>
                                <Text style={styles.favText} onPress={this.deleteFavorite}>Remove From My Schedule</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                {/* Created a timeBanner component, but need to figure out how to separate json values by time
                and where to put the banner so that it moves with the list
                Consider separating the one json array into multiple arrays separated by time? */}
                {/* <TimeBanner item={'8:00'} /> */}
                <FlatList 
                    // style={styles.container}
                    style={styles.list}
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={this.state}
                    renderItem={this._renderItem}
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
    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        width: '85%',
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
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
        margin: 10,
        fontSize: 18,
        fontWeight: '600',
    },
    info: {
        margin: 10,
    },
    body: {
        textAlign: 'center',
        margin: 10,
        fontSize: 14,
    },
    deleteFavorite: {
        backgroundColor: '#C6E7EC',
        margin: 20,
        borderRadius: 20,
    },
    favText: {
        fontWeight: '500',
        margin: 10,
        textAlign: 'center',
        fontSize: 12,
    }
});
