import React, { PureComponent } from 'react';
import { View, Text, Image, Pressable, ImageBackground } from 'react-native';
import commonStyles from 'styles/commonStyles';
import { Colors } from 'values/colors';
import { Constants } from 'values/constants';
import { Fonts } from 'values/fonts';
import styles from './styles';

class ItemCourse extends PureComponent {

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props != nextProps) {
            this.props = nextProps;
        }
    }

    render() {
        const { item, index, length, onPress, horizontal } = this.props;
        return (
            <ImageBackground
                source={item.source}
                imageStyle={styles.imgItemBackground}
                style={[styles.itemCat, { marginRight: Constants.MARGIN_X_LARGE, marginLeft: index == 0 || index == 1 ? Constants.MARGIN_X_LARGE : 0 }]}
            >
                <Pressable
                    onPress={() => { onPress(item) }}
                    android_ripple={Constants.ANDROID_RIPPLE}
                    style={styles.btnItemCat}>
                    <Text numberOfLines={2} style={styles.txtItemCat}>{item.title}</Text>
                </Pressable>
            </ImageBackground>
        );
    }
}

export default ItemCourse;
