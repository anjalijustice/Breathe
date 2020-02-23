import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import Services from '../services';
import TeacherCard from '../components/TeacherCard';

<<<<<<< HEAD
export default class TeacherScreen extends React.Component {
=======
export default class TeachersScreen extends React.Component {
>>>>>>> 88c52f3ead52b20572e2ca1a848293f087c106b6
    static navigationOptions = {
        title: 'Teachers',
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
<<<<<<< HEAD
            teachers: [],
=======
            data: [],
>>>>>>> 88c52f3ead52b20572e2ca1a848293f087c106b6
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

<<<<<<< HEAD
    onPress = (item) => {
        this.props.navigation.navigate('Teacher', {
            user: this.state.user,
            item: item,
        })
    }
=======
>>>>>>> 88c52f3ead52b20572e2ca1a848293f087c106b6
    _renderItem = ({item}) => {
        return (
            <View style={styles.list}>
                <TeacherCard item={item} navigation={this.props.navigation} user={this.state.user}/>
            </View>
        )
    }

<<<<<<< HEAD

=======
>>>>>>> 88c52f3ead52b20572e2ca1a848293f087c106b6
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
                        contentInset={{bottom: 60}}
                        contentContainerStyle={styles.flatList}
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        extraData={this.state}
<<<<<<< HEAD
                        renderItem={(item) => this._renderItem(item, this.props)}
=======
                        renderItem={(item) => this._renderItem(item)}
>>>>>>> 88c52f3ead52b20572e2ca1a848293f087c106b6
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
      backgroundColor: 'rgb(220, 230, 232)',
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        flex: 1,
    },
    flastList: {
        opacity: 1,
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});