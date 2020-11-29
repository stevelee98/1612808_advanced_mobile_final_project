import React, { Component } from 'react'
import { View, Text, ScrollView, Image, Pressable, StatusBar, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { ErrorCode } from "config/errorCode";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import FlatListCustom from "components/flatListCustom";
import styles from './styles';
import { Container, Content, Root, Header } from 'native-base';
import Utils from 'utils/utils';
import commonStyles from 'styles/commonStyles';
import { Constants } from 'values/constants';
import { Fonts } from 'values/fonts';
import { Colors } from 'values/colors';
import ic_search_white from 'images/ic_search_white.png';
import ic_grid_white from 'images/ic_grid_white.png';
import ic_cancel_white from 'images/ic_cancel_white.png';
import Button from 'components/button';
import BaseView from 'containers/base/baseView';

export class SearchView extends BaseView {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: 'Obama'
            },
            stringSearch: null,
            typing: false,
            typingTimeout: 500,
            showSearchList: false
        }
        this.dataSearch = [
            { value: 'Obama' },
            { value: 'Putin' },
            { value: 'React' },
            { value: 'Javascript' },
            { value: 'Flutter' },
            { value: 'Biden' },
            { value: 'Rooney' },
            { value: 'Bill Gate' },
        ]
    }

    componentDidMount() {
        if (this.search) {
            this.search.focus()
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.search) {
            this.search.focus()
        }
    }

    /**
     * Manager text input search 
     * @param {*} stringSearch 
     */
    onChangeTextInput = (stringSearch) => {
        const self = this;
        if (self.state.typingTimeout) {
            clearTimeout(self.state.typingTimeout)
        }
        self.setState({
            stringSearch: stringSearch == "" ? null : stringSearch,
            typing: false,
            typingTimeout: setTimeout(() => {
                this.setState({ showSearchList: stringSearch == null || stringSearch.trim() == "" ? false : true })
            }, 500)
        });
    }

    renderItem = (item, index) => {
        return (
            <Pressable
                android_ripple={Constants.ANDROID_RIPPLE}
                style={styles.itemSearch}>
                <Image source={ic_search_white} style={{ marginRight: Constants.MARGIN_LARGE }} />
                <Text style={[commonStyles.text, { flex: 1 }]}>{item.value}</Text>
            </Pressable>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ ...commonStyles.header }}>
                    <View style={{
                        flex: 1,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <TextInput
                            autoFocus
                            style={styles.inputSearch}
                            placeholder={"Search..."}
                            placeholderTextColor={Colors.COLOR_TEXT_HOLDER}
                            ref={r => (this.search = r)}
                            value={this.state.stringSearch}
                            onChangeText={this.onChangeTextInput}
                            keyboardType="default"
                            underlineColorAndroid='transparent'
                            returnKeyType={"search"}
                        />
                        {this.state.stringSearch != null && <Pressable
                            android_ripple={Constants.ANDROID_RIPPLE}
                            style={{
                                flex: 0,
                                padding: Constants.PADDING_LARGE
                            }}
                            onPress={() => {
                                this.setState({ stringSearch: null, showSearchList: false })
                            }}
                        >
                            <Image source={ic_cancel_white} />
                        </Pressable>}
                    </View>
                </Header>
                {this.state.showSearchList && <FlatListCustom
                    onRef={(ref) => { this.flatListRef = ref }}
                    contentContainerStyle={{
                    }}
                    style={{
                    }}
                    data={this.dataSearch}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    textForEmpty={""}
                />}
                <StatusBar
                    animated={true}
                    hidden={false}
                    barStyle={'light-content'}
                    backgroundColor={Colors.COLOR_TAB}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchView)
