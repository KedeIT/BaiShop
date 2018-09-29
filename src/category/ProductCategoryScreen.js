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
			dataArr: [],//数据源
			refreshing: true//控制FlatList自带的下拉刷新菊花状态
		};

		this.pageIndex = 1;//分页索引
		this.pageSize = 4;//分页数据大小
		this.totalPage = 0;//总分页
		this.isLoading = false;//是否正在上拉加载
		this.isRefreshing = true;//是否正在下拉刷新
	}

	componentDidMount() {
		this.onRefresh();
	}

	//下拉刷新时执行的操作
	onRefresh = () => {
		if (this.isRefreshing && this.state.dataArr.length > 0) {
			return;
		}
		this.pageIndex = 1;
		console.log('下拉刷新-----> ' + this.pageIndex);
		this.isRefreshing = true;
		this.setState({refreshing: true});
		this.requestData();
	};
	//上拉加载
	loadMore = () => {
		if (this.isLoading || this.pageIndex > this.totalPage) {
			return;
		}
		console.log('loadMore----->');
		this.isLoading = true;
		this.setState({refreshing: false});
		this.requestData();
	};

	//结束刷新
	endRefresh = () => {
		this.isRefreshing = false;
		this.isLoading = false;
		if (this.pageIndex === 1) {
			this.setState({refreshing: false})
		}
	};

	//请求列表数据
	requestData = async () => {
		let url = `https://api.baishop.com/api/Goods/Items?Cid=db509a7f-9599-4fa4-8d4f-316aaa67f813&Size=${this.pageSize}&Page=${this.pageIndex}&Sort=0`;

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
			if (response.ok) {
				let json = await response.json();
				if (json.State) {
					this.totalPage = json.TotalPage;
					this.setState((prevState) => {
						//更新数据源数据
						if (this.pageIndex === 1) {
							//下拉刷新时，清空数据源
							this.state.dataArr = [];
						}
						return {dataArr: prevState.dataArr.concat(json.Data)}
					})
				}
			}
			//结束刷新
			this.endRefresh();
			//页面索引++
			this.pageIndex++;
		} catch (e) {
			this.endRefresh();
		}
	};

	render() {
		return (
			<FlatList
				data={this.state.dataArr}
				renderItem={(item) => <ProductItem item={item}/>}
				keyExtractor={(item) => {
					console.log('keyExtractor----->',item);
						return item.SeoCode
					}
				}
				numColumns={2}
				onRefresh={this.onRefresh}
				refreshing={this.state.refreshing}
				onEndReachedThreshold={0.1}
				onEndReached={() => this.loadMore()}
			/>
		);
	}
}
