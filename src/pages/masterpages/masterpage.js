import React, { Component } from 'react';
import {
	Text,View,StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class MasterPage extends Component {
  render() {
    return (
  		<View style={styles.container}>
  		</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      padding:10,
    }
});