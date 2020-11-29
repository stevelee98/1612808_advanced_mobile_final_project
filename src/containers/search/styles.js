import React from "react-native";
import { Constants } from 'values/constants';
import { Colors } from 'values/colors';
import commonStyles from "styles/commonStyles";
import { Fonts } from "values/fonts";

export default styles = {
    container: {
        flexGrow: 1,
    },
    inputSearch: {
        ...commonStyles.text,
        flex: 1
    },
    itemSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Constants.PADDING_X_LARGE
    }
};
