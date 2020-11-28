import React, { Component } from 'react'
import { View, Text, BackHandler, Image, Pressable, ScrollView, StatusBar } from 'react-native';
import {
    Container, Content, Root
} from "native-base";
import { connect } from 'react-redux';
import { ErrorCode } from "config/errorCode";
import StringUtil from "utils/stringUtil";
import commonStyles from "styles/commonStyles";
import { Fonts } from "values/fonts";
import { Constants } from "values/constants";
import { Colors } from "values/colors";
import Utils from "utils/utils";
import StorageUtil from "utils/storageUtil";
import FlatListCustom from "components/flatListCustom";
import styles from "./styles";
import Header from 'components/header'
import ItemCourse from '../list/itemCourse';
import BaseView from 'containers/base/baseView';
import ImageLoader from 'components/imageLoader';
import ic_back_white from 'images/ic_back_white.png';
import { Rating, AirbnbRating } from 'react-native-ratings';
import ic_download_white from 'images/ic_download_white.png';
import ic_book_mark from 'images/ic_book_mark.png';
import ic_online from 'images/ic_online.png';
import ic_dropdown_white from 'images/ic_dropdown_white.png';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ic_menu_vertical from 'images/ic_menu_vertical.png';

class CourseDetailView extends BaseView {

    constructor(props) {
        super(props)
        this.state = {
            user: null,
            enableLoadMore: false,
            enableRefresh: true,
            refreshing: false,
            resource: null,
            viewDescription: false,
            enableScrollViewScroll: true,
            tabActive: 0,
            chapPlaying: { chap: 0, session: 0 },
        }
        this.data = [
            {
                resource: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg",
                title: "React-native: from zero to hero",
                arthur: "Mark Zuckerberg",
                level: "Beginner",
                createdAt: 'Feb 2020',
                long: '3h 45m',
                rating: { star: 4, count: 512 },
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
        ]
        this.course = {
            id: 1,
            title: 'Software Development',
            arthur: [
                { name: 'Mark Zuckerberg', avatar: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                { name: 'Mark Zuckerberg', avatar: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
            ],
            level: 'Beginner',
            createdAt: 'Feb 2020',
            long: '3h 45m',
            rating: { star: 4, count: 512 },
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        this.listLesson = [
            {
                title: 'Overview', session: 1, duration: '48m50',
                listChap: [
                    { title: 'Getting started', learned: true, duration: '1m40', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                ]
            },
            {
                title: 'Keep Concept and core service', session: 2, duration: '48m50',
                listChap: [
                    { title: 'What we will cover', learned: true, duration: '2m20', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'Audit Logging with cloudtrail', learned: true, duration: '4m09', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'What we will cover', learned: false, duration: '2m20', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'Audit Logging with cloudtrail', learned: false, duration: '4m09', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'What we will cover', learned: false, duration: '2m20', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'Audit Logging with cloudtrail', learned: false, duration: '4m09', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'What we will cover', learned: false, duration: '2m20', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'Audit Logging with cloudtrail', learned: false, duration: '4m09', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                ]
            },
            {
                title: 'Keep Concept and core service', session: 3, duration: '10m50',
                listChap: [
                    { title: 'What we will cover', learned: false, duration: '2m20', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'Audit Logging with cloudtrail', learned: false, duration: '4m09', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'What we will cover', learned: false, duration: '2m20', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'Audit Logging with cloudtrail', learned: false, duration: '4m09', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'What we will cover', learned: false, duration: '2m20', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'Audit Logging with cloudtrail', learned: false, duration: '4m09', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'What we will cover', learned: false, duration: '2m20', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'Audit Logging with cloudtrail', learned: false, duration: '4m09', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                ]
            },
            {
                title: 'Keep Concept and core service', session: 4, duration: '8m50',
                listChap: [
                    { title: 'What we will cover', learned: false, duration: '2m20', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'Audit Logging with cloudtrail', learned: false, duration: '4m09', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'What we will cover', learned: false, duration: '2m20', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'Audit Logging with cloudtrail', learned: false, duration: '4m09', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'What we will cover', learned: false, duration: '2m20', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'Audit Logging with cloudtrail', learned: false, duration: '4m09', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'What we will cover', learned: false, duration: '2m20', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                    { title: 'Audit Logging with cloudtrail', learned: false, duration: '4m09', source: "https://vnappmob.sgp1.digitaloceanspaces.com/soro/lolivi/1536111242-A32995B2-43FF-4AF3-9C5C-15C54AE4921E.jpg" },
                ]
            },
        ]
    }

    componentDidMount = () => {
        this.setState({ resource: this.listLesson[0].listChap[0].source })
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props !== nextProps) {
            this.props = nextProps;
        }
    }

    onPressItem = (id) => {
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Pressable
                    onPress={this.onBack}
                    android_ripple={Constants.ANDROID_RIPPLE}
                    style={styles.btnBack}>
                    <Image source={ic_back_white} style={{}} />
                </Pressable>
                <ImageLoader path={this.state.resource} resizeModeType={'cover'} style={styles.courseResource} />
                <ScrollView style={styles.viewInfo}>
                    {this.renderCourseInfo()}
                    {this.renderButton()}
                    {this.renderDescription()}
                    {this.renderButtonBottom()}
                    <View style={{ backgroundColor: Colors.COLOR_BLACK }}>
                        {this.renderTabs()}
                    </View>
                </ScrollView>
                <StatusBar translucent backgroundColor='transparent' />
            </View>
        )
    }

    renderCourseInfo = () => {
        return (
            <View style={{ padding: Constants.PADDING_X_LARGE }}>
                <Text style={[commonStyles.text, { fontSize: Fonts.FONT_SIZE_X_LARGE }]}>{this.course.title}</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {this.course.arthur && this.course.arthur.map((item, index) => {
                        return (
                            <Pressable
                                key={index}
                                style={styles.arthur}
                            >
                                <ImageLoader path={item.avatar} resizeModeType={'cover'} style={styles.avtArthur} />
                                <Text numberOfLines={1} style={styles.nameArthur}>{item.name}</Text>
                            </Pressable>
                        )
                    })}
                </View>
                <View style={styles.viewCat}>
                    <Text style={[commonStyles.textSmall, { marginTop: Constants.MARGIN_LARGE }]}>
                        {this.course.level}  <Text style={{ ...commonStyles.textSmallBold }}>{'\u0387'}</Text>  {this.course.createdAt}  <Text style={{ ...commonStyles.textSmallBold }}>{'\u0387'} </Text> {this.course.long}
                    </Text>
                    <View style={styles.viewRating}>
                        <AirbnbRating
                            count={5}
                            showRating={false}
                            isDisabled={true}
                            defaultRating={2.5}
                            size={10}
                        />
                        <Text style={commonStyles.textSmall}>(403)</Text>
                    </View>
                </View>
            </View>
        )
    }

    renderButton = () => {
        return (
            <View style={styles.viewBtn}>
                <Pressable
                    android_ripple={Constants.ANDROID_RIPPLE}
                    style={styles.btnAction}>
                    <View style={styles.imgBtnAction}>
                        <Image source={ic_book_mark} />
                    </View>
                    <Text style={commonStyles.text}>Bookmark</Text>
                </Pressable>
                <Pressable
                    android_ripple={Constants.ANDROID_RIPPLE}
                    style={styles.btnAction}>
                    <View style={styles.imgBtnAction}>
                        <Image source={ic_online} />
                    </View>
                    <Text style={commonStyles.text}>Add to chanel</Text>
                </Pressable>
                <Pressable
                    android_ripple={Constants.ANDROID_RIPPLE}
                    style={styles.btnAction}>
                    <View style={styles.imgBtnAction}>
                        <Image source={ic_download_white} />
                    </View>
                    <Text style={commonStyles.text}>Download</Text>
                </Pressable>
            </View>
        )
    }

    renderDescription = () => {
        return (
            <View style={styles.viewDes}>
                <Text numberOfLines={this.state.viewDescription ? null : 3}
                    style={styles.txtDes}>
                    {this.course.description}
                </Text>
                <View style={styles.btnDescription}>
                    <Pressable
                        onPress={() => { this.setState({ viewDescription: !this.state.viewDescription }) }}
                        android_ripple={Constants.ANDROID_RIPPLE}
                    >
                        <Image source={ic_dropdown_white} style={{
                            transform: [
                                {
                                    rotate: this.state.viewDescription ?
                                        '-180deg' : '0deg'
                                }
                            ]
                        }} />
                    </Pressable>
                </View>
            </View>
        )
    }

    renderButtonBottom = () => {
        return (
            <View style={{ paddingHorizontal: Constants.PADDING_X_LARGE }}>
                <Pressable android_ripple={Constants.ANDROID_RIPPLE} style={styles.btnAction2}>
                    <Image source={ic_download_white} />
                    <Text style={commonStyles.text}>Take a learning check</Text>
                </Pressable>
                <Pressable android_ripple={Constants.ANDROID_RIPPLE} style={styles.btnAction2}>
                    <Image source={ic_download_white} />
                    <Text style={commonStyles.text}>View related paths and course</Text>
                </Pressable>
            </View>

        )
    }

    renderTabs = () => {
        let { tabActive } = this.state;
        return (
            <View style={styles.bottom}>
                <View style={styles.tabView}>
                    <Pressable
                        onPress={() => { this.onChangeTab(0) }}
                        android_ripple={Constants.ANDROID_RIPPLE}
                        style={[styles.tab, { borderBottomColor: tabActive == 0 ? Colors.COLOR_PRIMARY : 'transparent' }]}>
                        <Text style={{ ...commonStyles.text, flex: 1 }}>CONTENT</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => { this.onChangeTab(1) }}
                        android_ripple={Constants.ANDROID_RIPPLE}
                        style={[styles.tab, { borderBottomColor: tabActive == 1 ? Colors.COLOR_PRIMARY : 'transparent' }]}>
                        <Text style={{ ...commonStyles.text, flex: 1 }}>TRANSCRIPT</Text>
                    </Pressable>
                </View>
                {this.renderListSession()}
                {this.renderTranscript()}
            </View>
        )
    }

    onChangeTab = (tab) => {
        this.setState({ tabActive: tab })
    }

    renderListSession = () => {
        return (
            this.state.tabActive == 0 && <FlatListCustom
                onRef={(ref) => { this.flatListRef = ref }}
                contentContainerStyle={{
                    flexGrow: 1,
                    marginHorizontal: Constants.MARGIN_X_LARGE
                }}
                style={{
                    flex: 1,
                }}
                data={this.listLesson}
                renderItem={this.renderItem}
                enableLoadMore={this.state.enableLoadMore}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                isShowEmpty={this.data == 0}
                isShowImageEmpty={true}
                textForEmpty={""}
                nestedScrollEnabled
            />
        )
    }

    renderTranscript = () => {
        return (
            this.state.tabActive == 1 && <View style={{ flex: 1, padding: Constants.PADDING_X_LARGE }}>
                <Text style={commonStyles.text}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    {'\n'}{'\n'}
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </Text>
            </View>
        )
    }

    /**
     * Render item
     * @param {*} item
     * @param {*} index
     */
    renderItem = (item, index) => {
        return (
            <View>
                <View style={styles.itemSession}>
                    <View style={styles.sessionNum}>
                        <Text style={commonStyles.text}>{item.session}</Text>
                    </View>
                    <View style={styles.sessionInfo}>
                        <Text style={styles.sessionTitle}>{item.title}</Text>
                        <Text style={styles.sessionDuration}>{item.duration}</Text>
                    </View>
                    <Image source={ic_menu_vertical} />
                </View>
                <FlatListCustom
                    onRef={(ref) => { this.flatListChap = ref }}
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}
                    data={item.listChap}
                    renderItem={this.renderItemChap}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    isShowEmpty={item.listChap == null || item.listChap.length == 0}
                    isShowImageEmpty={true}
                    textForEmpty={""}
                />
            </View>
        )
    }

    renderItemChap = (item, index) => {
        return (
            <Pressable style={styles.chapItem}>
                <View style={{
                    ...styles.chapLearned,
                    backgroundColor: item.learned ? Colors.COLOR_GREEN : Colors.COLOR_DRK_GREY
                }} />
                <Text style={[[styles.chapTitle, { color: this.state.chapPlaying.chap == index ? Colors.COLOR_GREEN : Colors.COLOR_TEXT }]]}>{item.title}</Text>
                <Text style={commonStyles.textSmall}>{item.duration}</Text>
            </Pressable>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailView);
