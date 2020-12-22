import { ActionEvent } from 'actions/actionEvent'
import { Observable } from 'rxjs';
import {
    map,
    filter,
    catchError,
    mergeMap
} from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { delay, mapTo, switchMap } from 'rxjs/operators';
import { dispatch } from 'rxjs/internal/observable/range';
import * as courseActions from 'actions/courseActions';
import { ServerPath } from 'config/Server';
import { Header, handleErrors, consoleLogEpic, handleConnectErrors } from './commonEpic';
import { ErrorCode } from 'config/errorCode';
import { fetchError } from 'actions/commonActions';
import ApiUtil from 'utils/apiUtil';

export const getNewCoursesEpic = action$ =>
    action$.pipe(
        ofType(ActionEvent.GET_NEW_COURSES),
        switchMap((action) =>
            fetch(ServerPath.API_URL + 'course/top-new', {
                method: 'POST',
                headers: ApiUtil.getHeader(),
                body: JSON.stringify(action.payload)
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else if (response.status == 400) {
                    return { status: response.status };
                }
                return handleErrors(response)
            }).then((responseJson) => {
                return courseActions.getNewCoursesSuccess(responseJson);
            })
                .catch((error) => {
                    consoleLogEpic("GET_NEW_COURSES EPIC:", ActionEvent.GET_NEW_COURSES, error)
                    return handleConnectErrors(error)
                })
        )
    );

export const search = action$ =>
    action$.pipe(
        ofType(ActionEvent.SEARCH),
        switchMap((action) =>
            fetch(ServerPath.API_URL + 'course/search', {
                method: 'POST',
                headers: ApiUtil.getHeader(),
                body: JSON.stringify(action.payload)
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else if (response.status == 400) {
                    return { status: response.status };
                }
                return handleErrors(response)
            }).then((responseJson) => {
                return courseActions.searchSuccess(responseJson);
            })
                .catch((error) => {
                    consoleLogEpic("SEARCH EPIC:", ActionEvent.SEARCH, error)
                    return handleConnectErrors(error)
                })
        )
    );

export const getLecturesEpic = action$ =>
    action$.pipe(
        ofType(ActionEvent.GET_LECTURES),
        switchMap((action) =>
            fetch(ServerPath.API_URL + 'instructor', {
                method: 'GET',
                headers: ApiUtil.getHeader()
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else if (response.status == 400) {
                    return { status: response.status };
                }
                return handleErrors(response)
            }).then((responseJson) => {
                return courseActions.getLecturesSuccess(responseJson);
            })
                .catch((error) => {
                    consoleLogEpic("GET_LECTURES EPIC:", ActionEvent.GET_LECTURES, error)
                    return handleConnectErrors(error)
                })
        )
    );

export const getCourseDetailEpic = action$ =>
    action$.pipe(
        ofType(ActionEvent.GET_COURSE_DETAIL),
        switchMap((action) =>
            fetch(ServerPath.API_URL + `course/get-course-info?id=${action.payload.id}`, {
                method: 'GET',
                headers: ApiUtil.getHeader()
            }).then((response) => {
                console.log("get course detal: ", response)
                if (response.ok) {
                    return response.json();
                } else if (response.status == 400) {
                    return { status: response.status };
                }
                return handleErrors(response)
            }).then((responseJson) => {
                return courseActions.getCourseDetailSuccess(responseJson);
            })
                .catch((error) => {
                    consoleLogEpic("GET_COURSE_DETAIL EPIC:", ActionEvent.GET_COURSE_DETAIL, error)
                    return handleConnectErrors(error)
                })
        )
    );

export const getLectureEpic = action$ =>
    action$.pipe(
        ofType(ActionEvent.GET_LECTURE),
        switchMap((action) =>
            fetch(ServerPath.API_URL + `instructor/detail/${action.payload.id}`, {
                method: 'GET',
                headers: ApiUtil.getHeader()
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else if (response.status == 400) {
                    return { status: response.status };
                }
                return handleErrors(response)
            }).then((responseJson) => {
                return courseActions.getLectureSuccess(responseJson);
            })
                .catch((error) => {
                    consoleLogEpic("GET_LECTURE EPIC:", ActionEvent.GET_LECTURE, error)
                    return handleConnectErrors(error)
                })
        )
    );

export const getLessonsEpic = action$ =>
    action$.pipe(
        ofType(ActionEvent.GET_LESSONS),
        switchMap((action) =>
            fetch(ServerPath.API_URL + `course/detail-with-lesson/${action.payload.id}`, {
                method: 'GET',
                headers: ApiUtil.getHeader()
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else if (response.status == 400) {
                    return { status: response.status };
                }
                return handleErrors(response)
            }).then((responseJson) => {
                return courseActions.getLessonsSuccess(responseJson);
            })
                .catch((error) => {
                    consoleLogEpic("GET_LESSONS EPIC:", ActionEvent.GET_LESSONS, error)
                    return handleConnectErrors(error)
                })
        )
    );
