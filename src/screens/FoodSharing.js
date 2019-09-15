import React from 'react';
import {StyleSheet, View, ImageBackground, FlatList, ActivityIndicator } from 'react-native';
import FoodCard from 'breathe/src/components/FoodCard';

class FoodScreen extends React.Component {
    static navigationOptions = {
        title: 'Food',
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

    fetchData= async () => {
        const response = await fetch('https://randomuser.me/api?results=5');
        const json = await response.json();
        this.setState({data: json.results, isLoading: false})

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
                <ImageBackground source={require('../../assets/img/breathe5.jpg')} style={styles.backgroundImage}>
                <FlatList 
                    style={styles.list}
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => <FoodCard item={item} />}
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
      backgroundColor: '#b0e0e6',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
    }
});

export default FoodScreen;
