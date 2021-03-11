import React, {Component} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
//import { createStackNavigator } from 'react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import Recherche from './Recherche.js'
import Proposition from './Proposition'
import MonEspace from './MonEspace'
//import StackRecherche from './StackRecherche.js'


const RechercheStack = createStackNavigator();
const MonEspaceStack = createStackNavigator();
const PropositionStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const PropositionStackScreen = () => (

    <RechercheStack.Navigator>
        <RechercheStack.Screen name ="Proposition" component={Proposition} options={{
            headerStyle:{
                backgroundColor: '#71ADC1',
                elevation: 10
            },
            headerTitleAlign: 'center'
        }} />

    </RechercheStack.Navigator>
);

const RechercheStackScreen = () => (

    <RechercheStack.Navigator>
        <RechercheStack.Screen name ="Recherche" component={Recherche} options={{
            headerStyle:{
                backgroundColor: '#71ADC1',
                elevation: 10
            },
            headerTitleAlign: 'center'
        }} />

    </RechercheStack.Navigator>
);

const MonEspaceStackScreen = () => (

    <RechercheStack.Navigator>
        <RechercheStack.Screen name ="MonEspace" component={MonEspace} options={{
            headerStyle:{
                backgroundColor: '#71ADC1',
                elevation: 10
            },
            headerTitleAlign: 'center'
        }} />

    </RechercheStack.Navigator>
);

const BottomTabNavigator = ()=> (
    <Tab.Navigator
      initialRouteName="Recherche"
      activeColor="#06394B"
      inactiveColor ='#C3DDE6'
      barStyle={{ backgroundColor: '#71ADC1',
      shadowColor: 'black',elevation: 10 }}
      labeled= {false}
    >
      <Tab.Screen
        name="Recherche"
        component={RechercheStackScreen}
        options={{
          tabBarLabel: 'Recherche',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Proposition"
        component={PropositionStackScreen}
        options={{
          tabBarLabel: 'Proposition',
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircle" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MonEspace"
        component={MonEspaceStackScreen}
        options={{
          tabBarLabel: 'Mon espace',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
      </Tab.Navigator>
)

export default BottomTabNavigator;

