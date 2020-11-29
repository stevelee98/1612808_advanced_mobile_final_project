import { ErrorCode } from 'config/errorCode';
import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import homeReducer from './homeReducer';

export const initialState = {
    data: null,
    isLoading: false,
    error: null,
    errorCode: ErrorCode.ERROR_INIT,
    action: null
}

export default combineReducers({
    login: loginReducer,
    home: homeReducer,
});
