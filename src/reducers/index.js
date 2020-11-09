import { ErrorCode } from 'config/errorCode';
import {combineReducers} from 'redux';

export const initialState = {
    data: null,
    isLoading: false,
    error: null,
    errorCode: ErrorCode.ERROR_INIT,
    action: null
}

export default combineReducers({

});
