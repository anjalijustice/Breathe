import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import {StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Services from '../services';
=======
import {StyleSheet, View, Text } from 'react-native';
>>>>>>> rename eventPage to workshopPage and fix navigation

//Page has teacher cards with name/pic? 
//Click on the card takes you to a teachers page with all the workshops theyre teaching and bio
=======
import {StyleSheet, View, Text, ActivityIndicator, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import Services from '../services';
import TeacherCard from '../components/TeacherCard';
>>>>>>> ScheduleCard and TeacherCard now in use

export default class TeacerScreen extends React.Component {
    static navigationOptions = {
        title: 'Teachers',
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
      }

    async componentWillMount () {
        this.fetchData();
        this.setState({ isLoading: false })
    }
 
    fetchData = async () => {
        const teachers = await Services.Teachers.getTeachers();
        this.setState({ data: teachers });
    }
    
    _renderItem = ({item}) => {
        return (
            <View style={styles.list}>
                <TeacherCard item={item} navigation={this.props.navigation} user={this.state.user}/>
            </View>
        )
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
                <ImageBackground source={require('../../assets/img/breathe5.jpg')} style={styles.backgroundImage}>
                    <FlatList 
                        contentInset={{bottom: 60}}
                        contentContainerStyle={styles.flatList}
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
<<<<<<< HEAD
    text: {
        fontSize: 40,
        color: 'darkslategrey',
        fontFamily: 'chelseaMarketReg',
        textAlign: 'center'
    }
=======
    list: {
        flex: 1,
    },
    flastList: {
        opacity: 1,
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
>>>>>>> ScheduleCard and TeacherCard now in use
});