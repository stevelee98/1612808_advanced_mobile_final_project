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
import ForgetPasswordView from "containers/forgetPass/forgetPasswordView";
import VerifyPassWordView from "containers/verifyPass/verifyPassWordView";
import UserProfileView from "containers/profile/userProfileView";

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
                <Stack.Screen name="Login" component={LoginView} />
                <Stack.Screen name="Register" component={RegisterView} />
                <Stack.Screen name="ForgetPass" component={ForgetPasswordView} />
                <Stack.Screen name="VerifyPass" component={VerifyPassWordView} />
                <Stack.Screen name="UserProfile" component={UserProfileView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;