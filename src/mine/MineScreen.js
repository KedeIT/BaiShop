import React, {Component} from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class MineScreen extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.text}>Mine Screen</Text>
			</View>
		)
	}
}

export default MineScreen;


const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	text:{
		color:'red',
		fontSize:30
	}
});
