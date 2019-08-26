import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getTimeFromDateTime } from 'breathe/src/utils/dateTime';
import Services from 'breathe/src/services';

export default class ScheduleCard extends React.Component {
  addFavorite = async () => {
    let workshopId = this.props.item.id;
    let userId = this.props.user.id;
    await Services.Favorites.createFavorite(userId, workshopId);
  }
  
  render(){ 
    // Fetch event data from database and loop through results to add data to scheduleCards?
    return (
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>{this.props.item.title}</Text>
        <Text style={styles.cardSubText}>{getTimeFromDateTime(this.props.item.startTime)} - {getTimeFromDateTime(this.props.item.endTime)}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginLeft: '2%',
    width: '96%',
    height: 70,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }
  },
  cardText: {
    paddingBottom: 10,
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
  cardSubText: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    marginBottom: 0,
    padding: 0,
  }
});