import React, { Component } from 'react';
import {
View,
Text,
StyleSheet,
Button,TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class MainPage extends Component {
  render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
            <View style={styles.oneBox}>
                <TouchableHighlight style={styles.twoBox} onPress={ () => Actions.placeinfopage()}>
                    <Text style={styles.welcome}>
                        ELEKTRIK
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.threeBox} onPress={ () => Actions.placeinfopage()}>
                    <Text style={styles.welcome}>
                        BEYAZ EŞYA
                    </Text>
                </TouchableHighlight>
            </View>
            <View style={styles.oneBox}>
                 <TouchableHighlight style={styles.threeBox} onPress={ () => Actions.placeinfopage()}>
                    <Text style={styles.welcome}>
                        KOMBİ
                    </Text>
                 </TouchableHighlight>
                 <TouchableHighlight style={styles.twoBox} onPress={ () => Actions.placeinfopage()}>
                    <Text style={styles.welcome}>
                        KLİMA
                    </Text>
                </TouchableHighlight>
            </View>
            <View style={styles.oneBox}>
                 <TouchableHighlight style={styles.twoBox} onPress={ () => Actions.maindetailspage()}>
                    <Text style={styles.welcome}>
                        OTO TAMIR
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.threeBox} onPress={ () => Actions.placeinfopage()}>
                    <Text style={styles.welcome}>
                        TELEFON TAMİR
                    </Text>
                </TouchableHighlight>
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
      flexDirection:'column',
    },
    oneBox:{
        flex: 1,
        backgroundColor: 'steelblue',
        flexDirection:'row',
        marginTop:10,
    },
    twoBox :{
        flex: 1,
        backgroundColor: '#2980b9',
        alignItems:'center',
        justifyContent:'center',
    },
    threeBox:{
        flex: 1,
        backgroundColor: '#3498db',
        alignItems:'center',
        justifyContent:'center',
    },
    welcome:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:17
    }
  });