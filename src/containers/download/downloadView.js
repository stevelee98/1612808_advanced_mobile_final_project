import React, { Component } from 'react'
import { View, Text, ScrollView, Image, Pressable, RefreshControl } from 'react-native'
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
import { Colors } from 'values/colors';
import ic_search_white from 'images/ic_search_white.png';
import ic_grid_white from 'images/ic_grid_white.png';
import img_iron_man from 'images/img_iron_man.jpg';
import img_download from 'images/img_download.png';
import img_download_guide_1 from 'images/img_download_guide_1.jpg';
import img_download_guide_2 from 'images/img_download_guide_2.jpg';
import Button from 'components/button';
import * as userActions from 'actions/userActions'
import * as courseActions from 'actions/courseActions'
import { ActionEvent, getActionSuccess } from 'actions/actionEvent';
import BaseView from 'containers/base/baseView';
import ItemCourseSave from './itemCourseSave'
import StorageUtil from 'utils/storageUtil';

const LIST_MENU = [
    {
        name: 'Profile',
        screen: 'UserProfile',
        value: 1
    },
    {
        name: 'Setting',
        screen: 'Setting',
        value: 2
    }
]
export class DownloadView extends BaseView {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            enableLoadMore: false,
            enableRefresh: true,
            refreshing: false
        }
        this.data = []
    }

    componentDidMount = () => {
        this.getProfile()
    }

    getProfile = async () => {
        let user = await StorageUtil.retrieveItem(StorageUtil.USER_PROFILE);
        if (user) {
            this.setState({ user: user })
            this.props.getCourseSave()
        }
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
                if (this.props.action == getActionSuccess(ActionEvent.GET_COURSE_SAVE)) {
                    console.log("GET_COURSE_SAVE data", data)
                    if (data.data && data.data.payload) {
                        let payload = data.data.payload
                        if (payload.length > 0) {
                            this.state.enableLoadMore = !(payload.length < Constants.PAGE_SIZE)
                            payload.forEach(element => {
                                this.data.push({ ...element })
                            });
                            this.showNoData = false
                        } else {
                            this.state.enableLoadMore = false
                            this.showNoData = true;
                        }
                    } else {
                        this.state.enableLoadMore = false
                        this.showNoData = true;
                    }
                }
                this.state.refreshing = false
                this.state.isLoadingMore = false
            } else {
                this.handleError(this.props.errorCode, this.props.error);
            }
        }
    }

    onPress = (item) => {
        this.props.navigation.navigate("CourseDetail", { id: item.id })
    }

    /**
     * Render item
     * @param {*} item
     * @param {*} index
     */
    renderItem = (item, index) => {
        return (
            <ItemCourseSave
                key={index}
                item={item}
                length={this.data.length}
                onPress={this.onPress}
            />
        )
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

    renderListCourses = () => {
        return (
            <View>
                <View style={{ marginBottom: Constants.MARGIN_X_LARGE }}>
                    <Image source={img_iron_man} style={{ width: 120, height: 150, alignSelf: 'flex-end' }} resizeMode={'contain'} />
                    <View style={{ position: 'absolute', bottom: 20, left: 16 }}>
                        <Text style={{ ...commonStyles.text, fontSize: Fonts.FONT_SIZE_MEDIUM }}>Welcome to Pluralsight !</Text>
                        <Text style={{ ...commonStyles.text, fontSize: Fonts.FONT_SIZE_MEDIUM, marginTop: 20, width: Constants.MAX_WIDTH * 0.8 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                    </View>
                </View>
            </View>
        )
    }

    renderList = () => {
        return (
            <FlatListCustom
                onRef={(ref) => { this.flatListRef = ref }}
                contentContainerStyle={{
                    marginHorizontal: Constants.MARGIN_LARGE,
                    flexGrow: 1
                }}
                style={{
                    flex: 1
                }}
                data={this.data}
                renderItem={this.renderItem}
                enableLoadMore={this.state.enableLoadMore}
                keyExtractor={item => item.id}
                onLoadMore={() => { this.onLoadMore() }}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        progressViewOffset={Constants.HEIGHT_HEADER_OFFSET_REFRESH}
                        refreshing={this.state.refreshing}
                        onRefresh={this.handleRefresh}
                    />
                }
                isShowEmpty={!this.props.isLoading && this.data == []}
                isShowImageEmpty={true}
                textForEmpty={''}
            />
        )
    }

    renderHeaderDownload = () => {
        return (
            <View>
                <View style={styles.viewHeaderDownload}>
                    <Image source={img_download} style={styles.imgDownload} />
                    <Text style={styles.titleDownload}>Watch your courses save on the go!</Text>
                    <Text style={styles.txtContentDownload}>Save courses so you can continue to skill up-even when you're offline</Text>
                </View>
                {this.state.user ? <Button
                    onPress={() => { this.props.navigation.navigate("Search") }}
                    title={"FIND A COURSE TO DOWNLOAD"}
                    titleStyle={{ fontWeight: 'bold', color: Colors.COLOR_WHITE }}
                    backgroundColor={Colors.COLOR_PRIMARY} /> :
                    <Button
                        onPress={() => { this.props.navigation.navigate("Login") }}
                        title={"LOGIN OR REGISTER TO SAVE COURSE"}
                        titleStyle={{ fontWeight: 'bold', color: Colors.COLOR_WHITE }}
                        backgroundColor={Colors.COLOR_PRIMARY}
                    />}
            </View>
        )
    }

    renderDownloadGuide = () => {
        return (
            <View style={styles.viewHowTo}>
                <Text style={styles.txtHowTo}>How to save course</Text>
                <View style={styles.viewDownloadGuide}>
                    <Image source={img_download_guide_1} style={styles.imgDownloadGuide} />
                    <Image source={img_download_guide_2} style={styles.imgDownloadGuide} />
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    title={"Downloads"}
                    visibleBack={false}
                    visibleAccount={true}
                    user={{ name: 'abc', avatar: null }}
                    onBack={() => { }}
                    visibleMenu={true}
                    menus={LIST_MENU}
                    navigation={this.props.navigation}
                />
                {this.data.length == 0 && <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    refreshControl={
                        <RefreshControl
                            progressViewOffset={Constants.HEIGHT_HEADER_OFFSET_REFRESH}
                            refreshing={this.state.refreshing}
                            onRefresh={this.handleRefresh}
                        />
                    }>
                    {this.renderHeaderDownload()}
                    {this.renderDownloadGuide()}
                </ScrollView>}
                {this.data.length > 0 && this.renderList()}
                {this.showLoadingBar(this.props.isLoading)}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.download.data,
    isLoading: state.download.isLoading,
    errorCode: state.download.errorCode,
    action: state.download.action,
})

const mapDispatchToProps = {
    ...userActions,
    ...courseActions
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadView)
