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
import Utils from 'utils/utils';
import { ErrorCode } from 'config/errorCode';
import * as userActions from 'actions/userActions'
import { ActionEvent, getActionSuccess } from 'actions/actionEvent';
import StringUtil from 'utils/stringUtil';

class RegisterView extends BaseView {

    constructor(props) {
        super(props);
        this.state = {
            hidePassword: true,
            password: '',
            validatePassword: '',
            email: '',
            validateEmail: '',
            firstName: '',
            validateFirstName: '',
            lastName: '',
            validateLastName: '',
            company: '',
            validateCompany: '',
            phone: '',
            validatePhone: '',
            country: '',
            validateCountry: '',
            rePassword: '',
            userName: '',
            user: null,
            errorSignIn: null,
        };
        this.hidePassword = true;
    }

    async componentDidMount() {
    }

    isVisiblePass = () => {
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
                if (this.props.action == getActionSuccess(ActionEvent.REGISTER)) {
                    console.log("Register data", data)
                    if (data != null) {
                        this.showMessage("Đăng ký thành công. Chúng tôi đã gửi email kích hoạt tài khoản cho bạn, vui lòng kích hoạt tài khoản để đăng nhập")
                    }
                }
            } else if (this.props.errorCode == ErrorCode.ERROR_400) {
                this.showMessage("Email hoặc số điện thoại đã được sử dụng")
            } else {
                this.handleError(this.props.errorCode, this.props.error);
            }
        }
    }

    render() {
        return (
            <Container style={styles.container}>
                <Root>
                    <Header
                        title={"SIGN UP"}
                        onBack={() => { }}
                    />
                    <Content style={{ flex: 1, backgroundColor: Colors.COLOR_BACKGROUND, paddingHorizontal: Constants.PADDING_LARGE }}>
                        {this.renderForm()}
                        {this.renderButton()}
                    </Content>
                </Root>
            </Container>
        )
    }

    validate = () => {
        const { userName, password, phone, email, rePassword } = this.state;
        if (Utils.isNull(userName)) {
            this.showMessage("Please fill your name");
            this.userName.focus();
        } else if (userName.trim() == "" || userName.trim() == null) {
            this.showMessage("Please fill your name");
            this.userName.focus();
        } else if (StringUtil.validSpecialCharacter(userName)) {
            this.showMessage('User name must not contain special character');
            this.userName.focus();
        } else if (userName.length > 60) {
            this.showMessage('User name must have less than 60 character');
            this.userName.focus();
        } else if (email == null) {
            this.showMessage('Please fill your email');
            this.email.focus()
        } else if (email.trim() == '') {
            this.showMessage('Please fill your email');
            this.email.focus()
        } else if (!Utils.validateEmail(email.trim())) {
            this.showMessage('Email not have right format');
            this.email.focus()
        } else if (Utils.isNull(phone)) {
            this.showMessage('Please fill your phone');
            this.phone.focus();
        } else if (phone.length != 10 || phone.charAt(0) != "0") {
            this.showMessage('Phone not have right format');
            this.phone.focus();
        } else if (!Utils.validatePhone(phone)) {
            this.showMessage('Phone not have right format');
            this.phone.focus();
        } else if (Utils.isNull(password)) {
            this.showMessage('Please fill your password');
            this.password.focus();
        } else if (password.length < 8) {
            this.showMessage('Password must have at least 8 character');
            this.password.focus();
        } else if (Utils.isNull(rePassword)) {
            this.showMessage('Please re-type password');
            this.rePassword.focus();
        } else if (password != rePassword) {
            this.showMessage('Password and re-password miss match');
            this.rePassword.focus();
        } else {
            let data = {
                username: this.state.userName.trim(),
                phone: this.state.phone,
                password: this.state.password,
                email: this.state.email.trim().toLowerCase(),
            };
            this.props.register(data)
        }
    }

    renderForm = () => {
        let { email, userName, phone, password, rePassword } = this.state;
        return (
            <View style={{ marginTop: Constants.MARGIN_XX_LARGE }}>
                <TextInputCustom
                    onRef={(r) => (this.userName = r)}
                    oneLine={true}
                    label={'User name *'}
                    placeholder={'Please input user name'}
                    value={userName}
                    onChangeText={(userName) => {
                        this.setState({ userName });
                    }}
                    onSubmitEditing={() => {
                        this.email.focus();
                    }}
                    keyboardType={"email-address"}
                    returnKeyType={'next'}
                />
                <TextInputCustom
                    onRef={(r) => (this.email = r)}
                    oneLine={true}
                    label={'Email *'}
                    placeholder={'Please input email'}
                    value={email}
                    onChangeText={(email) => {
                        this.setState({ email });
                    }}
                    onSubmitEditing={() => {
                        this.phone.focus();
                    }}
                    returnKeyType={'next'}
                />
                <TextInputCustom
                    onRef={(ref) => (this.phone = ref)}
                    oneLine={true}
                    label={'Phone *'}
                    placeholder={'Please input your phone'}
                    value={phone}
                    onChangeText={(phone) => {
                        this.setState({ phone });
                    }}
                    keyboardType="numeric"
                    onSubmitEditing={() => {
                        this.password.focus();
                    }}
                    returnKeyType={'next'}
                />
                <TextInputCustom
                    onRef={(ref) => (this.password = ref)}
                    oneLine={true}
                    label={'Password *'}
                    placeholder={'Please fill your password'}
                    value={password}
                    secureTextEntry={this.state.hidePassword}
                    onChangeText={(password) => {
                        this.setState({ password });
                    }}
                    onSubmitEditing={() => {
                        this.rePassword.focus()
                    }}
                    returnKeyType={'next'}
                    contentRight={this.state.hidePassword ? ic_eye_lock_grey : ic_eye_grey}
                    onPressRight={this.isVisiblePass}
                />
                <TextInputCustom
                    onRef={(ref) => (this.rePassword = ref)}
                    oneLine={true}
                    label={'Retype Password *'}
                    placeholder={'Please retype password'}
                    value={rePassword}
                    secureTextEntry={this.state.hidePassword}
                    onChangeText={(rePassword) => {
                        this.setState({ rePassword });
                    }}
                    onSubmitEditing={() => {
                        Keyboard.dismiss();
                    }}
                    returnKeyType={'done'}
                    contentRight={this.state.hidePassword ? ic_eye_lock_grey : ic_eye_grey}
                    onPressRight={this.isVisiblePass}
                />
            </View>
        );
    };

    renderButton = () => {
        return (
            <View style={{ marginTop: Constants.MARGIN }}>
                <Button
                    title={"SIGN UP"}
                    titleStyle={{ fontWeight: 'bold', color: '#a5a5a5' }}
                    backgroundColor={Colors.COLOR_DRK_GREY}
                    onPress={this.validate} />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.register.data,
    isLoading: state.register.isLoading,
    errorCode: state.register.errorCode,
    action: state.register.action,
})

const mapDispatchToProps = {
    ...userActions
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView)
