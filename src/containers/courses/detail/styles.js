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
        backgroundColor: Colors.COLOR_DRK_GREY,
        padding: Constants.PADDING_X_LARGE
    },
    avtArthur: {
        width: 24,
        height: 24,
        borderRadius: Constants.BORDER_RADIUS
    },
    arthur: {
        flexDirection: 'row',
        backgroundColor: Colors.COLOR_GREY_LIGHT,
        borderRadius:Constants.BORDER_RADIUS,
        paddingRight: Constants.PADDING
    }
};
