import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';

import LifeCycleTest from "../componenttest/LifeCycleTest";
import ProductCategoryScreen from "../category/ProductCategoryScreen";

class HomeScreen extends Component {
	render(){
		return (
			<ScrollableTabView
				renderTabBar={() => <DefaultTabBar/>}
				initialPage={0}
				tabBarUnderlineStyle={{backgroundColor:'#ff3366',height:2}}
				tabBarBackgroundColor='white'
				tabBarActiveTextColor='#ff3366'
				tabBarTextStyle={{marginTop:10}}
			>
				<ProductCategoryScreen tabLabel='首页'/>
				<View tabLabel='海外购'/>
				<View tabLabel='本周畅销'/>
				<View tabLabel='199任选3'/>
				<View tabLabel='视频购'/>

			</ScrollableTabView>
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
