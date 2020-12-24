import ImageLoader from 'components/imageLoader'
import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import commonStyles from 'styles/commonStyles';
import DateUtil from 'utils/dateUtil';
import { Constants } from 'values/constants';
import { Rating, AirbnbRating } from 'react-native-ratings';

export class ItemRating extends PureComponent {
    render() {
        const { item, index, length } = this.props;
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: Constants.MARGIN_X_LARGE, marginTop: Constants.MARGIN_LARGE }}>
                <View>
                    <ImageLoader
                        style={{ width: 60, height: 60, borderRadius: Constants.BORDER_RADIUS }}
                        resizeModeType={'contain'}
                        path={item.user?.avatar}
                    />
                    <Text>{item.user?.name}</Text>
                </View>
                <View style={{ flex: 1, marginLeft: Constants.MARGIN_X_LARGE }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <AirbnbRating
                            count={item.averagePoint}
                            showRating={false}
                            isDisabled={true}
                            defaultRating={2}
                            size={10}
                        />
                        <Text style={{ ...commonStyles.textSmall }}>{DateUtil.convertFromFormatToFormat(item.createdAt, DateUtil.FORMAT_DATE_TIME_ZONE_T, DateUtil.FORMAT_DATE)}</Text>
                    </View>
                    <Text style={{ ...commonStyles.text }}>{item.content}</Text>
                </View>
            </View>
        )
    }
}

export default ItemRating
