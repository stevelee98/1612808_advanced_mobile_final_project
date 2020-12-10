export const ActionEvent = {
    LOGIN: 'login',
    REQUEST_FAIL: 'requestFail',
    NOTIFY_LOGIN_SUCCESS: 'notifyLoginSuccess',
    SAVE_EXCEPTION: 'saveException',
    REGISTER: 'register'
};

export function getActionSuccess(action) {
    return action + 'Success'
}
