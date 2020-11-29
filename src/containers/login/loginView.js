import React, { Component } from 'react'
import { View, Text, BackHandler } from 'react-native'
import {
    Container, Content, Root,
} from 'native-base'
import { connect } from 'react-redux'
import { Constants } from 'values/constants';
import { Colors } from 'values/colors';
import TextInputCustom from 'components/textInputCustom';
import Header from 'components/header';
import ic_eye_grey from 'images/ic_eye_grey.png';
import ic_eye_lock_grey from 'images/ic_eye_lock_grey.png';
import styles from './styles';
import Button from 'components/button';
import BaseView from 'containers/base/baseView';
import StorageUtil from 'utils/storageUtil';

class LoginView extends BaseView {

    constructor(props) {
        super(props);
        this.state = {
            hidePassword: true,
            password: '',
            userName: '',
            user: null,
            errorSignIn: null,
        };
        this.hidePassword = true;
    }

    async componentDidMount() {
    }

    managePasswordVisibility = () => {
        const last = this.state.password;
        this.setState({ hidePassword: !this.state.hidePassword, password: '' });
        setTimeout(() => {
            this.setState({ password: last });
        }, 0);
    };

    validateData() {
        const { userName, password } = this.state;
        return true;
    }

    login() {
        if (this.validateData()) {
            //TODO: login
        }
    }

    onChangePassword = (password) => {
        this.setState({
            password,
        });
    }

    onChangeEmailOrPhone = (userName) => {
        this.setState({
            userName,
        });
    }

    login = async () => {
        let user ={
            id: 1,
            name: 'Obama',
            avatar: 'https://vcdn-vnexpress.vnecdn.net/2020/11/08/556318717088a-Obama-9977-1604774594.jpg'
        }
        let stored = StorageUtil.storeItem(StorageUtil.USER_PROFILE, user)
        this.goHomeScreen()
        this.showMessage("Login success")
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    title={"Sign In"}
                    onBack={() => { }}
                />
                <Content style={{ flex: 1, backgroundColor: Colors.COLOR_BACKGROUND, paddingHorizontal: Constants.PADDING_LARGE }}>
                    {this.renderForm()}
                    {this.renderButton()}
                </Content>
            </View>
        )
    }

    renderForm = () => {
        let { userName, password, validateUserName, validatePass } = this.state;
        return (
            <View style={{ marginTop: Constants.MARGIN_XX_LARGE }}>
                <TextInputCustom
                    onRef={(r) => (this.userName = r)}
                    oneLine={true}
                    label={'Username (or Email)'}
                    placeholder={'Username (or Email)'}
                    warnLabel={validateUserName}
                    value={userName}
                    onChangeText={(txt) => {
                        this.setState({ userName: txt, validateUserName: null });
                    }}
                    onSubmitEditing={() => {
                        this.password.focus();
                    }}
                    returnKeyType={'next'}
                    onBlur={() => {
                        this.setState({ validateUserName: null });
                    }}
                />
                <TextInputCustom
                    onRef={(ref) => (this.password = ref)}
                    oneLine={true}
                    label={'Password'}
                    warnLabel={validatePass}
                    placeholder={'Password'}
                    value={password}
                    secureTextEntry={this.state.hidePassword}
                    onChangeText={(txt) => {
                        this.setState({ password: txt, validatePass: null });
                    }}
                    onSubmitEditing={() => {
                        Keyboard.dismiss();
                    }}
                    returnKeyType={'done'}
                    contentRight={this.state.hidePassword ? ic_eye_lock_grey : ic_eye_grey}
                    onPressRight={this.managePasswordVisibility}
                    onBlur={() => {
                        this.setState({ validatePass: null });
                    }}
                />
            </View>
        );
    };

    renderButton = () => {
        return (
            <View style={{ marginTop: Constants.MARGIN }}>
                <Button
                    onPress={this.login}
                    title={"SIGN IN"}
                    titleStyle={{ fontWeight: 'bold', color: '#a5a5a5' }}
                    backgroundColor={Colors.COLOR_DRK_GREY} />
                <Button title={"FORGOT PASSWORD?"} titleStyle={{ fontWeight: 'bold', color: Colors.COLOR_BLUE }} />
                <Button title={"USE SINGLE SIGN-ON (SSO)"} titleStyle={{ fontWeight: 'bold', color: Colors.COLOR_BLUE }} border={{ borderWidth: 1, borderColor: Colors.COLOR_BLUE }} />
                <Button
                    onPress={() => { this.props.navigation.navigate("Register") }}
                    title={"SIGN UP FREE"}
                    titleStyle={{ fontWeight: 'bold', color: Colors.COLOR_BLUE }} />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
