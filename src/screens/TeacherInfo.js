//Similar to workshop page, has main teacher info: bio/pics/workshops they teach
//Get here by clicking a teacher card on the teachers screen (Teachers.js)

import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

class TeacherInfo extends React.Component {
    static navigationOptions = {
        title: 'Teacher',
    }
    constructor(props) {
        super(props);
        this.state = {
            user: props.navigation.getParam('user', {}),
            isLoading: true,
            teacher: props.navigation.getParam('teacher', {}),
            isFavorite: props.navigation.getParam('isFavorite', false),
        }
    }

    /*TODO:
    1. Create get_teacher function to get all of the workshops taught by a teacher
    2. Figure out all of the navigation needed for this page (teacherScreen -> teacher page -> workshop page -> teacher page etc.)
    3. Basic Formatting of page (probably make it similar to workshopPage for details and such)
    4. Decide on formatting for the workshop list, do we want to be able to navigate to each workshop or do we just want a plain list?
        I think a plain list is good for now and def easier. Once everything else is finished we can work on designs for a workshop
        list within the teacherPage
    */

    render(){
        const {params} = this.props.navigation.state;
        return(
            <ScrollView style={styles.container}>
                <View style={styles.insideContainer}>
                    <Text style={styles.infoContainer}>
                        <Text style={styles.infoHeader}>Teacher Name: </Text>
                        <Text style={styles.info}>{this.state.teacher.fullName} </Text>
                    </Text>
                    <Text style={styles.infoContainer}>
                        <Text style={styles.infoHeader}>Bio: </Text>
                        <Text style={styles.info}>{this.state.teacher.bio}</Text>
                    </Text>
                    <Text style={styles.infoContainer}>
                        <Text style={styles.infoHeader}>Contact: </Text>
                        <Text style={styles.info}>{this.state.teacher.contactInfo}</Text>
                    </Text>
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
    infoContainer: {
        padding: 10,
        textAlign: 'left',
        color: 'darkslategrey',
    },
    infoHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'chelseaMarketReg',
    },
    info: {
        fontSize: 16,
        marginBottom: 5,
    },

});

export default TeacherInfo
