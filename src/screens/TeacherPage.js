//Similar to workshop page, has main teacher info: bio/pics/workshops they teach
//Get here by clicking a teacher card on the teachers screen (Teachers.js)

import React from 'react';
import {StyleSheet, View, Text, ScrollView, Button} from 'react-native';

class TeacherInfo extends React.Component {
    static navigationOptions = {
        title: 'Teacher',
    }
    constructor(props) {
        super(props);
        this.state = {
            user: props.navigation.getParam('user', {}),
            isLoading: true,
            item: props.navigation.getParam('item', {}),
           
        }
    }

    render(){
        const {params} = this.props.navigation.state;
        return(
            <ScrollView style={styles.container}>
                <View style={styles.insideContainer}>
                    <Text style={styles.infoContainer}>
                        <Text style={styles.infoHeader}>Teacher Name: </Text>
                        <Text style={styles.info}>{this.state.item.fullName} </Text>
                    </Text>
                    <Text style={styles.infoContainer}>
                        <Text style={styles.infoHeader}>Bio: </Text>
                        <Text style={styles.info}>{this.state.item.bio}</Text>
                    </Text>
                    <Text style={styles.infoContainer}>
                        <Text style={styles.infoHeader}>Contact: </Text>
                        <Text style={styles.info}>{this.state.item.contactInfo}</Text>
                    </Text>
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
        // fontFamily: 'neutraDisplay',
    },

});

export default TeacherInfo