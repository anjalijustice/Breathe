import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Services from '../services';

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
        this.fetchData();
        this.setState({ isLoading: false })
    }
 
    fetchData = async () => {
        const teachers = await Services.Teachers.getTeachers();
        this.setState({ data: teachers });
    }
    
    _renderItem = ({item}) => {
        return (
            <View style={styles.list}>
                <TouchableOpacity 
                    style={styles.card}
                    onPress={()=> this.onPress(item)}
                >
                    {/* Teacher Name */}
                    <Text style={styles.cardText}>{item.fullName}</Text> 
                </TouchableOpacity>
            </View>
        )
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
                <FlatList 
                    contentInset={{bottom: 60}}
                    contentContainerStyle={styles.flatList}
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={this.state}
                    renderItem={(item) => this._renderItem(item, this.props)}
                />
            </View>
            )
        }
       
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