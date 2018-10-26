/**
 * Created by BulldogX on 2018/10/26.
 */


import React, { Component } from 'react';
import { Dimensions } from 'react-native';


/**
 * 获取当前设备的屏幕宽度
 */
const {width:ScreenW} = Dimensions.get('window');

/**
 * 设计图尺寸
 * @type {{width: number, height: number}}
 */
const defaultUI = {
	width:375,
	height:667
};

/**
 * 缩放比例
 */
const scale = ScreenW / defaultUI.width;

/**
 * 尺寸适配方法
 * @param size
 * @returns {number}
 * @constructor
 */
export const AdaptiveSize = size => {
	return size * scale;
};

