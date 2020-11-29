import React, { Component } from 'react'
import { View, Text, ScrollView, Image, Pressable, ImageBackground } from 'react-native'
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
import cat1 from 'images/cat1.jpg';
import cat2 from 'images/cat2.jpg';
import cat3 from 'images/cat3.jpg';
import cat4 from 'images/cat4.jpg';
import cat5 from 'images/cat5.jpg';
import cat6 from 'images/cat6.jpg';
import cat7 from 'images/cat7.jpg';
import cat8 from 'images/cat8.jpg';
import CategoryListView from './list/category/categoryListView';
import { PathListView } from './list/paths/pathListView';
import ImageLoader from 'components/imageLoader';
import Button from 'components/button';

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
export class BrowseView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
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

        this.dataCat = [
            { title: "CONFERENCES", source: cat3 },
            { title: "CERTIFICATIONS", source: cat4 },
            { title: `<Software>${'\n'}Development`, source: cat5 },
            { title: `IT${'\n'}OPS`, source: cat6 },
            { title: `Information${'\n'}AND${'\n'}CYBER SECURITY`, source: cat7 },
            { title: `DATA${'\n'}PROFESSIONAL`, source: cat8 },
        ]
        this.dataPopularSkill = [
            { title: "Angular" },
            { title: "JavaScript" },
            { title: "Java" },
            { title: "C#" },
            { title: "Python" },
            { title: "React" },
            { title: "Flutter" },
        ]
        this.dataPath = [
            { title: 'React native', subTitle: '8 courses', source: 'https://codersera.com/blog/wp-content/uploads/2019/02/react-native.png' },
            { title: 'Flutter', subTitle: '5 courses', source: 'https://itcraftapps.com/wp-content/uploads/2019/03/Flutter-Cover.png' },
            { title: 'VueJS', subTitle: '2 courses', source: 'https://dragondev.vn/images/posts/q/1/F/q1FiADdO-vuejs-cta-main.jpg' },
        ]
        this.topAuthor = [
            { name: 'Mark Zuckerberg', avatar: 'https://devmaster.edu.vn/uploads/images/2020/01/mark-zuckerberg-cung-chia-se-ve-nhung-thay-doi-cua-facebook-trong-thoi-gian-toi-696x522.jpg' },
            { name: 'Obama', avatar: 'https://releaf.co/wp-content/uploads/2012/09/images-18.jpg' },
            { name: 'Elon Musk', avatar: 'https://peaklife.in/wp-content/uploads/2019/06/elon-musk-image.jpg' },
            { name: 'Rooney', avatar: 'https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/people-a-z/wayne-rooney/6152180-9-fre-FR/Wayne-Rooney.jpg' },
            { name: 'Putin', avatar: 'https://nld.mediacdn.vn/2020/11/7/putin-1604707713843601612296.jpg' },
        ]
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    renderNotLogin = () => {
        return (
            <View style={{ flexGrow: 1, marginBottom: Constants.MARGIN_X_LARGE }}>
                <Text style={[commonStyles.text, { fontSize: Fonts.FONT_SIZE_LARGE, marginHorizontal: Constants.MARGIN_X_LARGE + 8 }]}>Sign in to skill up today</Text>
                <Text style={[commonStyles.text, { marginHorizontal: Constants.MARGIN_X_LARGE + 8 }]}>Keep your skills uo-to-date with access to thousands of courses by industry experts</Text>
                <Button style={{ marginHorizontal: Constants.MARGIN_X_LARGE + 8 }} title={"SIGN IN TO START WATCHING"} titleStyle={{ fontWeight: 'bold', color: Colors.COLOR_WHITE }} backgroundColor={Colors.COLOR_PRIMARY} />
            </View>
        )
    }

    renderCategory = () => {
        return (
            <CategoryListView
                dataCat={this.dataCat}
                navigation={this.props.navigation}
            />
        )
    }

    renderPopularSkill = () => {
        return (
            <View>
                <Text style={styles.txtPopularSkill}>Popular Skills</Text>
                <FlatListCustom
                    onRef={(ref) => { this.flatListRef = ref }}
                    contentContainerStyle={{
                    }}
                    style={{
                    }}
                    data={this.dataPopularSkill}
                    renderItem={this.renderItemPopular}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    isShowEmpty={this.dataPopularSkill.length == 0}
                    isShowImageEmpty={true}
                    textForEmpty={""}
                />
            </View>
        )
    }

    renderPaths = () => {
        return (
            <PathListView
                dataPath={this.dataPath}
                navigation={this.props.navigation}
            />
        )
    }

    renderItemPopular = (item, index) => {
        return (
            <Pressable style={[styles.itemPopular, { marginRight: Constants.MARGIN_LARGE, marginLeft: index == 0 ? Constants.MARGIN_X_LARGE : 0 }]}>
                <Text style={styles.txtItemPopular}>{item.title}</Text>
            </Pressable>
        )
    }

    renderTopAuthors = () => {
        return (
            <View>
                <Text style={styles.txtTopAuthor}>Top Authors</Text>
                <FlatListCustom
                    onRef={(ref) => { this.flatListRef = ref }}
                    contentContainerStyle={{
                    }}
                    style={{
                    }}
                    data={this.topAuthor}
                    renderItem={this.renderItemTopAuthor}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    isShowEmpty={this.topAuthor.length == 0}
                    isShowImageEmpty={true}
                    textForEmpty={""}
                />
            </View>
        )
    }

    renderItemTopAuthor = (item, index) => {
        return (
            <Pressable style={[styles.itemTopAuthor, { marginRight: Constants.MARGIN_X_LARGE, marginLeft: index == 0 ? Constants.MARGIN_X_LARGE : 0 }]}>
                <ImageLoader path={item.avatar}
                    resizeModeType={'cover'}
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: Constants.BORDER_RADIUS
                    }} />
                <Text style={styles.txtItemAuthor}>{item.name}</Text>
            </Pressable>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    title={"Browse"}
                    visibleBack={false}
                    visibleAccount={true}
                    user={{ name: 'abc', avatar: null }}
                    onBack={() => { }}
                    visibleMenu={true}
                    menus={LIST_MENU}
                    navigation={this.props.navigation}
                />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {Utils.isNull(this.state.user) ? this.renderNotLogin() : null}
                    {this.renderCategory()}
                    {this.renderPopularSkill()}
                    {this.renderPaths()}
                    {this.renderTopAuthors()}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseView)
