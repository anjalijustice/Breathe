import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

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

    componentWillMount () {
        this.fetchData();
    }
 
    fetchData = async () => {
        const teachers = await Services.Teachers.getTeachers();
        this.setState({data: teachers, isLoading: false});
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Teacher info woo
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
    text: {
        fontSize: 40,
    }
});