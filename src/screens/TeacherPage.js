//Similar to workshop page, has main teacher info: bio/pics/workshops they teach
<<<<<<< HEAD
//Get here by clicking a teacher card on the teachers screen (Teachers.js)

import React from 'react';
import {StyleSheet, View, Text, ScrollView, Button} from 'react-native';

class TeacherScreen extends React.Component {
    static navigationOptions = {
        title: 'Teacher',
    }
    constructor(props) {
        super(props);
        this.state = {
            user: props.navigation.getParam('user', {}),
            isLoading: true,
            item: props.navigation.getParam('item', {}),
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
                    <Text style={styles.teacherName}>Teacher Name: {this.state.item} </Text>
                    <Text style={styles.teacherInfo}>Bio: {this.state.item}</Text>
                    <Text style={styles.workshops}>Workshops: What kind of dispay here?</Text>
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
    },
    favorite: {
        
    }

});

export default TeacherScreen
=======
//Get here by clicking a teacher card on the teachers screen (Teachers.js)
>>>>>>> Created teacherPage
