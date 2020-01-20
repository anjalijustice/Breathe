import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

class EventScreen extends React.Component {
    static navigationOptions = {
        title: 'Workshop',
    }
    constructor(props) {
        super(props);
        this.state = {
            user: props.navigation.getParam('user', {}),
            isLoading: true,
            item: {},
        }
    }

    /*TODO:
    1. Style event page (make sure to handle overflow)
    2. Implement "add to favorites" button
    3. Add teacher info (might need to separate things in database)
    4. Make sure formatting in database matches desired formatting for info pages
    5. Get pictures for event/instructors
    6. Make remove_underscore function so location looks neater
    */
    render(){
        const {params} = this.props.navigation.state;
        return(
            <ScrollView style={styles.container}>
                <View style={styles.insideContainer}>
                    <Text style={styles.title}>{params.item.title}</Text>
                    <Text style={styles.description}>{params.item.description}</Text>

                    <Text style={styles.teacherName}>Location: </Text>
                    <Text style={styles.teacherInfo}>{params.item.location}</Text>
                    <Text style={styles.teacherName}>Teacher: </Text>
                    <Text style={styles.teacherInfo}>Teacher Info</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(220, 230, 232)',
        paddingLeft: '2.5%',
        paddingRight: '2.5%',
        flex: 1,
    },
    insideContainer: {
        paddingBottom: '10%',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 15,
    },
    description: {
        fontSize: 16,
    },
    teacherName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    teacherInfo: {
        fontSize: 16,
        marginBottom: 5,
    }

});

export default EventScreen