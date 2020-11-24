export const ActionEvent = {
    LOGIN: 'login',
    REQUEST_FAIL: 'requestFail',
};

export function getActionSuccess (action) {
    return action + 'Success'
}
