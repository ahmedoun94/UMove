import React, {Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,TextInput} from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
//import { NavigationContainer } from 'react-navigation/native';
//import { createStackNavigator } from 'react-navigation/stack';
//import {StackNavigator} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inscription from './screen/Inscription.js'
import Connexion from './screen/Connexion.js'
import MotDePasse from './screen/MotDePasse.js'
import Recherche from './screen/Recherche.js'
import BottomTabNavigator from './screen/BottomTabNavigator.js'

const Stack = createStackNavigator();

export default class app extends Component{
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Connexion" component={Connexion}  />
        <Stack.Screen name="Inscription" component={Inscription}  />
        <Stack.Screen name="MotDePasse" component={MotDePasse}  />
        <Stack.Screen name="Recherche" component={BottomTabNavigator}  />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

