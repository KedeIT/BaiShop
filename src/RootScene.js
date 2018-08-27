import React, {Component} from 'react';
import {
	StyleSheet,
	Image,
	TouchableOpacity,
	Text,
	Dimensions
} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import HomeScreen from "./home/HomeScreen";
import DiscoveryScreen from "./discovery/DiscoveryScreen";
import CartScreen from "./cart/CartScreen";
import MineScreen from "./mine/MineScreen";
import HealthScreen from "./health/HealthScreen";
import SearchScreen from "./search/SearchScreen";
import CategoryScreen from "./category/CategoryScreen";


const TabBarNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarLabel: '首页',
				tabBarIcon: ({focused, tintColor}) => (
					<Image
						source={focused ? require('../resource/tab/tab_home_selected.png') : require('../resource/tab/tab_home_default.png')}
						style={styles.tabBarItem}
					/>
				)

			}
		},
		Discovery: {
			screen: DiscoveryScreen,
			navigationOptions: {
				tabBarLabel: '发现',
				tabBarIcon: ({focused, tintColor}) => (
					<Image
						source={focused ? require('../resource/tab/tab_discovery_selected.png') : require('../resource/tab/tab_discovery_default.png')}
						style={styles.tabBarItem}
					/>
				)
			}
		},
		Health: {
			screen: HealthScreen,
			navigationOptions: {
				tabBarLabel: '健康',
				tabBarIcon: ({focused, tintColor}) => (
					<Image
						source={focused ? require('../resource/tab/tab_health_selected.png') : require('../resource/tab/tab_health_default.png')}
						style={styles.tabBarItem}
					/>
				)
			}
		},
		Cart: {
			screen: CartScreen,
			navigationOptions: {
				tabBarLabel: '购物车',
				tabBarIcon: ({focused, tintColor}) => (
					<Image
						source={focused ? require('../resource/tab/tab_car_selected.png') : require('../resource/tab/tab_car_default.png')}
						style={styles.tabBarItem}
					/>
				)
			}
		},
		Mine: {
			screen: MineScreen,
			navigationOptions: {
				tabBarLabel: '我的',
				tabBarIcon: ({focused, tintColor}) => (
					<Image
						source={focused ? require('../resource/tab/tab_mine_selected.png') : require('../resource/tab/tab_mine_default.png')}
						style={styles.tabBarItem}
					/>
				)
			}
		}
	}, {
		tabBarOptions: {
			activeTintColor: '#ff3366',
			style: {
				backgroundColor: 'white'
			}
		}
	}
);


const StackNavigator = createStackNavigator(
	{
		Tab: {
			screen: TabBarNavigator,
		},
		Search:{
			screen:SearchScreen,
		},
		Category:{
			screen:CategoryScreen,
		}
	},
	{
		headerLayoutPreset:'center',
		navigationOptions:{
			// headerTitleStyle:{
			// 	flex:1,
			// 	textAlign:'center',
			// 	alignSelf:'center'
			// },
			headerBackImage:(
				<Image
					source={require('../resource/nav/nav_back_gray.png')}
					style={{width:44,height:44,marginLeft:15}}
				/>
			),
		}
	}
);



TabBarNavigator.navigationOptions = ({navigation}) => {
	const {routeName} = navigation.state.routes[navigation.state.index];
	let headerTitle = null;
	let headerLeft = null;
	let headerRight = null;
	switch (routeName) {
		case 'Home':{
			headerTitle=(
				<TouchableOpacity style={styles.searchBar} onPress={() => navigation.push('Search')}>
					<Image
						source={require('../resource/home/nav_search.png')}
						style={styles.searchIcon}
					/>
					<Text style={{color:'#c0c0c0'}}>请输入搜索内容</Text>
				</TouchableOpacity>
			);
			headerLeft=(
				<TouchableOpacity onPress={() => navigation.push('Category')}>
					<Image
						source={require('../resource/home/nav_classify_char.png')}
						style={{width:20,height:33.5,marginLeft:15}}
					/>
				</TouchableOpacity>
			);
			headerRight=(
				<TouchableOpacity onPress={() => alert('联系客服')}>
					<Image
						source={require('../resource/home/nav_message_char.png')}
						style={{width:20,height:30,marginRight:15}}
					/>
				</TouchableOpacity>
			);

			break;
		}
		case 'Discovery':{
			headerTitle='发现';
			break;
		}
		case 'Health':{
			headerTitle='健康';
			break;
		}
		case 'Cart':{
			headerTitle='购物车';
			break;
		}
		case 'Mine':{
			headerTitle='我的';
			break;
		}
	}

	return {
		headerTitle:headerTitle,
		headerLeft:headerLeft,
		headerRight:headerRight,
	}
};



export default StackNavigator;

const styles = StyleSheet.create({
	tabBarItem: {
		width: 20,
		height: 20,
	},
	searchBar:{
		width:Dimensions.get('window').width * 0.7,
		height:30,
		backgroundColor:'#e9e9ee',
		borderRadius:19,
		alignItems:'center',
		flexDirection:'row',
	},
	searchIcon:{
		width:20,
		height:20,
		margin:5,
		marginLeft:20
	}
});
