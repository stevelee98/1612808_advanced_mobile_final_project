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

import ic_home_black from "images/ic_home_black.png";
import ic_home_black from "images/ic_home_black.png";
import styles from './styles';

const BottomTabNavigator = ({ badgeCount }) => {
	return (
		<Tab.Navigator
			initialRouteName="TabHome"
			activeColor={'black'}
			inactiveColor={'white'}
			backBehavior={"initialRoute"}
		>
			<Tab.Screen
				name="TabHome"
				component={HomeView}
				options={{
					title: "Home",
					tabBarIcon: ({ focused, color, size }) => (
						<Image source={focused ? ic_home_black : ic_home_black} />
					),
					tabBarColor: 'white'
				}}
			/>
			<Tab.Screen
				name="TabHome"
				component={HomeView}
				options={{
					title: "Home",
					tabBarIcon: ({ focused, color, size }) => (
						<Image source={focused ? ic_home_black : ic_home_black} />
					),
					tabBarColor: 'white'
				}}
			/>
			<Tab.Screen
				name="TabHome"
				component={HomeView}
				options={{
					title: "Home",
					tabBarIcon: ({ focused, color, size }) => (
						<Image source={focused ? ic_home_black : ic_home_black} />
					),
					tabBarColor: 'white'
				}}
			/>
			<Tab.Screen
				name="TabHome"
				component={HomeView}
				options={{
					title: "Home",
					tabBarIcon: ({ focused, color, size }) => (
						<Image source={focused ? ic_home_black : ic_home_black} />
					),
					tabBarColor: 'white'
				}}
			/>
		</Tab.Navigator>
	);
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomTabNavigator);