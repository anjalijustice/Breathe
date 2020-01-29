import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getTimeFromDateTime } from '../../src/utils/dateTime';


export default class ScheduleCard extends React.Component {
  onPress = ({item}) => {
    //Pop up EventPage when a schedule card is pressed (this is instead of using a modal, allows for more info to be put on the event page)
    // this.props.updateModal(item)
    
    this.props.updateEvent(item)
    this.props.navigation.navigate('Event', {user:this.props.user, item: item})
  }
  
  render(){ 
    return (
      <TouchableOpacity 
        style={styles.card}
        onPress={() => this.props.navigation.push('Event', {user: this.props.user, item: this.props.item})}
      >
        <Text style={styles.cardText}>{this.props.item.title}</Text>
        <Text style={styles.cardSubText}>{getTimeFromDateTime(this.props.item.startTime)} - {getTimeFromDateTime(this.props.item.endTime)}</Text>
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
  cardText: {
    paddingBottom: 10,
    fontSize: 16,
    margin: 10,
    marginBottom: 0,
    opacity: 1,
    textAlign: 'center',
    color: 'black',
    fontWeight: '500',
  },
  cardSubText: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
    opacity: 1,
    fontWeight: '500',
    margin: 0,
    marginBottom: 10,
    padding: 0,
  }
});