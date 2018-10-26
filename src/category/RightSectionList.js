/**
 * Created by BulldogX on 2018/9/26.
 */

import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	SectionList,
	Image,
	Text,
	FlatList,
	Dimensions
} from 'react-native';

const  itemWidth = (Dimensions.get('window').width - 100) / 3;
export default class RightSectionList extends Component {
	constructor(props){
		super(props);
		this.flagId = null;
	}
	renderItem = (item, index, section) => {
		if(this.flagId === null || this.flagId !== section.Id){
			this.flagId = section.Id;
			return (
				<FlatList
					data={section.data}
					numColumns={3}
					renderItem={(item) => {
						return (
							<View style={styles.item}>
								<Image
									source={{uri: item.item.Img}}
									style={{height: 50, width: 50, borderRadius: 25, overflow: 'hidden'}}
								/>
								<Text style={{marginTop:10,marginBottom:10}}>{item.item.MobileClassName}</Text>
							</View>
						)
					}
					}
					keyExtractor={(item, index) => index}
				/>)
		}else {
			return null;
		}
	};

	render() {
		return (
			<SectionList
				renderItem={({item, index, section}) => this.renderItem(item, index, section)}
				renderSectionHeader={(section) => {
					return <Text style={styles.sectionHeader}>{section.section.MobileClassName}</Text>
				}
				}
				sections={this.props.data}
				keyExtractor={(item, index) => index}
			/>
		);
	}
}


const styles = StyleSheet.create({
	item:{
		justifyContent: 'center',
		alignItems: 'center',
		width:itemWidth,
	},
	sectionHeader:{
		fontWeight: "bold",
		backgroundColor:'white',
		marginBottom:15,
		marginLeft:15,
		fontSize:17,
	}
});
