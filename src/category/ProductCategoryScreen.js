/**
 * Created by BulldogX on 2018/9/28.
 */

import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	FlatList,
	Text,
} from 'react-native';
import ProductItem from "./ProductItem";


export default class ProductCategoryScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataArr: [],
		};

		this.pageIndex = 1;
		this.pageSize = 10;
	}

	componentDidMount() {
		this.requestData();
	}

	requestData = async () => {
		let url = `https://api.baishop.com/api/Goods/Items?Cid=db509a7f-9599-4fa4-8d4f-316aaa67f813&Size=${this.pageSize}&Page=${this.pageIndex}&Sort=0`

		try {
			let response = await fetch(url, {
				method: 'POST',
				headers: new Headers({
					deviceNo: 'F2937CCC-7E12-4E47-8775-8283D7DB2D89',
					DevicePlatform: 'iOS',
					salePlatformId: '60CBE5FE-71A7-4660-9BEC-1422227D6ADB',
					AppVersion: '1.9.0'
				})
			});
			// console.log('返回数据--->',response);

			if (response.ok){
				let json = await response.json();
				// console.log('序列化--->',json)
				this.setState({dataArr:json.Data})

			}
		}catch (e) {

		}



	};

	render() {
		return (
			<FlatList
				data={this.state.dataArr}
				renderItem={(item) => <ProductItem item={item}/>}
				keyExtractor={(item, index) => index}
				numColumns={2}
			/>
		);
	}
}
