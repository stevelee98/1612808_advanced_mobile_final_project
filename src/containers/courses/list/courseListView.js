import React, { Component } from 'react'
import { View, Text, BackHandler, Image, Pressable } from 'react-native';
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
import ItemCourse from './itemCourse';
import BaseView from 'containers/base/baseView';

class CourseListView extends BaseView {

    constructor(props) {
        super(props)
        this.state = {
            user: null,
            enableLoadMore: false,
            enableRefresh: true,
            refreshing: false
        }
        this.data = [
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
        this.course = {
            id: 1,
            title: 'Software Development'
        }
    }

    componentDidMount = () => {
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
                <Header
                    title={""}
                    onBack={this.onBack}
                />
                <View style={{ paddingHorizontal: Constants.PADDING_X_LARGE, paddingVertical: Constants.MARGIN_XX_LARGE }}><Text style={[commonStyles.text, { fontSize: Fonts.FONT_SIZE_X_LARGE }]}>{this.course.title}</Text></View>
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
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseListView);
