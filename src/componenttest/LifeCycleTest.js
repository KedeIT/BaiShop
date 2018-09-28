/**
 * Created by BulldogX on 2018/9/28.
 */

import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native';

export default class LifeCycleTest extends Component {

	//构造方法
	constructor(props) {
		super(props);
		this.state={
			message:'1111111111'
		};
		console.log('constructor');
	}

	//准备加载组件
	componentWillMount() {
		console.log('componentWillMount')
	}

	//渲染页面
	render() {
		console.log('render');
		return (
			<View>
				<Text>{this.state.message}</Text>
				<Button
					title='update'
					onPress={() => this.setState({message:'22222222'})}
				/>
			</View>
		)
	}

	//加载完成并成功渲染
	componentDidMount() {
		console.log('componentDidMount')
	}

	//组件接收到新props时触发
	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps')
	}

	//是否可以更新
	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate')
		return true;
	}

	//组件重新渲染前调用
	componentWillUpdate() {
		console.log('componentWillUpdate')
	}

	//重新渲染完成调用
	componentDidUpdate() {
		console.log('componentDidUpdate')
	}
	//组件被卸载
	componentWillUnmount() {
		console.log('componentWillUnmount')
	}
}
