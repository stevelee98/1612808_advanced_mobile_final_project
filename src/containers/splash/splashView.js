import React, { Component } from "react";
import {
    View, StatusBar, StyleSheet,
    Alert
} from "react-native";
import { Container, Header, Root } from "native-base";
import { Colors } from "values/colors";
import { connect } from 'react-redux';
import { ErrorCode } from "config/errorCode";
import SplashScreen from 'react-native-splash-screen';
import { Constants } from "values/constants";
import I18n, { localizes } from "locales/i18n";
import commonStyles from "styles/commonStyles";
import { Fonts } from "values/fonts";
import styles from './styles';

class SplashView extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
            return (
                <Container>
                    <Root>
                        
                    </Root>
                    <StatusBar translucent backgroundColor='transparent' />
                </Container>
            );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashView);