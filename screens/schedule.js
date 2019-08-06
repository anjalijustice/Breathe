import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
class ScheduleScreen extends React.Component {
    static navigationOptions = {
        title: 'Schedule',
    };

    render() {
        // Fetch event data from database and loop through results to add data to scheduleCards?
        if(this.state.isLoading) {
            return(
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
            )
        } else {
            //json object will be called events, each event will contain specific info about the event (title, time, location, etc)
            // Let events = this.state.dataSource.map((val, key) => {
            //     return <View key={key} style={styles.eventCard}>
            //         <Text>{val.title}</Text>
            //     </View>
            // });
            return (
                <View>
                    {event}
                </View>
            )
        }
        return(
            <View style={styles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#b0e0e6',
    },
});

export default ScheduleScreen