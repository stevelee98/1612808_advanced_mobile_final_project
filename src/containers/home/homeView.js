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
import ItemCourse from 'containers/courses/list/itemCourse';
import img_iron_man from 'images/img_iron_man.jpg';
import * as userActions from 'actions/userActions';
import * as courseActions from 'actions/courseActions';
import { ActionEvent, getActionSuccess } from 'actions/actionEvent';
import BaseView from 'containers/base/baseView';
import StorageUtil from 'utils/storageUtil';
import crashlytics from '@react-native-firebase/crashlytics';
import ItemCourseWatching from 'containers/courses/list/watching/itemCourseWatching';
import categoryId from 'enum/categoryId';

console.disableYellowBox = true;
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
export class HomeView extends BaseView {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            refreshing: false
        }
        this.data = [
            {
                title: 'Software Development', data: [
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                ]
            },
            {
                title: 'Software Development', data: [
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                    {
                        resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                        title: "React-native: from zero to hero",
                        arthur: "Mark Zuckerberg",
                        level: "Beginner",
                        createdAt: 'Feb 2020',
                        long: '3h 45m',
                        rating: { star: 4, count: 512 }
                    },
                ]
            }
        ];

        this.filterGetCourseTopRate = {
            page: 1,
            limit: Constants.PAGE_SIZE
        }
        this.filterGetCourseTopSell = {
            page: 1,
            limit: Constants.PAGE_SIZE
        }
        this.courseTopRate = []
        this.courseTopSell = []
        this.courseWatching = []
    }

    componentDidMount() {
        super.componentDidMount()
        console.log("global token: ", global.token)
        this.getProfile()
        this.getCourseTopRate();
        setTimeout(() => { this.getCourseTopSell() })
    }

    getProfile = async () => {
        let user = await StorageUtil.retrieveItem(StorageUtil.USER_PROFILE);
        if (user) {
            this.getCourseWatching()
            this.props.getProfile();
            this.setState(user)
        }
    }

    handleGetProfile = (user) => {
        this.setState(user)
    }

    componentDidUpdate(prevProps, prevState) {

    }

    getCourseTopSell = () => {
        this.props.getCourseTopSell(this.filterGetCourseTopSell);
    }

    getCourseTopRate = () => {
        this.props.getCourseTopRate(this.filterGetCourseTopRate);
    }

    getCourseWatching = () => {
        this.props.getCourseWatching()
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.props = nextProps;
            this.handleData();
        }
    }

    handleRefresh = async () => {
        if (this.state.user) {
            this.state.refreshing = true
            let user = await StorageUtil.retrieveItem(StorageUtil.USER_PROFILE);
            if (user) {
                this.state.user = user
                this.getCourseWatching()
                this.props.getProfile();
                this.getCourseTopRate();
                setTimeout(() => { this.getCourseTopSell() })
            }
        }
    }

    handleData = () => {
        let data = this.props.data;
        if (this.props.errorCode != ErrorCode.ERROR_INIT) {
            if (this.props.errorCode == ErrorCode.ERROR_SUCCESS) {
                if (this.props.action == getActionSuccess(ActionEvent.GET_PROFILE)) {
                    if (data != null && data.payload != null) {
                        console.log("GET_PROFILE data", data.payload)
                        this.state.user = data.payload
                    } else {
                        this.logout()
                    }
                }
                if (this.props.action == getActionSuccess(ActionEvent.GET_COURSE_TOP_RATE)) {
                    console.log("GET_COURSE_TOP_RATE data home", data)
                    if (data.data && data.data.payload) {
                        this.courseTopRate = data.data.payload
                    }
                }
                if (this.props.action == getActionSuccess(ActionEvent.GET_COURSE_TOP_SELL)) {
                    console.log("GET_COURSE_TOP_SELL data home", data)
                    if (data.data && data.data.payload) {
                        this.courseTopSell = data.data.payload
                    }
                }
                if (this.props.action == getActionSuccess(ActionEvent.GET_COURSE_WATCHING)) {
                    console.log("GET_COURSE_WATCHING data home", data)
                    if (data.data && data.data.payload) {
                        this.courseWatching = data.data.payload
                    }
                }
                this.state.refreshing = false
            } else {
                this.handleError(this.props.errorCode, this.props.error);
            }
        }
    }

    renderNotLogin = () => {
        return (
            <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[commonStyles.text, { fontSize: Fonts.FONT_SIZE_LARGE }]}>Let's get you started</Text>
                <Pressable style={{ marginTop: Constants.MARGIN_XX_LARGE * 2, alignItems: 'center' }} onPress={() => { this.props.navigation.navigate('Browser') }}>
                    <Image source={ic_grid_white} />
                    <Text style={[commonStyles.text, { marginTop: Constants.MARGIN_LARGE }]}>Browser new and popular course</Text>
                </Pressable>
                <Pressable style={{ marginTop: Constants.MARGIN_X_LARGE * 3, alignItems: 'center' }} onPress={() => { this.props.navigation.navigate('Search') }}>
                    <Image source={ic_search_white} />
                    <Text style={[commonStyles.text, { marginTop: Constants.MARGIN_LARGE }]}>Search the library</Text>
                </Pressable>
            </View>
        )
    }

    renderListCourses = () => {
        return (
            <View>
                <View style={{ marginBottom: Constants.MARGIN_X_LARGE }}>
                    <Image source={img_iron_man} style={{ width: 120, height: 150, alignSelf: 'flex-end' }} resizeMode={'contain'} />
                    <View style={{ position: 'absolute', bottom: 20, left: 16 }}>
                        <Text style={{ ...commonStyles.text, fontSize: Fonts.FONT_SIZE_MEDIUM }}>Welcome to VietStudy !</Text>
                        <Text style={{ ...commonStyles.text, fontSize: Fonts.FONT_SIZE_MEDIUM, marginTop: 20, width: Constants.MAX_WIDTH * 0.8 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                    </View>
                </View>
                {this.courseWatching.length > 0 && this.renderListCourseWatching()}
                {this.renderList('Khóa học được đánh giá cao', this.courseTopRate, categoryId.TOP_RATE)}
                {this.renderList('Khóa học bán chạy nhất', this.courseTopSell, categoryId.TOP_SELL)}
            </View>
        )
    }

    renderList = (title, data, id) => {
        return (
            <View>
                <View style={styles.titleList}>
                    <Text style={[commonStyles.text, { fontSize: Fonts.FONT_SIZE_LARGE }]}>{title}</Text>
                    <Pressable
                        android_ripple={Constants.ANDROID_RIPPLE}
                        style={{}}
                        onPress={() => this.props.navigation.navigate('CourseList', { categoryId: id, categoryTitle: title })}>
                        <Text style={[commonStyles.textSmall]}>{'See all >'}</Text>
                    </Pressable>
                </View>
                <FlatListCustom
                    onRef={(ref) => { this.flatListRef = ref }}
                    contentContainerStyle={{
                    }}
                    style={{
                    }}
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    isShowEmpty={data.length == 0}
                    isShowImageEmpty={true}
                    textForEmpty={""}
                />
            </View>
        )
    }

    renderListCourseWatching = () => {
        return (
            <View>
                <View style={styles.titleList}>
                    <Text style={[commonStyles.text, { fontSize: Fonts.FONT_SIZE_LARGE }]}>Đang học</Text>
                    <Pressable
                        android_ripple={Constants.ANDROID_RIPPLE}
                        style={{}}
                        onPress={() => this.props.navigation.navigate('WatchingList')}>
                        <Text style={[commonStyles.textSmall]}>{'See all >'}</Text>
                    </Pressable>
                </View>
                <FlatListCustom
                    onRef={(ref) => { this.flatListRef = ref }} 
                    contentContainerStyle={{
                    }}
                    style={{
                    }}
                    data={this.courseWatching}
                    renderItem={this.renderItemCourseWatching}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    isShowEmpty={this.courseWatching.length == 0}
                    isShowImageEmpty={true}
                    textForEmpty={""}
                />
            </View>
        )
    }

    renderItem = (item, index, data) => {
        return (
            <ItemCourse
                key={index}
                index={index}
                item={item}
                horizontal={true}
                length={data.length}
                onPress={(item) => this.props.navigation.navigate("CourseDetail", { id: item.id })}
            />
        )
    }

    renderItemCourseWatching = (item, index) => {
        return (
            <ItemCourseWatching
                key={index}
                index={index}
                item={item}
                horizontal={true}
                length={this.courseWatching.length}
                onPress={(item) => this.props.navigation.navigate("CourseDetail", { id: item.id })}
            />
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    title={"Home"}
                    visibleBack={false}
                    visibleAccount={true}
                    user={this.state.user}
                    visibleMenu={true}
                    menus={LIST_MENU}
                    onPressAccount={() => { this.props.navigation.navigate('UserProfile') }}
                    navigation={this.props.navigation}
                />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            progressViewOffset={Constants.HEIGHT_HEADER_OFFSET_REFRESH}
                            refreshing={this.state.refreshing}
                            onRefresh={this.handleRefresh}
                        />
                    }
                    contentContainerStyle={{ flexGrow: 1 }}>
                    {Utils.isNull(this.state.user) ? this.renderNotLogin() : this.renderListCourses()}
                </ScrollView>
                {!this.state.refreshing && this.showLoadingBar(this.props.isLoading)}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.home.data,
    isLoading: state.home.isLoading,
    errorCode: state.home.errorCode,
    action: state.home.action,
})

const mapDispatchToProps = {
    ...userActions,
    ...courseActions
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
