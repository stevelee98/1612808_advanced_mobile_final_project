import { ErrorCode } from 'config/errorCode';
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import homeReducer from './homeReducer';
import registerReducer from './registerReducer';
import browseReducer from './browseReducer';
import courseReducer from './courseReducer';
import ratingReducer from './ratingReducer';
import paymentReducer from './paymentReducer';
import questionReducer from './questionReducer';
import noteReducer from './noteReducer';
import downloadReducer from './downloadReducer';
import searchReducer from './searchReducer';

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
    register: registerReducer,
    browse: browseReducer,
    course: courseReducer,
    rating: ratingReducer,
    payment: paymentReducer,
    question: questionReducer,
    note: noteReducer,
    download: downloadReducer,
    search: searchReducer,
});
