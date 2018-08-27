import React, {Component} from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class CategoryScreen extends Component {
	static navigationOptions = {
		headerTitle:'分类',
	};
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.text}>Category Screen</Text>
			</View>
		)
	}
}

export default CategoryScreen;


const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	text:{
		color:'yellow',
		fontSize:30
	}
});
