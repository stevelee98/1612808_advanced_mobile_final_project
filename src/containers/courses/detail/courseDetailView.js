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

class CourseDetailView extends BaseView {

    constructor(props) {
        super(props)
        this.state = {
            user: null,
            enableLoadMore: false,
            enableRefresh: true,
            refreshing: false,
            resource: null
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
            { id: 1, title: 'Overview', type: 1, resource: "https://www.traveller.com.au/content/dam/images/h/1/2/1/d/w/image.related.articleLeadwide.620x349.h12k0q.png/1545876271475.jpg", long: '2m50' }
        ]
    }

    componentDidMount = () => {
        this.setState({ resource: this.listLesson[0].resource })
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props !== nextProps) {
            this.props = nextProps;
        }
    }

    onPressItem = (id) => {
    }

    /**
     * Render item
     * @param {*} item
     * @param {*} index
     */
    renderItem = (item, index) => {
        return (
            <ItemCourse
                key={index}
                item={item}
                length={this.data.length}
            />
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Pressable
                    onPress={this.onBack}
                    android_ripple={{
                        color: Colors.COLOR_WHITE,
                        borderless: false,
                    }}
                    style={styles.btnBack}>
                    <Image source={ic_back_white} style={{}} />
                </Pressable>
                <ImageLoader path={this.state.resource} resizeModeType={'contain'} style={styles.courseResource} />
                <ScrollView style={styles.viewInfo}>
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
                    <View style={styles.viewBtn}>
                        <Pressable style={styles.btnAction}>
                            <View style={styles.imgBtnAction}>
                                <Image source={ic_book_mark} />
                            </View>
                            <Text style={commonStyles.text}>Bookmark</Text>
                        </Pressable>
                        <Pressable style={styles.btnAction}>
                            <View style={styles.imgBtnAction}>
                                <Image source={ic_online} />
                            </View>
                            <Text style={commonStyles.text}>Add to chanel</Text>
                        </Pressable>
                        <Pressable style={styles.btnAction}>
                            <View style={styles.imgBtnAction}>
                                <Image source={ic_download_white} />
                            </View>
                            <Text style={commonStyles.text}>Download</Text>
                        </Pressable>
                    </View>
                    <View style={styles.viewDes}>
                        <Text style={{ ...commonStyles.text, fontSize: Fonts.FONT_SIZE_MEDIUM, flex: 1 }}>
                            {this.course.description}
                        </Text>
                        <View style={{ backgroundColor: Colors.COLOR_GREY_BLUE_LIGHT, borderRadius: Constants.CORNER_RADIUS, padding: Constants.PADDING_LARGE }}>
                            <Image source={ic_dropdown_white} />
                        </View>
                    </View>
                </ScrollView>
                <FlatListCustom
                    onRef={(ref) => { this.flatListRef = ref }}
                    contentContainerStyle={{
                        marginHorizontal: Constants.MARGIN_LARGE
                    }}
                    style={{
                    }}
                    data={this.data}
                    renderItem={this.renderItem}
                    enableLoadMore={this.state.enableLoadMore}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    isShowEmpty={this.data == 0}
                    isShowImageEmpty={true}
                    textForEmpty={""}
                />
                <StatusBar translucent backgroundColor='transparent' />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailView);
