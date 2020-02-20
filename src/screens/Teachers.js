import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import Services from '../services';

//Page has teacher cards with name/pic? 
//Click on the card takes you to a teachers page with all the workshops theyre teaching and bio

export default class TeacherScreen extends React.Component {
    static navigationOptions = {
        title: 'AllTeachers',
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            teachers: [],
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

    onPress = (item) => {
        this.props.navigation.navigate('Teacher', {
            user: this.state.user,
            item: item,
        })
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
    },
    list: {
        flex: 1,
        // paddingBottom: 5,
    },
    flastList: {
        opacity: 1,
        flex: 1
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        marginLeft: '2%',
        width: '96%',
        marginTop: 5,
        marginBottom: 0,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
        width: 3,
        height: 3,
        }
    },
    cardText: {
        fontSize: 16,
        padding: 10,
        margin: 0,
        opacity: 1,
        textAlign: 'left',
        color: 'darkslategrey',
        opacity: 1,
        fontFamily: 'chelseaMarketReg',
        marginRight: 50,
    },
});