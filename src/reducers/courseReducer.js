import { initialState } from './index'
import { ErrorCode } from 'config/errorCode';
import { ActionEvent, getActionSuccess } from 'actions/actionEvent';


export default function (state = initialState, action) {
    switch (action.type) {
        case ActionEvent.SEARCH:
        case ActionEvent.GET_LECTURE:
        case ActionEvent.GET_COURSE_DETAIL:
        case ActionEvent.GET_NEW_COURSES:
        case ActionEvent.REGISTER_FREE_COURSE:
        case ActionEvent.GET_LESSONS:
        case ActionEvent.GET_COURSE_DETAIL_V2:
        case ActionEvent.GET_SAVE_COURSE_STATUS:
        case ActionEvent.SAVE_COURSE:
            return {
                ...state,
                isLoading: true,
                data: null,
                action: action.type,
                errorCode: null,
            }
        case getActionSuccess(ActionEvent.SEARCH):
        case getActionSuccess(ActionEvent.GET_LECTURE):
        case getActionSuccess(ActionEvent.GET_COURSE_DETAIL):
        case getActionSuccess(ActionEvent.REGISTER_FREE_COURSE):
        case getActionSuccess(ActionEvent.GET_NEW_COURSES):
        case getActionSuccess(ActionEvent.GET_LESSONS):
        case getActionSuccess(ActionEvent.GET_COURSE_DETAIL_V2):
        case getActionSuccess(ActionEvent.GET_SAVE_COURSE_STATUS):
        case getActionSuccess(ActionEvent.SAVE_COURSE):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                errorCode: action.payload.status ? action.payload.status : ErrorCode.ERROR_SUCCESS,
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