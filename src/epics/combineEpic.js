import { combineEpics } from 'redux-observable';
// import { } from './commonEpic';
import { from } from 'rxjs';
import {
    loginEpic,
    registerEpic,
    getProfileEpic,
} from './userEpic';

export default combineEpics(
    loginEpic,
    registerEpic,
    getProfileEpic,
);