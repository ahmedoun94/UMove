import React, {Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,TextInput, KeyboardAvoidingView,ScrollView} from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
//import { NavigationContainer } from 'react-navigation/native';
//import { createStackNavigator } from 'react-navigation/stack';


export default class Main extends Component{
    static navigationOptions= {
        title:'Main',
    }
    render(){
        return(
        <KeyboardAvoidingView style={styles.container} behaviour='position' keyboardVerticalOffset={-100} >
        <ScrollView style={{flex:0, width:'100%', height:100}} >
            <TouchableOpacity onPress ={() =>this.props.navigation.navigate("Connexion")}>
            <Ionicons name="arrow-back-circle-sharp" size={40} color='#06394B' />
            </TouchableOpacity>
            <Text style={{color:'#06394B', textAlign:'center', padding:6, fontSize:20, paddingTop:20}}> Vous n'avez pas de compte?</Text>
            <Text style={{color:'#06394B', textAlign:'center', padding:6, fontSize:20,paddingBottom:30}}> Inscrivez-vous!</Text>
            <View>
            <Ionicons name="person-circle" size={30} color='#06394B' style={styles.inputIcon} />
                <TextInput style={styles.input}
                placeholderTextColor= '#06394B'
                placeholder="Nom"
                />
            </View>
            <View >
            <Ionicons name="person-circle" size={30} color='#06394B' style={styles.inputIcon} />
                <TextInput style={styles.input}
                placeholderTextColor= '#06394B'
                placeholder="Prénom"
                />
            </View>
            <View>
            <MaterialIcons name="cake" size={30} color='#06394B' style={styles.inputIcon} />
                <TextInput style={styles.input}
                placeholderTextColor= '#06394B'
                placeholder="Date de naissance"
                />
            </View>
            <View>
            <Ionicons name="call" size={24} color='#06394B' style={styles.inputIcon} />
                <TextInput style={styles.input}
                placeholderTextColor= '#06394B'
                placeholder="Numéro de portable"
                />
            </View>
            <View>
            <FontAwesome name="home" size={24} color='#06394B' style={styles.inputIcon} />
                <TextInput style={styles.input}
                placeholderTextColor= '#06394B'
                placeholder="Adresse"
                />
            </View>
            <View>
            <Entypo name="email" size={24} color='#06394B' style={styles.inputIcon} />
                <TextInput style={styles.input}
                placeholderTextColor= '#06394B'
                placeholder="Adresse email"
                />
            </View>
            
            <View>
            <Ionicons name="lock-closed-sharp" size={24} color='#06394B' style={styles.inputIcon} />
                <TextInput style={styles.input}
                placeholderTextColor= '#06394B'
                placeholder="Mot de passe"
                />
            </View>
            <View>
            <Ionicons name="lock-closed-sharp" size={24} color='#06394B' style={styles.inputIcon} />
                <TextInput style={styles.input}
                placeholderTextColor= '#06394B'
                placeholder="Mot de passe"
                />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{color:'#06394B',fontSize: 25}}>INSCRIPTION</Text>
            </TouchableOpacity>
        </ScrollView>
        </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C3DDE6',
      paddingTop: 45,
      
  
      
    },
    header: {
      fontSize: 25,
      color: '#06394B',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: 10,
      margin: 20,
  
    },
    button:{
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#06394B',
      shadowRadius: 5,
      
      shadowColor: 'black',
      shadowOpacity: 0.8,
      width: 180,
      height:40,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 160,
      margin: 20,
      backgroundColor: '#ABD7E6',
      elevation: 10  
  
    },
    input:{
      fontSize: 15,
      paddingLeft: 30,
      borderWidth: 1,
      borderRadius: 10,
      borderColor:'#06394B',
      backgroundColor: 'white',
      shadowRadius: 5,
      shadowOpacity: 10,
      
      
      shadowColor: 'black',
      padding: 6,
      margin: 5,
      width:250,
      marginLeft: 90,
      elevation: 10
      
  
  
  
    },
    inputIcon:{
      position: 'absolute',
      top:10,
      left: 50,
      
  
    }
  });
  
