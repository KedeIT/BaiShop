/**
 * Created by BulldogX on 2018/10/26.
 */


import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	SafeAreaView,
	Text
} from 'react-native';

export default class SafeAreaViewTest extends Component {
	render() {
		return (
			<SafeAreaView>
				<View style={{backgroundColor:'red',height:200,width:200}}>
					<Text style={{backgroundColor:'green',fontSize:20}}>我是一个文本，处在SafeAreaView中</Text>
				</View>
			</SafeAreaView>
		);
	}
}
