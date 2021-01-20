import React, { Component } from 'react'
import { View, Text, BackHandler, ScrollView, Pressable, PermissionsAndroid, Image } from 'react-native'
import {
    Container, Content, Root,
} from 'native-base'
import { connect } from 'react-redux'
import { Constants } from 'values/constants';
import { Colors } from 'values/colors';
import TextInputCustom from 'components/textInputCustom';
import Header from 'components/header';
import styles from './styles';
import Button from 'components/button';
import Utils from 'utils/utils';
import commonStyles from 'styles/commonStyles';
import { Fonts } from 'values/fonts';
import ImageLoader from 'components/imageLoader';
import StorageUtil from 'utils/storageUtil';
import BaseView from 'containers/base/baseView';
import * as userActions from 'actions/userActions';
import { ActionEvent, getActionSuccess } from 'actions/actionEvent';
import storage from '@react-native-firebase/storage';
import ImagePicker from "react-native-image-picker";
import DialogCustom from 'components/dialogCustom';
import ic_camera_black from 'images/ic_camera_black.png';

const CANCEL_INDEX = 2;
const FILE_SELECTOR = ['Camera', 'Thư viện', 'Hủy'];
const optionsCamera = {
    title: "Select avatar",
    storageOptions: {
        skipBackup: true,
        path: "images"
    }
};
class UserProfileView extends BaseView {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            name: null,
            phone: null,
            email: null,
            avatar: null,
            isEdit: false,
            isLoading: false,
            visibleDialog: false
        };
    }

    componentDidMount = async () => {
        let user = await this.getProfile();
        this.setState({ user: user, name: user.name, phone: user.phone, email: user.email })
    }

    validateData() {
        const { name, phone } = this.state;
        if (name == null) {
            this.showMessage("Please fill your email");
            this.name.focus()
            return false;
        } else if (name.trim() == '') {
            this.showMessage("Please fill your email");
            this.name.focus()
            return false;
        } else if (phone == null) {
            this.showMessage("Please fill your phone");
            this.phone.focus()
            return false;
        } else if (!Utils.validatePhone(phone.trim())) {
            this.showMessage("Số điện thoại không đúng định dạng");
            this.phone.focus();
        } else if (phone.trim().includes(" ") && phone.trim() == '') {
            this.showMessage("Vui lòng nhập số điện thoại");
            this.phone.focus();
            return false;
        } else if (Utils.validatePhoneContainSpecialCharacter(phone.trim()) ||
            Utils.validatePhoneContainWord(phone.trim())) {
            this.showMessage("Số điện thoại không đúng định dạng");
            this.phone.focus();
            return false;
        } else if (phone.trim().length != 10 || phone.charAt(0) != '0') {
            this.showMessage("Số điện thoại không đúng định dạng");
            this.phone.focus();
            return false;
        }
        return true;
    }

    onEditData = (url = null) => {
        let data = {
            name: this.state.name,
            phone: this.state.phone,
            avatar: url ? url : this.state.avatar
        }
    }

    uploadImage = (uri) => {
        this.setState({
            isLoading: true
        })
        let fr = storage().ref(`user/${this.state.user.id}/avatar`);
        fr.putFile(uri, { contentType: 'image/jpeg' }).on(
            storage.TaskEvent.STATE_CHANGED,
            snapshot => {
                console.log("snapshot uploaded image to firebase", snapshot);
                if (snapshot.state == "success") {
                    fr.getDownloadURL().then((url) => {
                        this.setState({
                            avatar: { uri: url }
                        }, () => {
                            this.onEditData(url)
                        })
                    })
                }
            }, error => {
                setError(error);
            }
        );
    }

    /**
 * Attach file
 */
    attachFile = () => {
        this.showDialog();
    };

    /**
     * Show dialog
     */
    showDialog() {
        this.setState({
            visibleDialog: true
        });
    }

    /**
     * hide dialog
     */
    hideDialog() {
        this.setState({
            visibleDialog: false
        });
    }

    /**
     * Called when selected type
     * @param {*} index
     */
    onSelectedType(index) {
        if (index !== CANCEL_INDEX) {
            if (index === 0) {
                this.takePhoto();
            } else if (index === 1) {
                this.showDocumentPicker();
            }
        } else {
            this.hideDialog();
        }
    }

    /**
      * Show document picker
      */
    showDocumentPicker = async fileType => {
        const hasCameraPermission = await this.hasPermission(PermissionsAndroid.PERMISSIONS.CAMERA);
        if (!hasCameraPermission) return;
        ImagePicker.launchImageLibrary(optionsCamera, response => {
            const { error, uri } = response;
            this.hideDialog();
            if (uri && !error) {
                this.setState({
                    avatar: uri
                })
            } else if (error) {
                console.log("The photo picker error. Check ImagePicker.launchCamera func", error)
            }
        });
    };

    takePhoto = async () => {
        const hasCameraPermission = await this.hasPermission(PermissionsAndroid.PERMISSIONS.CAMERA);
        if (!hasCameraPermission) return;
        ImagePicker.launchCamera(optionsCamera, response => {
            const { error, uri } = response;
            this.hideDialog();
            if (uri && !error) {
                this.setState({
                    avatar: uri
                })
            } else if (error) {
                console.log("The photo picker error. Check ImagePicker.launchCamera func", error)
            }
        });
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    title={"Profile"}
                    onBack={this.onBack}
                />
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    style={{
                        flex: 1,
                        paddingHorizontal: Constants.PADDING_X_LARGE
                    }}>
                    {Utils.isNull(this.state.user) ? this.renderNotLogin() : this.renderInfo()}
                </ScrollView>
            </View>
        )
    }

    renderFileSelectionDialog() {
        return (
            <DialogCustom
                visible={this.state.visibleDialog}
                isVisibleTitle={true}
                isVisibleContentForChooseImg={true}
                contentTitle={'Chọn hình ảnh'}
                onTouchOutside={() => {
                    this.setState({ visibleDialog: false });
                }}
                onPressX={() => {
                    this.setState({ visibleDialog: false });
                }}
                onPressCamera={() => {
                    this.onSelectedType(0);
                }}
                onPressGallery={() => {
                    this.onSelectedType(1);
                }}
            />
        );
    }

    renderNotLogin = () => {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={commonStyles.text}>Please sign in to view your profile</Text>
                <Pressable style={styles.buttonSignIn} onPress={() => {
                    this.props.navigation.navigate("Login")
                }}>
                    <Text style={[commonStyles.text]}>SIGN IN</Text>
                </Pressable>
            </View>
        )
    }

    renderInfo = () => {
        let { user, email, phone, avatar, name } = this.state;
        return (
            <View style={{ flex: 1, marginTop: Constants.MARGIN_X_LARGE }}>
                <View style={{ alignItems: 'center', marginBottom: Constants.MARGIN_XX_LARGE }}>
                    <ImageLoader path={user.avatar} style={{ width: 80, height: 80, borderRadius: Constants.BORDER_RADIUS }} resizeModeType={'cover'} />
                    <View style={{
                        backgroundColor: Colors.COLOR_DRK_GREY,
                        position: 'absolute',
                        bottom: - 12,
                        right: Constants.MAX_WIDTH / 2 - 58,
                        padding: 8,
                        borderRadius: 56
                    }}>
                        <Image source={ic_camera_black} />
                    </View>
                    {/* <Text style={[commonStyles.textBold, { fontSize: Fonts.FONT_SIZE_X_LARGE, flex: 1, marginVertical: Constants.MARGIN_X_LARGE }]}>{name} âlal</Text> */}
                </View>
                <TextInputCustom
                    editable={this.state.isEdit}
                    onRef={(r) => (this.name = r)}
                    oneLine={true}
                    label={'Name'}
                    placeholder={'Name'}
                    value={name}
                    onChangeText={(txt) => {
                        this.setState({ name: txt });
                    }}
                    onSubmitEditing={() => {
                    }}
                    returnKeyType={'next'}
                />
                <TextInputCustom
                    editable={this.state.isEdit}
                    onRef={(r) => (this.phone = r)}
                    oneLine={true}
                    label={'Phone'}
                    placeholder={'Phone'}
                    value={phone}
                    onChangeText={(txt) => {
                        this.setState({ Phone: txt });
                    }}
                    onSubmitEditing={() => {
                    }}
                    keyboardType={"phone-pad"}
                    returnKeyType={'done'}
                />
                <TextInputCustom
                    editable={false}
                    onRef={(r) => (this.email = r)}
                    oneLine={true}
                    label={'Email'}
                    placeholder={'Email'}
                    value={email}
                    onChangeText={(txt) => {
                        this.setState({ email: txt });
                    }}
                    onSubmitEditing={() => {
                    }}
                    keyboardType={"email-address"}
                    returnKeyType={'next'}
                />
                <View style={{ marginTop: Constants.MARGIN_X_LARGE }}>
                    {this.state.isEdit ?
                        <Button
                            onPress={() => { this.setState({ isEdit: false }) }}
                            title={"SAVE"}
                            border={{ borderWidth: 1, borderColor: Colors.COLOR_BLUE }}
                            titleStyle={{ fontWeight: 'bold', color: Colors.COLOR_BLUE }} />
                        : <Button
                            onPress={() => { this.setState({ isEdit: true }, () => { this.name.focus() }) }}
                            title={"CHỈNH SỬA"}
                            titleStyle={{ fontWeight: 'bold', color: '#a5a5a5' }}
                            backgroundColor={Colors.COLOR_DRK_GREY} />}
                </View>
                {this.renderFileSelectionDialog()}
                {/* <Text style={[commonStyles.textBold, { fontSize: Fonts.FONT_SIZE_XX_MEDIUM, marginVertical: Constants.MARGIN_XX_LARGE }]}>Activity insights (last 30 days)</Text>
                <View>
                    <Text style={[commonStyles.text, { fontSize: Fonts.FONT_SIZE_MEDIUM }]}>TOTAL ACTIVE DAYS</Text>
                    <Text style={[commonStyles.textBold, { fontSize: Fonts.FONT_SIZE_XX_MEDIUM }]}>0          <Text style={[commonStyles.textSmall, { fontWeight: 'normal' }]}>0 day streak</Text></Text>
                </View>
                <View style={{ marginTop: Constants.MARGIN_X_LARGE }}>
                    <Text style={[commonStyles.text, { fontSize: Fonts.FONT_SIZE_MEDIUM }]}>MOST ACTIVE TIME OF DAY</Text>
                    <Text style={[commonStyles.textBold, { fontSize: Fonts.FONT_SIZE_XX_MEDIUM }]}>7:00 AM</Text>
                </View>
                <View style={{ marginTop: Constants.MARGIN_X_LARGE }}>
                    <Text style={[commonStyles.text, { fontSize: Fonts.FONT_SIZE_MEDIUM }]}>MOST VIEWED SUBJECT</Text>
                    <Text style={[commonStyles.textBold, { fontSize: Fonts.FONT_SIZE_XX_MEDIUM }]}>N/A</Text>
                </View> */}
                {this.showLoadingBar(this.props.isLoading || this.state.isLoading)}
            </View>
        );
    };

}

const mapStateToProps = (state) => ({
    data: state.user.data,
    isLoading: state.user.isLoading,
    errorCode: state.user.errorCode,
    action: state.user.action,
})

const mapDispatchToProps = {
    ...userActions,
}


export default connect(mapStateToProps, mapDispatchToProps)(UserProfileView)
