import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class FoodCard extends React.Component {
  render(){ 
    return (
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>{this.props.item.name.first}</Text>
        <Text style={styles.cardSubText}>Meal: (Meal type)</Text>
        <Text style={styles.cardSubText}>Ingredients: (All the Ingredients)</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
      marginLeft: 10,
      fontSize: 20,
      textAlign: 'left',
      color: 'white',
    },
    cardSubText: {
      marginLeft: 10,
      fontSize: 12,
      textAlign: 'left',
      color: 'white',
    }
  });