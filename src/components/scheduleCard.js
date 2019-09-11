import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getTimeFromDateTime } from '../../src/utils/dateTime';

export default class ScheduleCard extends React.Component {
  onPress = (item) => {
    this.props.updateModal(item)
  }

  render(){ 
    return (
      <TouchableOpacity 
        style={styles.card}
        onPress={this.onPress.bind(this,this.props.item)}
      >
        
        <Text style={styles.cardText}>{this.props.item.name}</Text>
        <Text style={styles.cardSubText}>Duration ~ Location ~ Type</Text>
        {/* <Text style={styles.cardSubText}>{getTimeFromDateTime(this.props.item.startTime)} - {getTimeFromDateTime(this.props.item.endTime)}</Text> */}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginLeft: '2%',
    width: '96%',
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
    fontSize: 16,
    margin: 10,
    marginBottom: 0,
    textAlign: 'center',
    color: 'white'
  },
  cardSubText: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    margin: 0,
    marginBottom: 10,
    padding: 0,
  }
});