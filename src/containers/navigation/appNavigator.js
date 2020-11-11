import React, { Component } from "react";
import {
    Easing, Animated, View, Text, Platform
} from "react-native";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SplashView from "containers/splash/splashView";
import Main from "containers/main/bottomTabNavigator";
import LoginView from 'containers/login/loginView';
import RegisterView from 'containers/register/registerView';

import { enableScreens } from 'react-native-screens';
import { Colors } from 'values/colors';

enableScreens();

const Stack = createStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background : Colors.COLOR_BACKGROUND,
    },
};

const AppNavigator = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator
                initialRouteName={'Register'}
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
                <Stack.Screen name="Login" component={LoginView} />
                <Stack.Screen name="Register" component={RegisterView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;