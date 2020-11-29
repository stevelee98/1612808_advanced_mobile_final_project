export const ActionEvent = {
    LOGIN: 'login',
    REQUEST_FAIL: 'requestFail',
    NOTIFY_LOGIN_SUCCESS: 'notifyLoginSuccess',
};

export function getActionSuccess (action) {
    return action + 'Success'
}
