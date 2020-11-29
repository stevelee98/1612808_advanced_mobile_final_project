import { initialState } from './index'
import { ErrorCode } from 'config/errorCode';
import { ActionEvent,getActionSuccess } from 'actions/actionEvent';


export default function (state = initialState, action) {
    switch (action.type) {
        case ActionEvent.NOTIFY_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                errorCode: ErrorCode.ERROR_SUCCESS,
                data: null,
                action: action.type,
            }
        case ActionEvent.REQUEST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
                errorCode: action.payload.errorCode,
                action: action.type
            }
        default:
            return state;
    }
}