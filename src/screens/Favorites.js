import React from 'react';
import {StyleSheet, ImageBackground, View, FlatList, ActivityIndicator, Text} from 'react-native';
import ScheduleCard from '../../src/components/scheduleCard';
import TimeBanner from '../../src/components/timeBanner';
import Modal from "react-native-modal";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class FavoritesScreen extends React.Component {
    static navigationOptions = {
        title: 'Favorites',
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            modalItem: {},
            isVisible: false,
        }
    }

    updateModal = (item) => {
        this.setState({
            modalItem: item,
            isVisible: true,
        })
    }

    //Function allows selective rendering based on a given condition (date in this case)
    _renderItem = ({item}) => {
        if(item.postId == '1'){
            return <ScheduleCard item={item} updateModal={this.updateModal}/>
        }
    }

    componentWillMount () {
        this.fetchData();
    }

    fetchData = async () => {
        // const workshops = await Services.Workshops();
        const getData = await fetch("https://jsonplaceholder.typicode.com/comments");
        const workshops = await getData.json();
        this.setState({data: workshops, isLoading: false});
        //Sort data by date and time
        // this.state.data.sort(function(a,b){
        //     // Turn your strings into dates, and then subtract them
        //     // to get a value that is either negative, positive, or zero.
        //     return new Date(b.date) - new Date(a.date);
        // });
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
            <ImageBackground source={require('../../assets/img/breathe4.jpg')} style={styles.backgroundImage}>
            <Modal 
                isVisible={this.state.isVisible}
                onBackdropPress={() => this.setState({ isVisible: false })}
                backdropOpacity={.4}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Text style={styles.name}>{this.state.modalItem.name}</Text>
                        {/* <Text style={styles.body}>{this.state.modalItem.time} ~ {this.state.modalItem.location} ~ {this.state.modalItem.type}</Text> */}
                        <Text style={styles.info}>Time ~ Location ~ Type</Text>
                        <Text style={styles.body}>{this.state.modalItem.body}</Text>
                        <TouchableOpacity style={styles.addFavorite} onPress={this.addFavorite}>
                            <Text style={styles.favText}>Remove From My Schedule</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <FlatList 
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
        marginTop: 10,
        fontSize: 18,
        fontWeight: '600',
    },
    info: {
        margin: 10,
    },
    body: {
        textAlign: 'center',
        fontSize: 14,
    },
    addFavorite: {
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
