//Similar to workshop page, has main teacher info: bio/pics/workshops they teach
//Get here by clicking a teacher card on the teachers screen (Teachers.js)

import React from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";

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

    goToWorkshop = async (item) => {
        item.primaryInstructor = this.state.teacher;
        this.props.navigation.navigate('Workshop', {
            user: this.state.user,
            item: item,
        });
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                <Text style={styles.nameContainer}>
                    <Text style={styles.name}>{this.state.teacher.fullName} </Text>
                </Text>
                <View style={styles.insideContainer}>
                    <Text style={styles.infoHeader}>Workshops</Text>
                    <View style={styles.workshops}>
                        {this.state.teacher.workshops.map((workshop) =>
                            <Text style={styles.workshop} key={workshop.id} onPress={() => this.goToWorkshop(workshop)}>{workshop.title}</Text>
                        )}
                    </View>
                    

                    <Text style={styles.infoHeader}>Bio</Text>
                    <Text style={styles.info}>{this.state.teacher.bio}</Text>

                    <Text style={styles.infoHeader}>Contact</Text>
                    <Text style={styles.info}>{this.state.teacher.contactInfo}</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    insideContainer: {
        paddingBottom: '10%',
        margin: '5%'
    },
    nameContainer: {
        backgroundColor: '#5d8da0',
        height: heightPercentageToDP('6%'),
        paddingTop: heightPercentageToDP('3%')/2,
        paddingLeft: '5%'
    },
    name: {
        color: 'white',
        fontFamily: 'helvetica77',
        fontSize: RFValue(22),
        textAlign: 'left',
    },
    workshop:{
        fontSize: RFValue(16),
        fontFamily: 'helvetica57',
        color: '#5d8da0',
    },
    infoHeader: {
        fontSize: RFValue(20),
        fontFamily: 'helvetica77',
        color: '#f78f8f',
        marginTop: '3%',
        marginBottom: '3%'
    },
    info: {
        fontSize: RFValue(18),
        fontFamily: 'helvetica57',
        color: '#5d8da0',
        marginBottom: '5%',
    },

});

export default TeacherInfo
