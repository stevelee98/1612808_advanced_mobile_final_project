import { ActionEvent, getActionSuccess } from './actionEvent'


export const login = data => ({
    type: ActionEvent.LOGIN,
    payload: data
})

export const loginSuccess = data => ({
    type: getActionSuccess(ActionEvent.LOGIN),
    payload: { data }
});
