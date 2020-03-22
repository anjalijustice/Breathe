import React from 'react';
import Services from '../services';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import { formatLocation } from '../utils/formatting';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { getTimeFromDateTime, getDayFromDateTime } from '../../src/utils/dateTime';
import { RFValue } from "react-native-responsive-fontsize";

class WorkshopScreen extends React.Component {
    static navigationOptions = {
        title: 'Workshop',
    }
    constructor(props) {
        super(props);
        this.state = {
            user: props.navigation.getParam('user', {}),
            isLoading: true,
            item: props.navigation.getParam('item', {}),
            isFavorite: props.navigation.getParam('isFavorite', null),
            addFavorite: props.navigation.getParam('addFavorite', this.addFavoriteDefault),
            deleteFavorite: props.navigation.getParam('deleteFavorite', this.deleteFavoriteDefault),
        }
    }

    async componentDidMount() {
        if (this.state.isFavorite == null) {
            let itemIsFavorite = await Services.Favorites.isFavorite(this.state.user.id, this.state.item.id);
            this.setState({ isFavorite: itemIsFavorite })
        }
    }

    addFavoriteDefault = async (item) => {
        let userId = this.state.user.id;
        let workshopId = item.id;
        await Services.Favorites.createFavorite(userId, workshopId);
    }

    deleteFavoriteDefault = async (item) => {
        let userId = this.state.user.id;
        let workshopId = item.id;
        await Services.Favorites.deleteFavorite(userId, workshopId);
    }

    favorite = async (item) => {
        if (this.state.isFavorite) {
            this.deleteFavorite(item);
        } else {
            this.addFavorite(item);
        }
    }

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

    goToTeacher = async (teacher) => {
        this.props.navigation.navigate('TeacherInfo', {
            user: this.state.user,
            teacher: teacher,
        })
    }

    render(){
        const {params} = this.props.navigation.state;
        return(
            <ScrollView style={styles.container}>
                <View style={styles.insideContainer}>
                    <View style={styles.favorite}>
                        <TouchableOpacity onPress={() => this.favorite(params.item)}>
                            {this.state.isFavorite ? 
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
                    <Text style={styles.title}>{params.item.title}</Text>
                    <Text style={styles.date}>{new Date(params.item.startTime).toLocaleString('en-us', {  weekday: 'long' })}, July {getDayFromDateTime(params.item.startTime)}</Text>
                    <Text style={styles.time}>{getTimeFromDateTime(params.item.startTime)} - {getTimeFromDateTime(params.item.endTime)}</Text>
                    <TouchableOpacity onPress={() => this.goToTeacher(params.item.primaryInstructor)}>
                        <Text style={styles.infoContainer}>
                            <Text style={styles.infoHeader}>Teacher: </Text>
                            <Text style={styles.info}>{params.item.primaryInstructor.fullName}</Text>
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.infoContainer}>
                        <Text style={styles.infoHeader}>Co-Teachers: </Text>
                        <Text style={styles.info}>{params.item.coTeachers}</Text>
                    </Text>

                    <Text style={styles.infoContainer}>
                        <Text style={styles.infoHeader}>Location: </Text>
                        <Text style={styles.info}>{formatLocation(params.item.location)}</Text>
                    </Text>

                    <Text style={styles.description}>{params.item.description}</Text>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingLeft: '2.5%',
        paddingRight: '2.5%',
        flex: 1,
    },
    insideContainer: {
        paddingBottom: '10%',
        paddingLeft: '5%',
    },
    title:{
        fontSize: RFValue(20),
        textAlign: 'left',
        marginRight: '10%',
        paddingTop: '5%',
        fontFamily: 'helvetica77',
        color: '#5d8da0',
    },
    date: {
        fontSize: RFValue(18),
        color: '#5d8da0',
        fontFamily: 'helvetica57'
    },
    time: {
        fontSize: RFValue(18),
        color: '#5d8da0',
        marginBottom: 15,
        fontFamily: 'helvetica57'
    },
    favorite: {
        position: 'absolute',
        left: '95%',
    },
    like: {
        width: wp('8%'),
        height: hp('4%'),
        marginTop: '50%'
    },
    infoContainer: {
        textAlign: 'left',
        color: '#5d8da0',
    },
    infoHeader: {
        fontSize: RFValue(20),
        fontFamily: 'helvetica77',
        color: '#f78f8f'
    },
    info: {
        fontSize: RFValue(20),
        fontFamily: 'helvetica57',
        color: '#5d8da0',

    },
    description: {
        fontSize: RFValue(20),
        fontFamily: 'helvetica57',
        color: '#5d8da0',
        marginTop: '3%',
        paddingRight: '5%',
    }
});

export default WorkshopScreen