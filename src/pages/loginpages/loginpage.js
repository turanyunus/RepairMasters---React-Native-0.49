import React, { Component } from 'react';
import {
	Text,View,StyleSheet,Button,Image,KeyboardAvoidingView,StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import LoginForm from './loginformpage.js';

export default class LoginPage extends Component {
  render() {
    return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<View style={styles.logoContainer}>
        <StatusBar
          backgroundColor='#2980b9'
        />

        <Image 
          style={styles.logo}
          source={require('../../images/masterimg.png')} 
        />
        <Text style={styles.title}>
          Uygulamayı keşfetmek için giriş yapmanız gerekecektir
        </Text>
      </View>
      <View style={styles.formContainer}>
        <LoginForm />
      </View>
		</KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
      flex: 1,
      backgroundColor: '#3498db',
      padding:10,
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