import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { ErrorCode } from "config/errorCode";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import FlatListCustom from "components/flatListCustom";
import styles from './styles';

const LIST_MENU = [
    {
        name: 'Setting',
        screen: null,
        value: 1
    },
    {
        name: 'Xóa',
        screen: null,
        value: 2
    }
]
export class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

    }

    componentDidUpdate(prevProps, prevState){
        
    }

    renderFilterMenu = () => {
        return (
            <Menu
                style={styles.filterMenu}
                ref={ref => (this.menuOption = ref)}
            >
                <MenuTrigger text="" />
                <MenuOptions>
                    {LIST_MENU.map((item, index) => {
                        return (
                            <MenuOption
                                onSelect={() => {
                                    if (item.screen != null) {
                                    } else {
                                    }
                                }}
                            >
                                <View style={{ padding: Constants.PADDING_LARGE }}  >
                                    <Text style={{ ...commonStyles.text }}>{item.name}</Text>
                                </View>
                            </MenuOption>
                        )
                    })}
                </MenuOptions>
            </Menu>
        );
    }

    render() {
        return (
            <View>
                <Text> prop </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
