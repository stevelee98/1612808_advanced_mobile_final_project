export const ActionEvent = {
    LOGIN: 'login',
    REQUEST_FAIL: 'requestFail',
    NOTIFY_LOGIN_SUCCESS: 'notifyLoginSuccess',
    SAVE_EXCEPTION: 'saveException',
    REGISTER: 'register',
    GET_PROFILE: 'getProfile'
};

export function getActionSuccess(action) {
    return action + 'Success'
}
