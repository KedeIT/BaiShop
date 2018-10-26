/**
 * Created by BulldogX on 2018/9/26.
 */

import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	FlatList,
	Platform,
	DeviceEventEmitter
} from 'react-native';


export default class LeftFlatList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0,
		}
	}

	componentDidMount() {
		DeviceEventEmitter.emit('CATEGORY_SELECTED', this.props.data[0].Child);
	}

	renderItem = (item) => {
		let isSelected = (this.state.selectedIndex === item.index);
		return (
			<TouchableOpacity
				style={{height: 60}}
				onPress={() => {
					if (!isSelected) {
						this.setState({selectedIndex: item.index})
					}

					//发送左侧item选中的通知
					DeviceEventEmitter.emit('CATEGORY_SELECTED', item.item.Child);
				}}
			>
				<View style={[styles.textView, {backgroundColor: isSelected ? '#ff3366' : 'white'}]}>
					<Text
						style={[styles.text, isSelected ? styles.textSelected : styles.textDefault]}>{item.item.MobileClassName}</Text>
				</View>
			</TouchableOpacity>
		)
	};

	render() {
		return (
			<FlatList
				data={this.props.data}
				keyExtractor={(item) => item.Id}
				renderItem={(item) => this.renderItem(item)}
				showsVerticalScrollIndicator={false}
				extraData={this.state}
			/>
		);
	}
}

const styles = StyleSheet.create({
	textView: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 30,
		width: 70,
		borderRadius: 20,
		overflow: 'hidden',
		marginLeft: 15,
	},
	text: {
		color: '#646464',
		fontSize: 13,
		// textAlign: 'center',//文字水平居中
		// textAlignVertical: 'center',//文字垂直居中
		// ...Platform.select({
		// 	ios: {
		// 		lineHeight: 60,
		// 	},
		// 	android: {}
		// }),
	},
	textDefault: {
		color: '#646464',
		backgroundColor: 'white',
	},
	textSelected: {
		color: 'white',
		backgroundColor: '#ff3366',
	}

});
