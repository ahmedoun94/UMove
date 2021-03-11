
import React, {Component, useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import {View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const initialState= {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}

const Proposition =() => {
  const [currentPosition, setCurrentPosition] = useState(initialState);
  
  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(position =>{
      
      const {longitude, latitude}= position.coords;
      setCurrentPosition({
        ...currentPosition,
        latitude,
        longitude,
      })
    }, 
    error => alert (error.message),
    {timeout:20000, maximumAge:1000}
    )
    
  },[])
    return currentPosition.latitude ? (
      <View style={styles.container}>
          <MapView provider={PROVIDER_GOOGLE} style={styles.map} 
          showsUserLocation
          initialRegion={
            currentPosition
          }
          />
          
      </View>

    ) : <ActivityIndicator style={{flex:1}} animating size ="large"/>
  
}


export default Proposition;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C3DDE6',
      
    },
    map: {
      width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
      
    },
})