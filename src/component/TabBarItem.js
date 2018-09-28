/**
 * Created by BulldogX on 2018/9/28.
 */

import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Image
} from 'react-native';

import PropTypes from 'prop-types';

export default class TabBarItem extends Component {

	static propTypes={
		focus:PropTypes.bool.isRequired,
		defaultImage:PropTypes.number.isRequired,
		selectedImage:PropTypes.number.isRequired,
	};

	static defaultProps={
		focus:false,
	};


	render() {
		return (
			<Image
				source={this.props.focus ? this.props.selectedImage : this.props.defaultImage}
				style={styles.tabBarItem}
			/>
		);
	}
}

// TabBarItem.propTypes={
// 	focus:PropTypes.bool.isRequired,
// 	defaultImage:PropTypes.string.isRequired,
// 	selectedImage:PropTypes.string.isRequired,
// };
//
// TabBarItem.defaultProps={
// 	focus:false,
// };

const styles = StyleSheet.create({
	tabBarItem:{
		height:20,
		width:20,
	}
});
