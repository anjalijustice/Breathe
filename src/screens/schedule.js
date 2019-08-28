import React from 'react';
import {StyleSheet, ImageBackground, View, FlatList, ActivityIndicator, Text} from 'react-native';
import ScheduleCard from 'breathe/src/components/ScheduleCard';
import Services from 'breathe/src/services';

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
        const workshops = await Services.Workshops();
        this.setState({data: workshops, isLoading: false});
        //Sort data by date and time
        this.state.data.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.date) - new Date(a.date);
        });
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
                {/* Day 1 */}
                <ImageBackground source={require('breathe/assets/img/breathe1.jpg')} style={styles.backgroundImage}>
                <FlatList 
                    // style={styles.container}
                    style={styles.list}
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    //Use if statement to select only items from day 1
                    renderItem={({item}) => {
                        if(item.start_time.getDate() == day1){
                            <ScheduleCard item={item} />
                        }
                    }
                    }
                />
                </ImageBackground>
            </View>
            <View>
            {/* Day 2 */}

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