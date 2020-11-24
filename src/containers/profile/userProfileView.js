import React, { Component } from 'react'
import { View, Text, BackHandler, ScrollView, Pressable } from 'react-native'
import {
    Container, Content, Root,
} from 'native-base'
import { connect } from 'react-redux'
import { Constants } from 'values/constants';
import { Colors } from 'values/colors';
import TextInputCustom from 'components/textInputCustom';
import Header from 'components/header';
import styles from './styles';
import Button from 'components/button';
import Utils from 'utils/utils';
import commonStyles from 'styles/commonStyles';
import { Fonts } from 'values/fonts';
import ImageLoader from 'components/imageLoader';

class UserProfileView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                avatar: null,
                name: 'Obama'
            },
        };
    }

    async componentDidMount() {
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    title={"Profile"}
                    onBack={() => { }}
                />
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    style={{
                        flex: 1,
                        paddingHorizontal: Constants.PADDING_X_LARGE
                    }}>
                    {Utils.isNull(this.state.user) ? this.renderNotLogin() : this.renderInfo()}
                </ScrollView>
            </View>
        )
    }

    renderNotLogin = () => {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={commonStyles.text}>Please sign in to view your profile</Text>
                <Pressable style={styles.buttonSignIn} onPress={() => {
                    this.props.navigation.navigate("Login")
                }}>
                    <Text style={[commonStyles.text]}>SIGN IN</Text>
                </Pressable>
            </View>
        )
    }

    renderInfo = () => {
        let { user } = this.state;
        return (
            <View style={{ marginTop: Constants.MARGIN_X_LARGE }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <ImageLoader path={user.avatar} style={{ width: 70, height: 70, borderRadius: Constants.BORDER_RADIUS }} resizeModeType={'cover'} />
                    <Text style={[commonStyles.textBold, { fontSize: Fonts.FONT_SIZE_X_LARGE, flex: 1, marginHorizontal: Constants.MARGIN_X_LARGE }]}>{user.name}</Text>
                </View>
                <Text style={[commonStyles.textBold, { fontSize: Fonts.FONT_SIZE_XX_MEDIUM, marginVertical: Constants.MARGIN_XX_LARGE }]}>Activity insights (last 30 days)</Text>
                <View>
                    <Text style={[commonStyles.text, { fontSize: Fonts.FONT_SIZE_MEDIUM }]}>TOTAL ACTIVE DAYS</Text>
                    <Text style={[commonStyles.textBold, { fontSize: Fonts.FONT_SIZE_XX_MEDIUM }]}>0          <Text style={[commonStyles.textSmall, { fontWeight: 'normal' }]}>0 day streak</Text></Text>
                </View>
                <View style={{ marginTop: Constants.MARGIN_X_LARGE }}>
                    <Text style={[commonStyles.text, { fontSize: Fonts.FONT_SIZE_MEDIUM }]}>MOST ACTIVE TIME OF DAY</Text>
                    <Text style={[commonStyles.textBold, { fontSize: Fonts.FONT_SIZE_XX_MEDIUM }]}>7:00 AM</Text>
                </View>
                <View style={{ marginTop: Constants.MARGIN_X_LARGE }}>
                    <Text style={[commonStyles.text, { fontSize: Fonts.FONT_SIZE_MEDIUM }]}>MOST VIEWED SUBJECT</Text>
                    <Text style={[commonStyles.textBold, { fontSize: Fonts.FONT_SIZE_XX_MEDIUM }]}>N/A</Text>
                </View>
            </View>
        );
    };

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileView)
