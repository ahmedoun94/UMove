
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class MonEspace extends Component{
  render (){
    return (
        <View style={styles.container}>
        <Text>page mon espace </Text> 
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C3DDE6',
      paddingTop: 45,
      
  
      
    },
})