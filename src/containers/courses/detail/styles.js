import React from "react-native";
import { Constants } from 'values/constants';
import { Colors } from 'values/colors';
import commonStyles from "styles/commonStyles";
import { Fonts } from "values/fonts";

export default styles = {
    container: {
        flexGrow: 1,
    },
    btnBack: {
        padding: Constants.PADDING,
        position: 'absolute',
        top: 32, left: 16,
        elevation: 16
    },
    viewInfo: {
        backgroundColor: Colors.COLOR_GREY_BLUE,
        padding: Constants.PADDING_X_LARGE
    },
    avtArthur: {
        width: 24,
        height: 24,
        borderRadius: Constants.BORDER_RADIUS
    },
    arthur: {
        flexDirection: 'row',
        backgroundColor: Colors.COLOR_GREY_BLUE_LIGHT,
        borderRadius: Constants.BORDER_RADIUS,
        paddingRight: Constants.PADDING,
        alignItems: 'center',
        marginRight: Constants.MARGIN_LARGE,
        marginTop: Constants.MARGIN_LARGE
    },
    nameArthur: {
        ...commonStyles.textSmall,
        marginHorizontal: Constants.MARGIN_LARGE
    },
    btnAction: {
        alignItems: 'center',
    },
    imgBtnAction: {
        borderRadius: Constants.BORDER_RADIUS,
        backgroundColor: Colors.COLOR_GREY_BLUE_LIGHT,
        padding: Constants.PADDING_LARGE, marginBottom: Constants.MARGIN
    },
    viewBtn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: Constants.MARGIN_X_LARGE
    },
    courseResource: {
        width: Constants.MAX_WIDTH,
        height: Constants.MAX_WIDTH * (9 / 16)
    },
    viewCat: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    viewRating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: Constants.MARGIN_X_LARGE, marginTop: 6
    },
    viewDes: {
        flexDirection: 'row',
        alignItems: 'stretch',
        marginTop: Constants.MARGIN_X_LARGE
    }
};
