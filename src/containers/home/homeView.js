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

const LIST_MENU = [
    {
        name: 'Profile',
        screen: 'UserProfile',
        value: 1
    },
    {
        name: 'Setting',
        screen: null,
        value: 2
    }
]
export class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    renderNotLogin = () => {
        return (
            <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[commonStyles.text, { fontSize: Fonts.FONT_SIZE_LARGE }]}>Let's get you started</Text>
                <View style={{ marginTop: Constants.MARGIN_XX_LARGE * 2, alignItems: 'center' }}>
                    <Image source={ic_grid_white} />
                    <Text style={[commonStyles.text, { marginTop: Constants.MARGIN_LARGE }]}>Browser new and popular course</Text>
                </View>
                <View style={{ marginTop: Constants.MARGIN_X_LARGE * 3, alignItems: 'center' }}>
                    <Image source={ic_search_white} />
                    <Text style={[commonStyles.text, { marginTop: Constants.MARGIN_LARGE }]}>Search the library</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    title={"Home"}
                    visibleBack={false}
                    visibleAccount={true}
                    user={{ name: 'abc', avatar: null }}
                    onBack={() => { }}
                    visibleMenu={true}
                    menus={LIST_MENU}
                    navigation={this.props.navigation}
                />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {Utils.isNull(this.state.user) && this.renderNotLogin()}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
