import React, { Component } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { ErrorCode } from "config/errorCode";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import FlatListCustom from "components/flatListCustom";
import styles from './styles';
import { Container, Content } from 'native-base';
import Header from 'components/header';
import Utils from 'utils/utils';
import commonStyles from 'styles/commonStyles';
import { Constants } from 'values/constants';
import { Fonts } from 'values/fonts';
import ic_search_white from 'images/ic_search_white.png';
import ic_grid_white from 'images/ic_grid_white.png';
import ItemSetting from './itemSetting';
import { Colors } from 'values/colors';
import Button from 'components/button';
import BaseView from 'containers/base/baseView';

export class SettingView extends BaseView {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
        this.list = [
            { title: 'Account' },
            { title: 'Subscription', subTitle: 'Free Pluralsight IQ (Limited Library) (Free)' },
            { title: 'Communication Preferences' },
            { title: 'Default caption language', subTitle: 'English' },
            { title: 'Require wi-fi for streaming', toggle: true },
            { title: 'Require wi-fi for downloading', toggle: true },
            { title: 'Show quiz at the end of video', toggle: true },
            { title: 'Download location', subTitle: 'Default location (7.63 GB free of 108.78 GB)' },
            { title: 'Recommended content push notifications', subTitle: 'Receive notification about recommended content', toggle: true },
            { title: 'Recommender to learn notifications', subTitle: 'Schedule the app to remind you to learn to skill up faster and conquer your goals', toggle: true },
            { title: 'Captions' },
            { title: 'Notifications' },
            { title: 'Advance Options' },
            { title: 'App version', subTitle: '2.39.0' },
        ]
    }

    componentDidMount = async () => {
        let user = await this.getProfile();
        this.setState({ user })
    }

    componentDidUpdate(prevProps, prevState) {

    }

    renderNotLogin = () => {
        return (
            <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
            </View>
        )
    }

    /**
     * Render item
     * @param {*} item
     * @param {*} index
     */
    renderItem = (item, index) => {
        return <ItemSetting
            key={index}
            item={item}
            index={index}
            length={this.list.length}
        />
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    title={"Setting"}
                    onBack={() => { }}
                />
                <FlatListCustom
                    onRef={(ref) => { this.flatListRef = ref }}
                    contentContainerStyle={{
                    }}
                    data={this.list}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.title}
                    showsHorizontalScrollIndicator={false}
                    footerComponent={() => {
                        if (this.state.user) {
                            return (
                                <Button
                                    onPress={() => { this.logout(); this.goHomeScreen();this.showMessage("Logout success") }}
                                    title={"SING OUT"}
                                    titleStyle={{ color: Colors.COLOR_BLUE }}
                                    style={{ marginTop: Constants.MARGIN_X_LARGE }}
                                    border={{
                                        borderRadius: Constants.CORNER_RADIUS,
                                        borderWidth: 1,
                                        borderColor: Colors.COLOR_BLUE
                                    }} />
                            )
                        } else {
                            return null
                        }
                    }}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SettingView)
