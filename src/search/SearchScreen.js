import React, {Component} from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class SearchScreen extends Component {
	static navigationOptions = {
		headerTitle:'搜索'
	};
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.text}>Search Screen</Text>
			</View>
		)
	}
}

export default SearchScreen;


const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	text:{
		color:'blue',
		fontSize:30
	}
});
