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
            rating: { star: 4, count: 512 }
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
                <ImageLoader path={this.state.resource} resizeModeType={'contain'} style={{ width: Constants.MAX_WIDTH, height: Constants.MAX_WIDTH * (9 / 16) }} />
                <ScrollView style={styles.viewInfo}>
                    <Text style={[commonStyles.text, { fontSize: Fonts.FONT_SIZE_X_LARGE }]}>{this.course.title}</Text>
                    {this.course.arthur && this.course.arthur.map((item, index) => {
                        return (
                            <Pressable
                                key={index}
                                style={styles.arthur}
                            >
                                <ImageLoader path={item.avatar} resizeModeType={'cover'} style={styles.avtArthur} />
                                <Text style={commonStyles.text}>{item.name}</Text>
                            </Pressable>
                        )
                    })}
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
