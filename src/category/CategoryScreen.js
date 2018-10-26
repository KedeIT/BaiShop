import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	FlatList,
	SectionList,
	Platform,
	Dimensions,
	DeviceEventEmitter,
	SafeAreaView
} from 'react-native';

import LeftFlatList from './LeftFlatList';
import RightSectionList from "./RightSectionList";

import CategoryData from './category';


class CategoryScreen extends Component {
	static navigationOptions = ({navigation}) => ({
		headerTitle: '全部分类',
		headerRight: (
			<TouchableOpacity
				onPress={() => navigation.push('Search')}
			>
				<Image
					source={require('../../resource/home/nav_search.png')}
					style={{width: 18, height: 20, marginRight: 15}}
				/>
			</TouchableOpacity>
		)
	});


	constructor(props) {
		super(props);
		this.state = {
			rightData: []
		};
		this.flagObj = null;
	}

	componentWillMount() {
		this.observe = DeviceEventEmitter.addListener('CATEGORY_SELECTED', this.handleData)
	}
	componentDidMount() {

	}

	componentWillUnmount() {
		this.observe.remove();
	}

	//左侧的按钮点击时刷新右侧的数据

	handleData = (param) => {
		if(this.flagObj === param){
			return;
		}
		this.flagObj = param;

		let cusPar = param.map((itemObj) => {
			let obj = this.copyObject(itemObj);
			let categoryArr = obj.Child;
			delete obj["Child"];
			obj.data = categoryArr;
			return obj;
		});
		this.setState({rightData:cusPar});
	};

	//Object对象拷贝
	copyObject= (orig) => {
		let copy = Object.create(Object.getPrototypeOf(orig));
		this.copyOwnPropertiesFrom(copy, orig);
		return copy;
	};
	copyOwnPropertiesFrom = (target, source) => {
		Object
			.getOwnPropertyNames(source)
			.forEach(function (propKey) {
				let desc = Object.getOwnPropertyDescriptor(source, propKey);
				Object.defineProperty(target, propKey, desc);
			});
		return target;
	};

	//ES2017 Object对象拷贝 (Android暂不支持)
	//  copyObject =  (orig) => {
	// 	return Object.create(
	// 		Object.getPrototypeOf(orig),
	// 		Object.getOwnPropertyDescriptors(orig)
	// 	);
	// };

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View style={{width: 100, backgroundColor: 'white'}}>
					<LeftFlatList data={CategoryData.Data}/>
				</View>
				<View style={styles.verticalLine}/>
				<RightSectionList
					data={this.state.rightData}
					style={{width:Dimensions.get('window').width - 100,backgroundColor:'blue'}}/>
			</SafeAreaView>
		)
	}
}

export default CategoryScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		flexDirection: 'row',
	},
	verticalLine: {
		backgroundColor: '#c0c0c0',
		width: 0.7,
	}
});
