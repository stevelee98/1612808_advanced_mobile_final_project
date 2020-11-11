import React from 'react'
import { View, StatusBar, Image, Text, Pressable } from 'react-native'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { Colors } from 'values/colors'
import { Constants } from 'values/constants'
import { Header as HeaderNB } from "native-base";
import commonStyles from 'styles/commonStyles';
import ic_back_white from "images/ic_back_white.png";

export default class Header extends React.Component {
    render() {
        return (
            <HeaderNB style={{ ...commonStyles.header}}>
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <View style={{
                        position: "absolute",
                        right: 0,
                        left: 0
                    }}>
                        <Text numberOfLines={1} style={[commonStyles.title, {
                            textAlign: "left",
                            marginHorizontal: Constants.MARGIN_X_LARGE * 3,
                        }]}>
                            {this.props.title}
                        </Text>
                    </View>
                    {this.props.visibleBack ?
                        <Pressable
                            android_ripple={{
                                color: Colors.COLOR_WHITE,
                                borderless: false,
                            }}
                            style={{
                                padding: Constants.PADDING_LARGE
                            }}
                            onPress={() => {
                                if (this.props.onBack)
                                    this.props.onBack();
                            }}
                        >
                            <Image source={ic_back_white} />
                        </Pressable>
                        : null}
                </View>
                <StatusBar
                    animated={true}
                    backgroundColor={this.props.headerColor}
                    barStyle={this.props.barStyle}  // dark-content, light-content and default
                    hidden={false}  //To hide statusBar
                // translucent={this.props.barTranslucent}  //allowing light, but not detailed shapes
                />
            </HeaderNB>
        )
    }
    
}

Header.propTypes = {
    title: PropTypes.string,
    // onBack: PropTypes.function,
}

Header.defaultProps = {
    title: '',
    visibleBack: true,
    barStyle: 'light-content',
    headerColor: Colors.COLOR_TAB
}