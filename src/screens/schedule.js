import React from 'react';
import {StyleSheet, ImageBackground, View, FlatList, ActivityIndicator, Text} from 'react-native';
import ScheduleCard from '../../src/components/scheduleCard';
import TimeBanner from '../../src/components/timeBanner';
import HorizontalCalendar from '../../src/components/horizontalCalendar';
import Services from '../../src/services';

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

    //Function allows selective rendering based on a given condition (dateTime in this case)
    _renderItem = ({item}) => {
        if(item.postId == '2'){
            return <ScheduleCard item={item} />
        }
        //Render items in list if they match the selected date
        // if(item.date == this.state.dateSelected){
        //     return <ScheduleCard item={item} />
        // }
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
                {/* Horizontal calendar component to select day*/}
                {/* Access dateSelected from horizontalCalendar component to select which days' events to render in the flatList */}
                <HorizontalCalendar />
                
                <ImageBackground source={require('../../assets/img/breathe1.jpg')} style={styles.backgroundImage}>
                {/* Created a timeBanner component, but need to figure out how to separate json values by time
                and where to put the banner so that it moves with the list
                Consider separating the one json array into multiple arrays separated by time? */}
                <TimeBanner item={'8:00'} />
                <FlatList 
                    // style={styles.container}
                    style={styles.list}
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
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