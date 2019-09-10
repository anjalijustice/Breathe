import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class ScheduleCard extends React.Component {
  render(){ 
    return (
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>{this.props.item}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#b0e0e6',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black'
  },
});