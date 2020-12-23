import React, { Component } from 'react'
import { View, Text, BackHandler, StatusBar } from 'react-native'
import {
    Container, Content, Root,
} from 'native-base'
import { connect } from 'react-redux'
import { Constants } from 'values/constants';
import { Colors } from 'values/colors';
import * as userActions from 'actions/userActions';
import TextInputCustom from 'components/textInputCustom';
import Header from 'components/header';
import ic_eye_grey from 'images/ic_eye_grey.png';
import ic_eye_lock_grey from 'images/ic_eye_lock_grey.png';
import styles from './styles';
import Button from 'components/button';
import BaseView from 'containers/base/baseView';
import StorageUtil from 'utils/storageUtil';
import Utils from 'utils/utils';
import { ActionEvent, getActionSuccess } from 'actions/actionEvent';
import { ErrorCode } from 'config/errorCode';

class LoginView extends BaseView {

    constructor(props) {
        super(props);
        this.state = {
            hidePassword: true,
            password: '',
            email: '',
            user: null,
            errorSignIn: null,
        };
        this.hidePassword = true;
    }

    async componentDidMount() {
    }


    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.props = nextProps;
            this.handleData();
        }
    }

    handleData = () => {
        let data = this.props.data;
        if (this.props.errorCode != ErrorCode.ERROR_INIT) {
            if (this.props.errorCode == ErrorCode.ERROR_SUCCESS) {
                if (this.props.action == getActionSuccess(ActionEvent.LOGIN)) {
                    console.log("Data login", data)
                    if (data != null) {
                        StorageUtil.storeItem(StorageUtil.USER_PROFILE, data.userInfo);
                        StorageUtil.storeItem(StorageUtil.USER_TOKEN, data.token);
                        global.token = data.token;
                        if (this.props.route.params && this.props.route.params.fromScreen) {
                            this.props.navigation.pop(2)
                            setTimeout(() => { this.props.navigation.navigate(this.props.route.params.fromScreen, this.props.route.params.param.id && { id: this.props.route.params.param.id }) })
                        } else {
                            this.goHomeScreen()
                        }
                    }
                }
            } else if (this.props.errorCode == ErrorCode.ERROR_400) {
                this.showMessage("Email hoặc mật khẩu không hợp lệ hoặc chưa kích hoạt tài khoản")
            } else {
                this.handleError(this.props.errorCode, this.props.error);
            }
        }
    }


    managePasswordVisibility = () => {
        const last = this.state.password;
        this.setState({ hidePassword: !this.state.hidePassword, password: '' });
        setTimeout(() => {
            this.setState({ password: last });
        }, 0);
    };

    validateData() {
        const { email, password } = this.state;
        if (email == null) {
            this.showMessage("Please fill your email");
            this.email.focus()
            return false;
        } else if (email.trim() == '') {
            this.showMessage("Please fill your email");
            this.email.focus()
            return false;
        } else if (!Utils.validateEmail(email.trim())) {
            this.showMessage("Please fill right email format");
            this.email.focus()
            return false;
        } else if (Utils.isNull(password)) {
            this.showMessage("Please fill password");
            this.password.focus();
            return false;
        }
        return true;
    }

    onChangePassword = (password) => {
        this.setState({
            password,
        });
    }

    onChangeEmailOrPhone = (email) => {
        this.setState({
            email,
        });
    }

    login = async () => {
        let { email, password } = this.state
        if (this.validateData()) {
            let user = {
                email: email,
                password: password
            }
            this.props.login(user)
        }
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
                <StatusBar translucent={false} backgroundColor='black' />
                {this.showLoadingBar(this.props.isLoading)}
            </View>
        )
    }

    renderForm = () => {
        let { email, password, validateEmail, validatePass } = this.state;
        return (
            <View style={{ marginTop: Constants.MARGIN_XX_LARGE }}>
                <TextInputCustom
                    onRef={(r) => (this.email = r)}
                    oneLine={true}
                    label={'Email'}
                    placeholder={'Email'}
                    warnLabel={validateEmail}
                    value={email}
                    onChangeText={(txt) => {
                        this.setState({ email: txt, validateEmail: null });
                    }}
                    onSubmitEditing={() => {
                        this.password.focus();
                    }}
                    keyboardType={"email-address"}
                    returnKeyType={'next'}
                    onBlur={() => {
                        this.setState({ validateEmail: null });
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
    data: state.login.data,
    isLoading: state.login.isLoading,
    errorCode: state.login.errorCode,
    action: state.login.action,
})

const mapDispatchToProps = {
    ...userActions
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
