/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';


/**
 *  RootScene 入口
 */
import RootScene from './src/RootScene';
AppRegistry.registerComponent(appName, () => RootScene);


/**
 * 页面适配
 */
// import DisplayAdaptiveTest from './src/test/DisplayAdaptiveTest';
// AppRegistry.registerComponent(appName, () => DisplayAdaptiveTest);


/**
 * iPhone刘海屏适配，SafeAreaView
 */
// import SafeAreaViewTest from './src/test/SafeAreaViewTest';
// AppRegistry.registerComponent(appName, () => SafeAreaViewTest);
