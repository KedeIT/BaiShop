/**
 * Created by BulldogX on 2018/9/28.
 */

import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	Text,
	Image
} from 'react-native';

const itemWidth = Dimensions.get('window').width/2;
const contentWith = itemWidth - 15;

export default class ProductItem extends Component {
	render() {
		const {GoodsName,GoodsImg,Price,SaleQuantity,ShopId} = this.props.item.item;

		let isLeft = (this.props.item.index % 2 === 0);

		return (
			<View style={styles.container}>
				<View style={[styles.content,isLeft ? {marginLeft:10,marginRight:5} : {marginLeft:5, marginRight:10}]}>
					<Image
						source={{uri:GoodsImg}}
						style={{height:contentWith,width:contentWith}}
						resizeMode={'contain'}
					/>

					<Text style={styles.goodsNameText}>
						<Text style={styles.globalBuyText}>{ShopId ===2 ? '全球购' : ''}</Text>
						{' '+GoodsName}
					</Text>

					<Text style={styles.saleCountText}>
						<Text style={styles.priceText}>{'￥ ' + Price.toFixed(2)}</Text>
						{'   销量' + SaleQuantity}件
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		width:itemWidth,
		height:itemWidth + 100,
		backgroundColor:'rgb(245,245,245)'
	},
	content:{
		flex:1,
		marginTop:10,
		backgroundColor:'white',
		borderRadius:6,
		overflow:'hidden'
	},
	goodsNameText:{
		marginTop:10,
		marginLeft:5
	},
	globalBuyText:{
		backgroundColor:'#ff3366',
		color:'white',
		fontSize:12
	},
	saleCountText: {
		fontSize: 12,
		marginTop: 10,
		marginLeft:5
	},
	priceText: {
		color: '#ff3366',
		fontSize: 16
	},
});
