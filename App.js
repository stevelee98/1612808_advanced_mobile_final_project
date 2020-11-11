/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import AppNavigator from 'containers/navigation/appNavigator';
import store from './src/store';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import { MenuProvider } from 'react-native-popup-menu';

export default class App extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        SplashScreen.hide()
    }

    render() {
        return (
            <Provider store={store}>
                <Root>
                    <MenuProvider>
                        <AppNavigator/>
                    </MenuProvider>
                </Root>
            </Provider>
        );
    }
}
