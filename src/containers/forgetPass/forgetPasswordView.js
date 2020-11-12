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
import styles from '../login/styles';
import Button from 'components/button';
import commonStyles from 'styles/commonStyles';
import { Fonts } from 'values/fonts';

class ForgetPasswordView extends Component {

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

    managePasswordVisibility = () => {
        const last = this.state.password;
        this.setState({ hidePassword: !this.state.hidePassword, password: '' });
        setTimeout(() => {
            this.setState({ password: last });
        }, 0);
    };

    validateData() {
        const { email, password } = this.state;
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

    onChangeEmailOrPhone = (email) => {
        this.setState({
            email,
        });
    }

    render() {
        return (
            <Container style={styles.container}>
                <Root>
                    <Header
                        title={""}
                        onBack={() => { }}
                    />
                    <Content
                        contentContainerStyle={{ flexGrow: 1 }}
                        style={{ flexGrow: 1, backgroundColor: Colors.COLOR_BACKGROUND, paddingHorizontal: Constants.PADDING_LARGE }}>
                        <View style={{ marginHorizontal: Constants.MARGIN_X_LARGE , marginTop: Constants.MARGIN_XX_LARGE}}>
                            <Text style={{ ...commonStyles.textBold, fontSize: Fonts.FONT_SIZE_XX_LARGE }}>Forgot password</Text>
                            <Text style={{ ...commonStyles.text, width: "60%", marginTop: Constants.MARGIN_XX_LARGE }}>Enter your email address and we'll send you a link to reset your password</Text>
                        </View>
                        {this.renderForm()}
                        {this.renderButton()}
                    </Content>
                </Root>
            </Container >
        )
    }

    renderForm = () => {
        let { email, validateEmail } = this.state;
        return (
            <View style={{ marginTop: Constants.MARGIN_XX_LARGE }}>
                <TextInputCustom
                    onRef={(r) => (this.email = r)}
                    oneLine={true}
                    label={'Your email'}
                    placeholder={'Please input your email'}
                    warnLabel={validateEmail}
                    value={email}
                    onChangeText={(txt) => {
                        this.setState({ email: txt, validateEmail: null });
                    }}
                    onSubmitEditing={() => {
                        this.password.focus();
                    }}
                    returnKeyType={'next'}
                    keyboardType={'email-address'}
                    onBlur={() => {
                        this.setState({ validateEmail: null });
                    }}
                />
            </View>
        );
    };

    renderButton = () => {
        return (
            <View style={{ marginTop: Constants.MARGIN }}>
                <Button title={"SEND EMAIL"} titleStyle={{ fontWeight: 'bold', color: '#a5a5a5' }} backgroundColor={Colors.COLOR_DRK_GREY} />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordView)
