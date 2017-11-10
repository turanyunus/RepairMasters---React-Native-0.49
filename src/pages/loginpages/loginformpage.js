import React, { Component } from 'react';
import {
	View,StyleSheet,TextInput,TouchableOpacity,Text,Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const API_URL ="http://localhost/";

export default class LoginPage extends Component {

  constructor(props) {
    super(props); // super arguman geçmenizi sağlar eğer constructor kullanmak isterseniz kullanmak zorunlu oluyor.

    this.state = { // burası bind da kullandığım değerler
      userName: '',
      userPassword: ''
    };
  }
  goLogin() {
    debugger;
    var name = this.state.userName;
    var pass = this.state.userPassword;

    if (name == "" || pass == "") {
      Alert.alert("Girilecek Alanları Boş Bırakmayınız");
    }else{
      debugger;
      fetch(API_URL, { // extralar
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify ({ // değerleri serialize ediyoruz
          userName: name,
          userPassword: pass
        })
      })  
      .then((res) => res.json()) // gelen datayı parse ediyoruz
      .then((res) => {
        debugger;
          Alert.alert(res);
          Actions.mainpage();
      })
      .catch((error) => {
        debugger;
        Alert.alert("Sorun oluştu" + error);
      });  
    }
  }

  render() {
    return (
		<View style={styles.container}>
		    <TextInput
            placeholder="Kullanıcı adı veya Email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
            onChangeText={(value) => this.setState({userName: value})}
            underlineColorAndroid='transparent'
        />
        <TextInput
            placeholder="Şifre"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
            onChangeText={(value) => this.setState({userPassword: value})}
            underlineColorAndroid='transparent'
        />
        <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={this.goLogin.bind(this)}
            >
            <Text style={styles.buttonText}>Giriş Yapınız</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonContainer} onPress={ () => Actions.registerpage()}>
           <Text style={styles.buttonText}>Kayıt Olunuz</Text>
        </TouchableOpacity>
		</View>
    );
  } 
}

const styles = StyleSheet.create({
	container: {
      paddingLeft:20,
      paddingRight:20,
      paddingBottom:10
    },
  input : {
    height:40,
    backgroundColor:'rgba(255,255,255,0.2)',
    marginBottom:5,
    color:'#FFF',
    paddingHorizontal:10
  },
  buttonContainer:{
    backgroundColor:'#2980b9',
    paddingVertical: 10,
    marginBottom:5,
  },
  buttonText:{
    textAlign:'center',
    color:'#FFF',
    fontWeight:'bold'
  }
});