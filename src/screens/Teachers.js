import React from 'react';
<<<<<<< HEAD
import {StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Services from '../services';
=======
import {StyleSheet, View, Text } from 'react-native';
>>>>>>> rename eventPage to workshopPage and fix navigation

//Page has teacher cards with name/pic? 
//Click on the card takes you to a teachers page with all the workshops theyre teaching and bio

export default class TeacerScreen extends React.Component {
    static navigationOptions = {
        title: 'Teachers',
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
      }

    async componentWillMount () {
        // this.fetchData();
        this.setState({ isLoading: false })
    }
 
    fetchData = async () => {
        const teachers = await Services.Teachers.getTeachers();
        this.setState({ data: teachers });
    }
    
    render() {
        return (
            this.state.isLoading ? 
            <View style={styles.loader}>
                <ActivityIndicator />
            </View>
            :
            <View style={styles.container}>
                <Text style={styles.text}>
                    Teachers Coming Soon!!
                </Text>
            </View>
        )  
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'rgb(220, 230, 232)',
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 40,
        color: 'darkslategrey',
        fontFamily: 'chelseaMarketReg',
        textAlign: 'center'
    }
});