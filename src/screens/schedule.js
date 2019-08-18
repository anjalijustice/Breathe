import React from 'react';
import {StyleSheet, ImageBackground, View, FlatList, ActivityIndicator, Text} from 'react-native';
import ScheduleCard from '../components/scheduleCard';

//TODO: add date selector at top of schedule
//Figure out how to sort events by date and time

class ScheduleScreen extends React.Component {
    static navigationOptions = {
        title: 'Schedule',
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
        }
      }
    componentWillMount () {
       this.fetchData();
    }

    fetchData= async () => {
        const response = await fetch('https://randomuser.me/api?results=20');
        const json = await response.json();
        this.setState({data: json.results, isLoading: false})

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
                <ImageBackground source={require('../../assets/img/breathe1.jpg')} style={styles.backgroundImage}>
                <FlatList 
                    // style={styles.container}
                    style={styles.list}
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => <ScheduleCard item={item} />}
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
      //Change background to an image eventually
      backgroundColor: '#b0e0e6',
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        // opacity: 0.5,
    },
    list: {
        opacity: 1,
    }
});

export default ScheduleScreen