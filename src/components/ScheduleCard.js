import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { getTimeFromDateTime } from '../../src/utils/dateTime';
import Services from '../services';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";

export default class ScheduleCard extends React.Component {
  constructor(props) {
    super(props);
  } 

  favorite = (item) => {
    if (this.props.isFavorite) {
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
    this.props.isFavorite = true;
    this.props.add(item);
  }

  deleteFavorite = async (item) => {
    let userId = this.props.user.id;
    let workshopId = item.id;
    await Services.Favorites.deleteFavorite(userId, workshopId);

    this.props.isFavorite = false;
    this.props.delete(item);
  }

  onPress = (item) => {
    this.props.navigation.navigate('Workshop', {
        user: this.props.user,
        item: item,
        isFavorite: this.props.isFavorite,
        addFavorite: this.addFavorite,
        deleteFavorite: this.deleteFavorite
    });
  }

  render(){ 
    return (
      <TouchableOpacity 
        style={styles.card}
        onPress={() => this.onPress(this.props.item)}
      >
        <View style={styles.text}>
          <Text style={styles.cardText}>{this.props.item.title}</Text>
          <Text style={styles.cardSubText}>{getTimeFromDateTime(this.props.item.startTime)} - {getTimeFromDateTime(this.props.item.endTime)}</Text>
        </View>
        <View style={styles.favorite}>
            <TouchableOpacity onPress={() => this.favorite(this.props.item)}>
            {this.props.isFavorite ?
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
    backgroundColor: 'white',
    width: wp('96%'),
    height: hp('11%'),
    marginTop: 5,
    marginBottom: 0,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
    width: 3,
    height: 3,
    }
},
  text: {
    position: 'absolute',
    marginLeft: 10,
    textAlign: 'left'
},
  cardText: {
    fontSize: RFValue(14),
    color: '#5d8da0',
    fontFamily: 'helvetica77',
    marginRight: 55,
},
  cardSubText: {
    fontSize: RFValue(13),
    color: '#5d8da0',
    fontFamily: 'helvetica57',
},
  favorite: {
    position: 'absolute',
    left: '90%',
},
  like: {
    width: wp('6%'),
    height: hp('4%'),
}

});