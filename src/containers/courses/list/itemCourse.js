import React, { PureComponent } from 'react';
import { View, Text, Switch, Image } from 'react-native';
import commonStyles from 'styles/commonStyles';
import { Colors } from 'values/colors';
import { Constants } from 'values/constants';
import { Fonts } from 'values/fonts';
import ic_menu_vertical from 'images/ic_menu_vertical.png';
import ImageLoader from 'components/imageLoader';
import { Rating, AirbnbRating } from 'react-native-ratings';
import img_background_gradient from 'images/img_background_gradient.png';
import styles from './styles';

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
        const { item, index, length, onPress, horizontal } = this.props;
        return (
            <View style={horizontal && {
                width: Constants.MAX_WIDTH * 0.6,
                marginRight: Constants.MARGIN_LARGE,
                marginLeft: index == 0 ? Constants.MARGIN_X_LARGE : 0
            }}>
                <View style={{
                    flexDirection: horizontal ? 'column' : 'row',
                    alignItems: 'flex-start',
                    paddingVertical: Constants.PADDING_LARGE + 2,
                }}>
                    <View>
                        <ImageLoader path={item.resource} resizeModeType={'cover'}
                            style={{
                                width: horizontal ? Constants.MAX_WIDTH * 0.6 : 110,
                                height: horizontal ? Constants.MAX_WIDTH * 0.4 : 60,
                                borderRadius: 6
                            }} />
                        {horizontal && <Image source={img_background_gradient} style={styles.imgGradient} />}
                        {horizontal && <Text numberOfLines={2} style={styles.titleHorizontal}>{item.title}</Text>}
                    </View>
                    <View style={{ flex: 1, marginTop: horizontal ? 4 : -4, marginHorizontal: horizontal ? 8 : 8 }}>
                        {!horizontal && <Text numberOfLines={2} style={styles.titleVertical}>{item.title}</Text>}
                        <Text style={styles.txtArthur}>{item.arthur}</Text>
                        <Text style={[commonStyles.textSmall, { color: Colors.COLOR_TEXT_HOLDER, marginRight: Constants.MARGIN_X_LARGE }]}>
                            {item.level}  <Text style={{ ...commonStyles.textSmallBold }}>{'\u0387'}</Text>  {item.createdAt}  <Text style={{ ...commonStyles.textSmallBold }}>{'\u0387'} </Text> {item.long}
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
                    <Image source={ic_menu_vertical} style={horizontal && { position: 'absolute', top: 16, right: 4 }} />
                </View>
                {(index == 2 || index == 12 || index == 13) && <View style={{ backgroundColor: Colors.COLOR_DRK_GREY, height: 1, width: Constants.MAX_WIDTH }} />}
            </View>
        );
    }
}

export default ItemCourse;
