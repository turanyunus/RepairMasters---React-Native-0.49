import React, { Component } from 'react';
import {
	Text,View,StyleSheet,Picker,Button,Alert
} from 'react-native';

var PickerItem = Picker.Item;

import { Actions } from 'react-native-router-flux';

const API_URL ="http://turanyunus.com/repairAPI/placeinfo.php";

export default class PlaceInfoPage extends Component {
  constructor(){
  	super();
  	this.state = {
  		provinces:''
  	};
  }
  onValueChange(key,value){
  	debugger;
  	this.setState({provinces: value});
  	debugger;

  	if (provinces == "") {
      Alert.alert("Girilecek Alanları Boş Bırakmayınız!!!");
    }else{
      debugger;
      fetch(API_URL, { // extralar
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify ({ // değerleri serialize ediyoruz
          userProvince: provinces
        })
      })  
      .then((res) => res.json()) // gelen datayı parse ediyoruz
      .then((res) => {
 				var services = [];
                for(var service in res.services) {
                    services.push(<Picker.Item label={service.Label} value={service.Value}/>);
                }
                this.setState({
                    services: services
                });	       
                Alert.alert("İşlem başarılı");
      })
      .catch((error) => {
        debugger;
        Alert.alert("Sorun oluştu" + error);
      });  
    }
  	var provinces = this.state.provinces;
  }

  render() {
    return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Picker
			 	selectedValue={this.state.provinces}
			 	onValueChange={this.onValueChange.bind(this,'provinces')}
			 	prompt="İller"
			 	model="dropdown"
			 	enabled={true}>
					<Picker.Item label="Seçiniz" value="seciniz" />
					<Picker.Item label="Ankara" value="6" />
					<Picker.Item label="İstanbul" value="34" />
					<Picker.Item label="İzmir" value="35" />
				</Picker>
				<Picker>
					<Picker.Item label="Seçiniz" value="seciniz" />
				</Picker>
			</View>
			<View style={styles.footer}>
				<Button
					onPress={ () => Actions.masterpage()}
					title="Devam Edelim"
					color="#841584"
				/>	
			</View>
		</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      padding:10,
    },
    header:{
    	flex:1
    },
    headerText:{
    	color:'#3498db',
    	fontWeight:'bold',
    	fontSize:17,
    },
    content:{
    	flex:1,
    },
    footer:{
    	flex:3,
    	flexDirection:'column',
    },
});