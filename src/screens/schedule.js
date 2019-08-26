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
            user: props.navigation.getParam('user', {}),
            isLoading: true,
            data: [],
        }
      }
    componentWillMount () {
       this.fetchData();
    }

    fetchData = async () => {
        const workshops = await Services.Workshops.getWorkshops();
        this.setState({data: workshops, isLoading: false});
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
                <ImageBackground source={require('breathe/assets/img/breathe1.jpg')} style={styles.backgroundImage}>
                <FlatList 
                    // style={styles.container}
                    style={styles.list}
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => <ScheduleCard item={item} user={this.state.user} />}
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