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

class RegisterView extends Component {

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

    renderForm = () => {
        let { email, firstName, lastName, phone, company, country, password, validateEmail, validatePass,
            validateFirstName, validateCompany, validateCountry,
            validateLastName, validatePhone } = this.state;
        return (
            <View style={{ marginTop: Constants.MARGIN_XX_LARGE }}>
                <TextInputCustom
                    onRef={(r) => (this.email = r)}
                    oneLine={true}
                    label={'Email *'}
                    placeholder={'Please input email'}
                    warnLabel={validateEmail}
                    value={email}
                    onChangeText={(txt) => {
                        this.setState({ email: txt, validateEmail: null });
                    }}
                    onSubmitEditing={() => {
                        this.firstName.focus();
                    }}
                    returnKeyType={'next'}
                    onBlur={() => {
                        this.setState({ validateEmail: null });
                    }}
                />
                <TextInputCustom
                    onRef={(r) => (this.firstName = r)}
                    oneLine={true}
                    label={'First name *'}
                    placeholder={'Please input fist name'}
                    warnLabel={validateFirstName}
                    value={firstName}
                    onChangeText={(txt) => {
                        this.setState({ firstName: txt, validateFirstName: null });
                    }}
                    onSubmitEditing={() => {
                        this.lastName.focus();
                    }}
                    returnKeyType={'next'}
                    onBlur={() => {
                        this.setState({ validateFirstName: null });
                    }}
                />
                <TextInputCustom
                    onRef={(ref) => (this.lastName = ref)}
                    oneLine={true}
                    label={'Last name *'}
                    warnLabel={validateLastName}
                    placeholder={'Please input last name'}
                    value={lastName}
                    onChangeText={(txt) => {
                        this.setState({ lastName: txt, validateLastName: null });
                    }}
                    onSubmitEditing={() => {
                        this.company.focus();
                    }}
                    returnKeyType={'next'}
                    onBlur={() => {
                        this.setState({ validateLastName: null });
                    }}
                />
                <TextInputCustom
                    onRef={(ref) => (this.company = ref)}
                    oneLine={true}
                    label={'Company *'}
                    warnLabel={validateCompany}
                    placeholder={'Please input your company'}
                    value={company}
                    onChangeText={(txt) => {
                        this.setState({ company: txt, validateCompany: null });
                    }}
                    onSubmitEditing={() => {
                        this.phone.focus();
                    }}
                    returnKeyType={'next'}
                    onBlur={() => {
                        this.setState({ validateCompany: null });
                    }}
                />
                <TextInputCustom
                    onRef={(ref) => (this.phone = ref)}
                    oneLine={true}
                    label={'Phone *'}
                    warnLabel={validatePhone}
                    placeholder={'Please input your phone'}
                    value={phone}
                    onChangeText={(txt) => {
                        this.setState({ phone: txt, validatePhone: null });
                    }}
                    onSubmitEditing={() => {
                        this.country.focus();
                    }}
                    returnKeyType={'next'}
                    onBlur={() => {
                        this.setState({ validatePhone: null });
                    }}
                />
                <TextInputCustom
                    onRef={(ref) => (this.phone = ref)}
                    oneLine={true}
                    label={'Country *'}
                    warnLabel={validateCountry}
                    placeholder={'Please input your country'}
                    value={country}
                    onChangeText={(txt) => {
                        this.setState({ country: txt, validateCountry: null });
                    }}
                    onSubmitEditing={() => {
                        this.country.focus();
                    }}
                    returnKeyType={'next'}
                    onBlur={() => {
                        this.setState({ validateCountry: null });
                    }}
                />
            </View>
        );
    };

    renderButton = () => {
        return (
            <View style={{ marginTop: Constants.MARGIN }}>
                <Button title={"SIGN UP"} titleStyle={{ fontWeight: 'bold', color: '#a5a5a5' }} backgroundColor={Colors.COLOR_DRK_GREY} />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView)
