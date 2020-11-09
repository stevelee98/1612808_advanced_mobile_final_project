import React, { Component } from "react";
import {
    Easing, Animated, View, Text, Platform
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SplashView from "containers/splash/splashView";
import Main from "containers/main/bottomTabNavigator";

import { enableScreens } from 'react-native-screens';

enableScreens();

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'Main'}
                headerMode={'none'}
                mode={'modal'}
                screenOptions={{
                    gestureEnabled: true,
                    cardOverlayEnabled: true,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            >
                <Stack.Screen name="Splash" component={SplashView} />
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;