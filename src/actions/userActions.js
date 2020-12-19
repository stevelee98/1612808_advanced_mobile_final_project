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
    type: ActionEvent.REGISTER,
    payload: data
});

export const registerSuccess = (data) => ({
    type: getActionSuccess(ActionEvent.REGISTER),
    payload: data
})

export const getProfile = () => ({
    type: ActionEvent.GET_PROFILE,
});

export const getProfileSuccess = (data) => ({
    type: getActionSuccess(ActionEvent.GET_PROFILE),
    payload: data
})