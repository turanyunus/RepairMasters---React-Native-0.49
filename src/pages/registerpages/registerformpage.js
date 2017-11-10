import React, { Component } from 'react';
import {
	View,StyleSheet,TextInput,TouchableOpacity,Text,Alert
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const API_URL ="http://localhost/";

export default class RegisterFormPage extends Component {
  // EKRAN İLK AÇILDIGINDA ÇALIŞAN FONKSİYON
  /*componentDidMount(){
    alert("Hello");
  }*/ 


  constructor(props) {
    super(props); // super arguman geçmenizi sağlar eğer constructor kullanmak isterseniz kullanmak zorunlu oluyor.

    this.state = { // burası bind da kullandığım değerler
      userName: '',
      userPassword: '',
      userPasswordAgain:'',
      userEmail:'',
      error: []
    };
  }

  // kayıt isteği atacağımız ve yükleceğimiz fonksiyon
  goRegister() {
    debugger;
    var name = this.state.userName;
    var pass = this.state.userPassword;
    var passCount = this.state.userPassword.length;
    var passAgain = this.state.userPasswordAgain;
    var email = this.state.userEmail;

    if (name == "" || pass == "" || passAgain == "" || email == "") {
      Alert.alert("Girilecek Alanları Boş Bırakmayınız");
    }else if(passCount < 6){
      Alert.alert("Şifreniz en az 6 karakter olmalıdır.");
    }else if(pass != passAgain){
      Alert.alert("Sifreler birbiri ile bagdaşmıyor.");
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
          userPassword: pass,
          userEmail:email
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
  }// goRegister end 

  render() {
    return (
		<View style={styles.container}>
		    <TextInput
            placeholder="Kullanıcı Adı"
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
        <TextInput
            placeholder="Şifre Tekrar"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
            onChangeText={(value) => this.setState({userPasswordAgain: value})}
            underlineColorAndroid='transparent'
        />
        <TextInput
            placeholder="Email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
            onChangeText={(value) => this.setState({userEmail: value})}
            underlineColorAndroid='transparent'
        />
        <TouchableOpacity 
          style={styles.buttonContainer}
          onPress={this.goRegister.bind(this)} /* butona tıklandığında tetiklenecek fonksiyon*/
          >
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
    paddingVertical: 10
  },
  buttonText:{
    textAlign:'center',
    color:'#FFF',
    fontWeight:'bold'
  }
});