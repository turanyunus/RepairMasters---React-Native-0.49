import React, { Component } from 'react';
import {
  Text,View,StyleSheet,Button,Image,KeyboardAvoidingView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import RegisterFormPage from './registerformpage.js';


export default class RegisterPage extends Component {
  render() {
    return (
		  <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source={require('../../images/masterimg.png')} 
          />
          <Text style={styles.title}>
            Uygulamayı keşfetmek için giriş yapmanız gerekecektir
          </Text>
        </View>
        <View style={styles.formContainer}>
          <RegisterFormPage />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
	 container: {
      flex: 1,
      backgroundColor: '#3498db',
      padding:10
    },
  logoContainer: {
      alignItems:'center',
      flexGrow :1,
      justifyContent:'center'
    },
  logo: {
      width:70,
      height:110
    },
  title:{
      color:'#FFF',
      marginTop:10,
      width:200,
      textAlign:'center',
      opacity:0.9
  },
});