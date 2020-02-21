import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { getTimeFromDateTime } from '../../src/utils/dateTime';
import Services from '../services';

//Need to edit a lot: move all card info from schedule screen into Schedule Card component for better readabilitly 
//Currently this component is unused and all the info is directly in schedule.js

export default class ScheduleCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        like: true,
    }
  } 

  isFavorite = (item) => {
    return this.props.favoriteIds.includes(item.id);
  }

  favorite = (item) => {
    if (this.isFavorite(item)) {
        this.deleteFavorite(item);
    } else {
        this.addFavorite(item);
    }
  }

  addFavorite = async (item) => {
    let userId = this.props.user.id;
    let workshopId = item.id;
    await Services.Favorites.createFavorite(userId, workshopId);

    //Adding workshop into local state
    let favoriteIds = this.props.favoriteIds;
    favoriteIds.push(item.id);
    //Need to add this workshop into the favorites object
    this.props.add(favoriteIds)
  }

  deleteFavorite = async (item) => {
    let userId = this.props.user.id;
    let workshopId = item.id;
    await Services.Favorites.deleteFavorite(userId, workshopId);
    this.props.delete(item)
  }

  onPress = (item) => {
    this.props.navigation.navigate('Workshop', {
        user: this.props.user,
        item: item,
        isFavorite: this.isFavorite(item),
        addFavorite: this.addFavorite,
        deleteFavorite: this.deleteFavorite
    })
  }

  render(){ 
    return (
      <TouchableOpacity 
        style={styles.card}
        //On press is different
        onPress={() => this.onPress(this.props.item)}
      >
        <Text style={styles.cardText}>{this.props.item.title}</Text>
        <Text style={styles.cardSubText}>{getTimeFromDateTime(this.props.item.startTime)} - {getTimeFromDateTime(this.props.item.endTime)}</Text>
        <View style={styles.favorite}>
            <TouchableOpacity onPress={() => this.favorite(this.props.item)}>
            {this.isFavorite(this.props.item) ? 
            <Image
            source={require('../../assets/img/liked.png')}
            style={styles.like}
            />
            :
            <Image
                source={require('../../assets/img/like.png')}
                style={styles.like}
            />}
            </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    marginLeft: '2%',
    width: '96%',
    marginTop: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }
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
cardSubText: {
    fontSize: 14,
    textAlign: 'left',
    color: 'darkslategrey',
    opacity: 1,
    fontFamily: 'chelseaMarketReg',
    margin: 0,
    marginLeft: 10,
},
favorite: {
    bottom: '45%',
    left: '90%',
    margin: '-3%',
},
like: {
    width: 30,
    height: 30,
}

});