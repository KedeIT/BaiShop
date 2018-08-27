import React,{Component} from 'react';
import {View,
Text,
	StyleSheet} from 'react-native';

class DiscoveryScreen extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.text}>Discovery Screen</Text>
			</View>
		)
	}
}

export default DiscoveryScreen;

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'green'
	},
	text:{
		color:'white',
		fontSize:30
	}
});
