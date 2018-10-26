/**
 * Created by BulldogX on 2018/10/26.
 */


import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	ScrollView
} from 'react-native';
import {AdaptiveSize} from '../utils/ScreenUtil';

export default class DisplayAdaptiveTest extends Component {
	render() {
		return (
			<SafeAreaView>
				<ScrollView>
					<View style={{flex:1,justifyContent:'flex-start',flexWrap:'wrap',flexDirection:'row'}}>
						<View style={styles.viewer}>
							<Text style={styles.text}>我已经做了适配我已经做了适配我已经做了适配我已经做了适配我已经做了适配我已经做了适配</Text>
						</View>
						<View style={styles.viewerS}>
							<Text style={styles.text}>我已经做了适配我已经做了适配我已经做了适配我已经做了适配我已经做了适配我已经做了适配</Text>
						</View>
						<View style={styles.viewer}>
							<Text style={styles.text}>我已经做了适配我已经做了适配我已经做了适配我已经做了适配我已经做了适配我已经做了适配</Text>
						</View>
						<View style={styles.viewerS}>
							<Text style={styles.text}>我已经做了适配我已经做了适配我已经做了适配我已经做了适配我已经做了适配我已经做了适配</Text>
						</View>
						<View style={styles.viewer}>
							<Text style={styles.text}>我已经做了适配我已经做了适配我已经做了适配我已经做了适配我已经做了适配我已经做了适配</Text>
						</View>
						<View style={styles.viewerS}>
							<Text style={styles.text}>我已经做了适配我已经做了适配我已经做了适配我已经做了适配我已经做了适配我已经做了适配</Text>
						</View>
						<View style={styles.viewer}>
							<Text style={styles.text}>我已经做了适配我已经做了适配我已经做了适配我已经做了适配我已经做了适配我已经做了适配</Text>
						</View>
						<View style={styles.viewerS}>
							<Text style={styles.text}>我已经做了适配我已经做了适配我已经做了适配我已经做了适配我已经做了适配我已经做了适配</Text>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	viewer:{
		width:AdaptiveSize(200),
		height:AdaptiveSize(200),
		backgroundColor:'red'
	},
	text:{
		fontSize:AdaptiveSize(20),
		backgroundColor:'green'
	},
	viewerS:{
		width:AdaptiveSize(175),
		height:AdaptiveSize(175),
		backgroundColor:'red'
	},
});
