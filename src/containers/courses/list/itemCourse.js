import React, { PureComponent } from 'react';
import { View, Text, Switch } from 'react-native';
import commonStyles from 'styles/commonStyles';
import { Colors } from 'values/colors';
import { Constants } from 'values/constants';
import { Fonts } from 'values/fonts';
import ic_menu_vertical from 'images/ic_menu_vertical.png';
import ImageLoader from 'components/imageLoader';
import { Rating, AirbnbRating } from 'react-native-ratings';

class ItemCourse extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: false
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props != nextProps) {
            this.props = nextProps;
            this.state.isEnabled = nextProps.item?.isEnabled
        }
    }

    render() {
        const { item, index, length, onPress } = this.props;
        return (
            <View style={{
                // paddingHorizontal: Constants.PADDING_XLARGE
            }}>
                <View style={{
                    flexDirection: 'row', alignItems: 'flex-start',
                    paddingVertical: Constants.PADDING_LARGE + 2,
                }}>
                    <ImageLoader path={item.resource} resizeModeType={'contain'} style={{ width: 110, height: 60 }} />
                    <View style={{ flex: 1, marginTop: -4 }}>
                        <Text style={[commonStyles.text, { fontSize: Fonts.FONT_SIZE_X_MEDIUM }]}>{item.title}</Text>
                        <Text style={[commonStyles.textSmall, { color: Colors.COLOR_TEXT_HOLDER }]}>{item.arthur}</Text>
                        <Text style={[commonStyles.textSmall, { color: Colors.COLOR_TEXT_HOLDER }]}>
                            {item.level}  <Text style={{...commonStyles.textSmallBold}}>{'\u0387'}</Text>  {item.createdAt}  <Text style={{...commonStyles.textSmallBold}}>{'\u0387'} </Text> {item.long}
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                {(index == 2 || index == 12 || index == 13) && <View style={{ backgroundColor: Colors.COLOR_DRK_GREY, height: 1, width: Constants.MAX_WIDTH }} />}
            </View>
        );
    }
}

export default ItemCourse;
