import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native';

class HomeScreen extends Component {
	render(){
		return (
			<View style={styles.container}>
				<Text>Home Screen</Text>
				<Button
					title={'提示'}
					onPress={() => alert('正在学习')}
				/>
			</View>
		)
	}
}

export default HomeScreen;


const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	}
});
