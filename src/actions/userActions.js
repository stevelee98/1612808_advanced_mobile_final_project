import { ActionEvent, getActionSuccess } from './actionEvent'


export const login = (data) => ({
    type: ActionEvent.LOGIN,
    payload: data 
})

export const loginSuccess = data => ({
    type: getActionSuccess(ActionEvent.LOGIN),
    payload: data
});

export const notifyLoginSuccess = () => ({
    type: ActionEvent.NOTIFY_LOGIN_SUCCESS
})

export const register = data => ({
    type: getActionSuccess(ActionEvent.REGISTER),
    payload: data
});

export const registerSuccess = () => ({
    type: ActionEvent.REGISTER
})
