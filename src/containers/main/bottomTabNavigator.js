import React, { Component } from 'react';
import {
	BackHandler,
	Text,
	View,
	Image,
	Alert,
	Dimensions
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import HomeView from 'containers/home/homeView';
import ic_home_white from "images/ic_home_white.png";
import ic_home_blue from "images/ic_home_blue.png";
import { Colors } from 'values/colors';

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="TabHome"
			activeColor={Colors.COLOR_BLUE}
			inactiveColor={'white'}
			backBehavior={"initialRoute"}
		>
			<Tab.Screen
				name="TabHome"
				component={HomeView}
				options={{
					title: "Home",
					tabBarIcon: ({ focused, color, size }) => (
						<Image source={focused ? ic_home_blue : ic_home_white} />
					),
					tabBarColor: Colors.COLOR_TAB
				}}
			/>
			<Tab.Screen
				name="TabHome1"
				component={HomeView}
				options={{
					title: "Home",
					tabBarIcon: ({ focused, color, size }) => (
						<Image source={focused ? ic_home_blue : ic_home_white} />
					),
					tabBarColor: Colors.COLOR_TAB
				}}
			/>
			<Tab.Screen
				name="TabHome2"
				component={HomeView}
				options={{
					title: "Home",
					tabBarIcon: ({ focused, color, size }) => (
						<Image source={focused ? ic_home_blue : ic_home_white} />
					),
					tabBarColor: Colors.COLOR_TAB
				}}
			/>
			<Tab.Screen
				name="TabHome3"
				component={HomeView}
				options={{
					title: "Home",
					tabBarIcon: ({ focused, color, size }) => (
						<Image source={focused ? ic_home_blue : ic_home_white} />
					),
					tabBarColor: Colors.COLOR_TAB
				}}
			/>
		</Tab.Navigator>
	);
}

export default BottomTabNavigator;