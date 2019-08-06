import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class scheduleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          dataSource: null,
        }
      }
      
      componentDidMount () {
        // Fetch data from API
        return fetch('put API endpoint here')
        // Get response from api and convert to json object
          .then((response) => response.json() )
          // Use json to set state
          .then((responseJson) => {
            this.setState({
              isLoading: false,
              dataSource: responseJson.event
            })
    
          })
    
          .catch((error) => {
            console.log(error)
          });
      }

    render() { 
       
    }
}