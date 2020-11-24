import React, { Component } from "react";
import {
    View, StatusBar, StyleSheet,
    Alert
} from "react-native";
import { Container, Header, Root } from "native-base";
import { Colors } from "values/colors";
import SplashScreen from 'react-native-splash-screen';
import { Constants } from "values/constants";
import commonStyles from "styles/commonStyles";
import { Fonts } from "values/fonts";
// import styles from './styles';

class SplashView extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
            return (
                <Container style={{justifyContent:'center', alignItems: 'center'}}>
                    <View style={{alignSelf:'center', width: 100, height: 100, borderRadius: 65, backgroundColor: 'orange'}}></View>
                </Container>
            );
    }
}

export default SplashView;